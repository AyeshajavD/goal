import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen.js';
import GoalScreen from './screens/GoalsScreen.js';
import SplashScreen from './screens/SplashScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import ForgetPasswordScreen from './screens/ForgotPasswordScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
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
          name="Goals"
          component={GoalScreen}
          options={{
            title: 'Goals',
            headerStyle: {
              backgroundColor: '#3498db',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
