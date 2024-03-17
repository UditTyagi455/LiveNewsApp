import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Home from '../../components/BottomComponent/Home';
import Notification from '../../components/BottomComponent/Home/Notification';

const Stack = createNativeStackNavigator();
const HomeNavigation = () => {
    const screenOptions = {
        headerShown: false,
        animation: 'slide_from_right'
    };
  return (
    <Stack.Navigator initialRouteName='Main' screenOptions={screenOptions}>
        <Stack.Screen name="Main" component={Home}/>
        <Stack.Screen name="Notification" component={Notification}/>
    </Stack.Navigator>
  )
}

export default HomeNavigation

const styles = StyleSheet.create({});