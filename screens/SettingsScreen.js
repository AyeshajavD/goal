// SettingsScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { useAppContext } from '../components/AppContext';

const SettingsScreen = () => {
  const { appSettings, updateSettings } = useAppContext();

  const applySettings = (newSettings) => {
    updateSettings(newSettings);

    Alert.alert(
      'Settings Applied',
      'The selected settings have been applied to the app.',
      [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ],
      { cancelable: false }
    );
  };

  const labelStyle = {
    fontSize: 18,
    fontWeight: '500',
  };

  const buttonContainerStyle = {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    alignItems: 'center',
    width: '90%',
    marginBottom: 20,
  };

  const textStyle = {
    fontSize: getFontSize(appSettings.fontSize),
    fontWeight: '600',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Settings</Text>
      <View style={buttonContainerStyle}>
        <Text style={labelStyle}>Change Theme :</Text>
        <Button title="Dark" onPress={() => applySettings({ theme: 'dark' })} />
        <Button title="Light" onPress={() => applySettings({ theme: 'light' })} />
      </View>
      <View style={buttonContainerStyle}>
        <Text style={labelStyle}>Change Font Size :</Text>
        <Button title="Small" onPress={() => applySettings({ fontSize: 'small' })} />
        <Button title="Normal" onPress={() => applySettings({ fontSize: 'normal' })} />
        <Button title="Big" onPress={() => applySettings({ fontSize: 'big' })} />
      </View>
      <Text style={[labelStyle, textStyle]}>Sample Text for Font Size Preview</Text>
    </View>
  );
};

const getFontSize = (fontSize) => {
  switch (fontSize) {
    case 'small':
      return 14;
    case 'normal':
      return 18;
    case 'big':
      return 22;
    default:
      return 18;
  }
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
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

export default SettingsScreen;
