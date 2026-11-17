import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function SectionHeader({
  title,
  actionText,
  onActionPress,
  colors,
}) {
  return (
    <View style={styles.row}>
      <Text style={[styles.title, { color: colors.text }]}>{title}</Text>

      {actionText ? (
        <Pressable onPress={onActionPress}>
          <Text style={[styles.action, { color: colors.accent }]}>{actionText}</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  action: {
    fontSize: 12,
    fontWeight: '700',
  },
});
