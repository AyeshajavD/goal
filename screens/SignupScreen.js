import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { auth } from '../Firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("User created with data: ", user);
            navigation.navigate("Login");
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;

            Alert.alert(
                'Signup Failed',
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
            <Text style={styles.heading}>Sign Up</Text>
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
            <TouchableOpacity onPress={handleSignup} style={styles.signupButton}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.loginButton}>
                <Text style={styles.buttonText}>Already have an account? Login</Text>
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
    signupButton: {
        backgroundColor: '#2ecc71',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    loginButton: {
        marginTop: 20,
    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
    },
});

export default SignupScreen;
