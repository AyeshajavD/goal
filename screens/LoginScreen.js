import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { auth } from '../Firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User Logged in with data: ", user);
      navigation.navigate("Goals");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;

      Alert.alert(
        'Login Failed',
        errorMessage,
        [
          {
            text: 'Try Again',
            onPress: () => console.log('Try Again Pressed'),
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={styles.signupButton}>
        <Text style={styles.buttonText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')} style={styles.forgotPass}>
        <Text style={styles.buttonText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
  },
  loginButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 40,
    marginTop: 10,
  },
  loginButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: 20,
  },
  buttonText: {
    color: '#007bff',
    textAlign: 'center',
    fontStyle: "italic",
  },
  signupButton: {
    marginTop: 20,
  },
  forgotPass: {
    marginTop: 10,
  }
});

export default LoginScreen;
