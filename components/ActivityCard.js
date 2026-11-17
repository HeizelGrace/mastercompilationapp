import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './CustomButton';

export default function ActivityCard({
  title,
  description,
  status,
  buttonLabel,
  onPress,
  colors,
}) {
  return (
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
      <View style={styles.headerRow}>
        <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
        <View style={[styles.statusBadge, { backgroundColor: colors.muted }]}>
          <Text style={[styles.statusText, { color: colors.primary }]}>{status}</Text>
        </View>
      </View>

      <Text style={[styles.description, { color: colors.textSecondary }]}>
        {description}
      </Text>

      <CustomButton
        title={buttonLabel}
        onPress={onPress}
        colors={colors}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    flex: 1,
    marginRight: 12,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  statusText: {
    fontSize: 11,
    fontWeight: '700',
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 18,
  },
  button: {
    borderRadius: 12,
  },
});
