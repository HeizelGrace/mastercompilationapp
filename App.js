
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import { AppProvider, useAppContext } from './context/AppContext';
import HomeScreen from './screens/HomeScreen';
import ActivityOneScreen from './screens/ActivityOneScreen';
import ActivityTwoScreen from './screens/ActivityTwoScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  const { colors, themeMode } = useAppContext();

  return (
    <NavigationContainer>
      <StatusBar style={themeMode === 'dark' ? 'light' : 'dark'} />

      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: '700',
          },
          contentStyle: {
            backgroundColor: colors.background,
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ActivityOne"
          component={ActivityOneScreen}
          options={{ title: 'Activity 1' }}
        />

        <Stack.Screen
          name="ActivityTwo"
          component={ActivityTwoScreen}
          options={{ title: 'Activity 2' }}
        />

        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'Profile' }}
        />

        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: 'Settings' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  );
}
