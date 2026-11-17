import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useAppContext } from '../context/AppContext';
import CustomButton from '../components/CustomButton';
import ThemeToggle from '../components/ThemeToggle';

export default function SettingsScreen({ navigation }) {
  const { themeMode, toggleTheme, colors } = useAppContext();

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View
          style={[
            styles.card,
            {
              backgroundColor: colors.surface,
              borderColor: colors.border,
              shadowColor: colors.cardShadow,
            },
          ]}
        >
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Appearance</Text>

          <ThemeToggle
            value={themeMode === 'dark'}
            onValueChange={toggleTheme}
            colors={colors}
          />
        </View>

        <View
          style={[
            styles.card,
            {
              backgroundColor: colors.surface,
              borderColor: colors.border,
              shadowColor: colors.cardShadow,
            },
          ]}
        >
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Application</Text>
          <Text style={[styles.meta, { color: colors.textSecondary }]}>Name: MasterCompilationApp</Text>
          <Text style={[styles.meta, { color: colors.textSecondary }]}>Version: 1.0.0</Text>
          <Text style={[styles.meta, { color: colors.textSecondary }]}>Platform: Android / Expo</Text>

          <CustomButton
            title="Open profile"
            variant="secondary"
            onPress={() => navigation.navigate('Profile')}
            colors={colors}
            style={styles.button}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  card: {
    borderWidth: 1,
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 16,
  },
  meta: {
    fontSize: 14,
    marginBottom: 10,
  },
  button: {
    marginTop: 14,
  },
});
