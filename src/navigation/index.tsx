import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Root from '../components/Root';
import BottomNavigation from './BottomNavigation';
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';
import SelectCountry from '../components/Authentication/SelectCountry';
import SelectTopics from '../components/Authentication/SelectTopics';
import SelectSources from '../components/Authentication/SelectSources';


const Stack = createNativeStackNavigator();

const NavigationScreen = () => {
    const screenOptions = {
        headerShown: false,
    };
    return (
        <Stack.Navigator initialRouteName="Root" screenOptions={screenOptions}>
            <Stack.Screen name="Root" component={Root} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} options={{
                animation: 'slide_from_right'
            }} />
            <Stack.Screen name="selectCountry" component={SelectCountry}/>
            <Stack.Screen name="selectTopics" component={SelectTopics}/>
            <Stack.Screen name="selectSources" component={SelectSources}/>
            <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
        </Stack.Navigator>

    )
}

export default NavigationScreen;

const styles = StyleSheet.create({})