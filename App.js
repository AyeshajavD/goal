
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppProvider, useAppContext } from './components/AppContext';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen.js';
import GoalScreen from './screens/GoalsScreen.js';
import SplashScreen from './screens/SplashScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import ForgetPasswordScreen from './screens/ForgotPasswordScreen';
import SettingsScreen from './screens/SettingsScreen';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{
            title: 'Onboarding',
            headerStyle: {
              backgroundColor: '#3498db',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: 'Login',
              headerStyle: {
                backgroundColor: '#3498db',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{
              title: 'Sign Up',
              headerStyle: {
                backgroundColor: '#3498db',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} options={{
            title: 'Forget Password',
            headerStyle: {
              backgroundColor: '#3498db',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={({ navigation }) => {
              const { appSettings } = useAppContext();
              return {
                title: 'Settings',
                headerStyle: {
                  backgroundColor: appSettings.theme === 'dark' ? '#49006A' : '#3498db',
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              };
            }}
          />
          <Stack.Screen
            name="Goals"
            component={GoalScreen}
            options={({ navigation }) => {
              const { appSettings } = useAppContext();
              return {
                title: 'Goals',
                headerStyle: {
                  backgroundColor: appSettings.theme === 'dark' ? '#49006A' : '#3498db',
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerRight: () => (
                  <SettingsButton navigation={navigation} />
                ),
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

const SettingsButton = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={styles.settingsButton}>
    <Ionicons name="settings" size={24} color='white' />
  </TouchableOpacity>
);

export default App;

const styles = StyleSheet.create({
  settingsButton: {
    paddingRight: 20
  },
})