import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Profile from '../../components/BottomComponent/Profile';
import Setting from '../../components/BottomComponent/Profile/Setting';

const Stack = createNativeStackNavigator();
const ProfileNavigation = () => {
    const screenOptions = {
        headerShown: false,
        animation: 'slide_from_right'
    };
  return (
    <Stack.Navigator initialRouteName='NewsProfile' screenOptions={screenOptions}>
        <Stack.Screen name="NewsProfile" component={Profile}/>
        <Stack.Screen name="Setting" component={Setting}/>
    </Stack.Navigator>
  )
}

export default ProfileNavigation ;

const styles = StyleSheet.create({})