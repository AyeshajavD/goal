import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  const handleLetsGo = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.webp')} style={styles.image} />
      <Text style={styles.welcomeText}>
        Welcome to MyGoals App!
      </Text>
      <Text style={styles.onboardingText}>To get started, please login.{'\n'}</Text>
      <Text style={styles.signupText}> If you don't have an account, register first and then login to use the app.</Text>
      <TouchableOpacity style={styles.letsGoButton} onPress={handleLetsGo}>
        <Text style={styles.buttonText}>Let's Go</Text>
      </TouchableOpacity>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: "bold",
    color: "#2ecc71",
    marginVertical: 20,
  },
  signupText: {
    textAlign: 'center',
    fontSize: 16,
  },
  onboardingText: {
    textAlign: 'center',
    fontSize: 18,
    fontStyle: "italic",
  },
  letsGoButton: {
    backgroundColor: '#2ecc71',
    padding: 12,
    borderRadius: 40,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default OnboardingScreen;
