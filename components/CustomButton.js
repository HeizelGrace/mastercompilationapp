import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export default function CustomButton({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  style,
  textStyle,
  colors,
}) {
  const isSecondary = variant === 'secondary';

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: disabled
            ? colors.textSecondary
            : isSecondary
              ? colors.surface
              : colors.primary,
          borderColor: isSecondary ? colors.primary : 'transparent',
          opacity: pressed ? 0.9 : 1,
        },
        style,
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color: isSecondary ? colors.primary : colors.surface,
          },
          textStyle,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: '700',
  },
});
