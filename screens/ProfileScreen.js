import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import ProfileHeader from '../components/ProfileHeader';
import { useAppContext } from '../context/AppContext';

export default function ProfileScreen({ navigation }) {
  const { profileName, updateProfileName, colors } = useAppContext();
  const [nameInput, setNameInput] = useState(profileName);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    updateProfileName(nameInput);
    setIsSaved(true);
  };

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <ProfileHeader
            profileName={profileName}
            subtitle="Mobile Computing Student"
            colors={colors}
          />

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
            <Text style={[styles.label, { color: colors.textSecondary }]}>Display name</Text>
            <TextInput
              value={nameInput}
              onChangeText={(text) => {
                setNameInput(text);
                setIsSaved(false);
              }}
              placeholder="Enter your name"
              placeholderTextColor={colors.textSecondary}
              style={[
                styles.input,
                {
                  backgroundColor: colors.inputBackground,
                  borderColor: colors.border,
                  color: colors.text,
                },
              ]}
            />

            <View style={styles.actions}>
              <CustomButton
                title="Save changes"
                onPress={handleSave}
                colors={colors}
                style={styles.primaryButton}
              />
            </View>

            {isSaved ? (
              <Text style={[styles.saved, { color: colors.success }]}>Profile updated successfully.</Text>
            ) : (
              <Text style={[styles.helper, { color: colors.textSecondary }]}>
                Changes are shared across the app.
              </Text>
            )}
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
            <Text style={[styles.sectionTitle, { color: colors.text }]}>Profile summary</Text>
            <Text style={[styles.summary, { color: colors.textSecondary }]}>
              A motivated student exploring mobile computing concepts, laboratory activities,
              and practical app development workflows.
            </Text>

            <CustomButton
              title="Back to home"
              variant="secondary"
              onPress={() => navigation.navigate('Home')}
              colors={colors}
              style={styles.secondaryButton}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  scrollContent: {
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
  label: {
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
  },
  actions: {
    marginTop: 18,
  },
  primaryButton: {
    marginTop: 4,
  },
  secondaryButton: {
    marginTop: 18,
  },
  saved: {
    marginTop: 12,
    fontSize: 14,
    fontWeight: '600',
  },
  helper: {
    marginTop: 12,
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 10,
  },
  summary: {
    fontSize: 14,
    lineHeight: 22,
  },
});
