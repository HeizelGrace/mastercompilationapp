
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import { useAppContext } from '../context/AppContext';

export default function ActivityTwoScreen({ navigation }) {
  const { colors } = useAppContext();
  const [status, setStatus] = useState('Not Started');
  const [buttonLabel, setButtonLabel] = useState('Begin activity');

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus('Ready to begin');
      setButtonLabel('Begin activity');
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  const handleActivityPress = () => {
    if (status === 'Ready to begin' || status === 'Not Started') {
      setStatus('In Progress');
      setButtonLabel('Mark as complete');
      return;
    }

    setStatus('Completed');
    setButtonLabel('Activity completed');
  };

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.content}>
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
          <Text style={[styles.eyebrow, { color: colors.primary }]}>Laboratory Activity</Text>
          <Text style={[styles.title, { color: colors.text }]}>Activity 2</Text>
          <Text style={[styles.description, { color: colors.textSecondary }]}>
            Build a second mobile app scenario focused on improving interaction design, navigation
            usability, and classroom-ready application workflows.
          </Text>

          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>Learning objectives</Text>
            <Text style={[styles.bullet, { color: colors.textSecondary }]}>• Extend an app with multiple screens and consistent navigation.</Text>
            <Text style={[styles.bullet, { color: colors.textSecondary }]}>• Manage shared state and user profile settings across screens.</Text>
            <Text style={[styles.bullet, { color: colors.textSecondary }]}>• Refine a mobile interface for readability and accessibility.</Text>
          </View>

          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>Status</Text>
            <Text style={[styles.statusText, { color: status === 'Completed' ? colors.success : colors.primary }]}>{status}</Text>
          </View>

          <CustomButton
            title={buttonLabel}
            onPress={handleActivityPress}
            colors={colors}
            style={styles.button}
          />

          <CustomButton
            title="Back to Home"
            variant="secondary"
            onPress={() => navigation.navigate('Home')}
            colors={colors}
            style={styles.secondaryButton}
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
    borderRadius: 20,
    padding: 20,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    lineHeight: 23,
    marginBottom: 20,
  },
  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '800',
    marginBottom: 10,
  },
  bullet: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 6,
  },
  statusText: {
    fontSize: 15,
    fontWeight: '700',
  },
  button: {
    marginTop: 10,
  },
  secondaryButton: {
    marginTop: 12,
  },
});
