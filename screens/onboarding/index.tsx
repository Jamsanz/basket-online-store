import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from './components/Welcome';
import GetStarted from './components/GetStarted';

const Onboarding = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name='Welcome' component={Welcome} />
      <Stack.Screen name='GetStarted' component={GetStarted} />
    </Stack.Navigator>
  )
}

export default Onboarding

const styles = StyleSheet.create({})