import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Root from '../components/Root';


const Stack = createNativeStackNavigator();

const NavigationScreen = () => {
    const screenOptions = {
        headerShown: false,
    };
    return (
        <Stack.Navigator initialRouteName="Root" screenOptions={screenOptions}>
            <Stack.Screen name="Root" component={Root} />
        </Stack.Navigator>

    )
}

export default NavigationScreen;

const styles = StyleSheet.create({})