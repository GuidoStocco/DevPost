import React from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <Routes />
      </SafeAreaView>
    </NavigationContainer>
  );
}