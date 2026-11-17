import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ProgressIndicator({ percent, colors }) {
  return (
    <View style={[styles.container, { backgroundColor: colors.surface, borderColor: colors.border }]}> 
      <View style={styles.headerRow}>
        <Text style={[styles.label, { color: colors.textSecondary }]}>Progress</Text>
        <Text style={[styles.percent, { color: colors.primary }]}>{percent}%</Text>
      </View>

      <View style={[styles.track, { backgroundColor: colors.muted }]}> 
        <View
          style={[
            styles.fill,
            {
              width: `${percent}%`,
              backgroundColor: colors.accent,
            },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    marginBottom: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
  },
  percent: {
    fontSize: 16,
    fontWeight: '800',
  },
  track: {
    height: 12,
    borderRadius: 999,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: 999,
  },
});
