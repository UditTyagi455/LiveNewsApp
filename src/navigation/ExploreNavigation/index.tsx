import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Explore from '../../components/BottomComponent/Explore';

const Stack = createNativeStackNavigator();
const ExploreNavigation = () => {
    const screenOptions = {
        headerShown: false,
    };
  return (
    <Stack.Navigator initialRouteName='NewsExplore' screenOptions={screenOptions}>
        <Stack.Screen name="NewsExplore" component={Explore}/>
    </Stack.Navigator>
  )
}

export default ExploreNavigation

const styles = StyleSheet.create({})