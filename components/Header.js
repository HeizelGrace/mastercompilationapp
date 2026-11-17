import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Header({
  title,
  subtitle,
  profileName,
  onProfilePress,
  onSettingsPress,
  colors,
}) {
  return (
    <View style={[styles.header, { backgroundColor: colors.primary }]}>
      <View style={styles.topRow}>
        <View style={styles.headerTextWrap}>
          <Text style={styles.greeting}>Welcome back</Text>
          <Text style={styles.title}>{title}</Text>
        </View>

        <View style={styles.actionGroup}>
          <TouchableOpacity
            style={[styles.iconButton, { backgroundColor: 'rgba(255,255,255,0.12)' }]}
            onPress={onProfilePress}
            accessibilityLabel="Open profile"
          >
            <Text style={styles.iconText}>👤</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.iconButton, { backgroundColor: 'rgba(255,255,255,0.12)' }]}
            onPress={onSettingsPress}
            accessibilityLabel="Open settings"
          >
            <Text style={styles.iconText}>⚙️</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.profileCard}>
        <Text style={styles.profileName}>{profileName}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 22,
    paddingTop: 26,
    paddingBottom: 24,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerTextWrap: {
    flex: 1,
    paddingRight: 12,
  },
  greeting: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 14,
    marginBottom: 6,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '800',
    lineHeight: 36,
  },
  actionGroup: {
    flexDirection: 'row',
    gap: 10,
  },
  iconButton: {
    width: 42,
    height: 42,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 18,
  },
  profileCard: {
    marginTop: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.16)',
  },
  profileName: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  subtitle: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 13,
    marginTop: 4,
  },
});
