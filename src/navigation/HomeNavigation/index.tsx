import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Home from '../../components/BottomComponent/Home';

const Stack = createNativeStackNavigator();
const HomeNavigation = () => {
    const screenOptions = {
        headerShown: false,
    };
  return (
    <Stack.Navigator initialRouteName='Main' screenOptions={screenOptions}>
        <Stack.Screen name="Main" component={Home}/>
    </Stack.Navigator>
  )
}

export default HomeNavigation

const styles = StyleSheet.create({})