import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Bookmark from '../../components/BottomComponent/Bookmark';

const Stack = createNativeStackNavigator();
const BookmarkNavigation = () => {
    const screenOptions = {
        headerShown: false,
    };
  return (
    <Stack.Navigator initialRouteName='NewsBookmark' screenOptions={screenOptions}>
        <Stack.Screen name="NewsBookmark" component={Bookmark}/>
    </Stack.Navigator>
  )
}

export default BookmarkNavigation ;

const styles = StyleSheet.create({})