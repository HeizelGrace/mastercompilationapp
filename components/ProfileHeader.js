import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ProfileHeader({ profileName, subtitle, colors }) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.primary,
        },
      ]}
    >
      <View style={styles.avatarWrap}>
        <Text style={styles.avatarText}>{profileName.charAt(0).toUpperCase()}</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.name}>{profileName}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 18,
    marginBottom: 20,
  },
  avatarWrap: {
    width: 58,
    height: 58,
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '800',
  },
  textContainer: {
    flex: 1,
  },
  name: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
  },
  subtitle: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 13,
    marginTop: 4,
  },
});
