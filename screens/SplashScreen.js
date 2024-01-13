import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Onboarding');
        }, 2500);
    }, []);

    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.webp')} style={styles.logo} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
});

export default SplashScreen;
