import React from 'react';
import { StyleSheet, Switch, View, Text } from 'react-native';

export default function ThemeToggle({ value, onValueChange, colors }) {
  return (
    <View style={styles.row}>
      <View style={styles.labelWrap}>
        <Text style={[styles.rowTitle, { color: colors.text }]}>Dark mode</Text>
        <Text style={[styles.rowSubtitle, { color: colors.textSecondary }]}>
          Toggle the app theme for all screens.
        </Text>
      </View>

      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: '#CBD5E1', true: colors.primary }}
        thumbColor="#FFFFFF"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  labelWrap: {
    flex: 1,
    paddingRight: 12,
  },
  rowTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  rowSubtitle: {
    fontSize: 13,
    lineHeight: 18,
  },
});
