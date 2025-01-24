import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
  StatusBar,
  TextStyle,
} from 'react-native';
import LottieView from 'lottie-react-native';

// Define styles with proper TypeScript types
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animation: {
    width: 300,
    height: 300,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#333333', // Dark text for better contrast on white background
  },
  detailedText: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#555555', // Slightly lighter than textStyle for hierarchy
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

const CelebrationScreen: React.FC = () => {


  // Use a function to dynamically determine the text color based on the theme
  const getTextStyle = (): TextStyle => ({
    ...styles.textStyle,
  });

  const getDetailedTextStyle = (): TextStyle => ({
    ...styles.detailedText,
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <LottieView
          source={require('../../assets/Celebration.json')}
          autoPlay
          loop
          style={styles.animation}
        />
      </View>
    </SafeAreaView>
  );
};

export default CelebrationScreen;
