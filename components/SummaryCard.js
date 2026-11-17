import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SummaryCard({ label, value, accent, colors }) {
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.surface,
          shadowColor: colors.cardShadow,
          borderColor: colors.border,
        },
      ]}
    >
      <Text style={[styles.label, { color: colors.textSecondary }]}>{label}</Text>
      <Text style={[styles.value, { color: colors.text }]}>{value}</Text>
      <View
        style={[
          styles.accentBar,
          {
            backgroundColor: accent || colors.primary,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minWidth: '46%',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 12,
  },
  label: {
    fontSize: 12,
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    fontWeight: '600',
  },
  value: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 10,
  },
  accentBar: {
    height: 4,
    width: 42,
    borderRadius: 999,
  },
});
