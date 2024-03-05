import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Profile from '../../components/BottomComponent/Profile';

const Stack = createNativeStackNavigator();
const ProfileNavigation = () => {
    const screenOptions = {
        headerShown: false,
    };
  return (
    <Stack.Navigator initialRouteName='NewsProfile' screenOptions={screenOptions}>
        <Stack.Screen name="NewsProfile" component={Profile}/>
    </Stack.Navigator>
  )
}

export default ProfileNavigation ;

const styles = StyleSheet.create({})