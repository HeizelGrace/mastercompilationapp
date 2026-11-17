import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ActivityCard from '../components/ActivityCard';
import Header from '../components/Header';
import ProgressIndicator from '../components/ProgressIndicator';
import SectionHeader from '../components/SectionHeader';
import SummaryCard from '../components/SummaryCard';
import EmptyState from '../components/EmptyState';
import { useAppContext } from '../context/AppContext';

export default function HomeScreen({ navigation }) {
  const { colors, profileName } = useAppContext();

  const activityCards = [
    {
      title: 'Activity 1',
      description: 'First Mobile Computing Laboratory Activity',
      status: 'Available',
      buttonLabel: 'Open Activity',
      onPress: () => navigation.navigate('ActivityOne'),
    },
    {
      title: 'Activity 2',
      description: 'Second Mobile Computing Laboratory Activity',
      status: 'Available',
      buttonLabel: 'Open Activity',
      onPress: () => navigation.navigate('ActivityTwo'),
    },
  ];

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Header
          title="Master Compilation App"
          subtitle="Your Mobile Computing Activities."
          profileName={profileName}
          onProfilePress={() => navigation.navigate('Profile')}
          onSettingsPress={() => navigation.navigate('Settings')}
          colors={colors}
        />

        <View style={styles.content}>
          <View style={styles.summaryRow}>
            <SummaryCard label="Total" value="2" accent={colors.accent} colors={colors} />
            <SummaryCard label="Completed" value="0" accent={colors.success} colors={colors} />
          </View>

          <View style={styles.summaryRow}>
            <SummaryCard label="Pending" value="2" accent={colors.warning} colors={colors} />
            <SummaryCard label="Progress" value="0%" accent={colors.primary} colors={colors} />
          </View>

          <ProgressIndicator percent={0} colors={colors} />

          <SectionHeader title="Activity Menu" colors={colors} />

          {activityCards.map((activity) => (
            <ActivityCard
              key={activity.title}
              title={activity.title}
              description={activity.description}
              status={activity.status}
              buttonLabel={activity.buttonLabel}
              onPress={activity.onPress}
              colors={colors}
            />
          ))}

          <SectionHeader title="Recent activities" colors={colors} />
          <EmptyState
            title="No recent updates"
            message="Your latest lab activity progress will appear here as you complete tasks."
            colors={colors}
          />

          <View
            style={[
              styles.infoCard,
              {
                backgroundColor: colors.surface,
                borderColor: colors.border,
                shadowColor: colors.cardShadow,
              },
            ]}
          >
            <Text style={[styles.infoTitle, { color: colors.text }]}>Application information</Text>
            <Text style={[styles.infoText, { color: colors.textSecondary }]}>
              A central dashboard for the Mobile Computing laboratory, built for organized,
              responsive learning and future activity expansion.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  infoCard: {
    marginTop: 16,
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    lineHeight: 22,
  },
});
