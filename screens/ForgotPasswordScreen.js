import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { auth } from '../Firebase/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

const ForgetPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const handleForgetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        Alert.alert(
          'Password Reset Email Sent',
          'A password reset link has been sent to the registered email address.',
          [
            {
              text: 'OK',
              onPress: () => console.log('OK Pressed'),
            },
          ],
          { cancelable: false }
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode === 'auth/user-not-found') {
          Alert.alert(
            'Account Not Found',
            'No account exists for the entered email address.',
            [
              {
                text: 'OK',
                onPress: () => console.log('OK Pressed'),
              },
            ],
            { cancelable: false }
          );
        } else {
          // Other errors
          Alert.alert(
            'Password Reset Failed',
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
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Forget Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
      />
      <Button title="Reset Password" onPress={handleForgetPassword} />
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
});

export default ForgetPasswordScreen;
