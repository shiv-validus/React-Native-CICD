import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import LinearGradient from 'react-native-linear-gradient';
import CelebrationScreen from './components/Celebration';

const App = (): React.JSX.Element => {
  const versionName = Platform.OS === 'android' ? DeviceInfo.getVersion() : '';
  const buildNumber = Platform.OS === 'android' ? DeviceInfo.getBuildNumber() : '';

  return (
    <LinearGradient
      colors={['#6A0DAD', '#9A31D6', '#D9A9F3']}
      style={styles.gradientBackground}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.versionText}>Version: {versionName}</Text>
          <Text style={styles.versionText}>Build: {buildNumber}</Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.card}>
            <Text style={styles.congratsText}>🎉 Congratulations! 🎉</Text>
            <Text style={styles.subtitle}>
              Your CI/CD pipeline is ready and running smoothly.
            </Text>
            <Text style={styles.subtitle}>Start deploying with confidence!</Text>
          </View>
          <CelebrationScreen />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#ffffff',
    width: '90%',
    borderRadius: 20,
    padding: 15,
    marginBottom: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  versionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#6A0DAD',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    width: '85%',
    maxWidth: 400,
    padding: 30,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  congratsText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#6A0DAD',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
});

export default App;
