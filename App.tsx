import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import NavigationScreen from './src/navigation';
import SplashScreen from 'react-native-splash-screen';

const App = () => {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 100);
  },[]);

  return (
    <NavigationContainer >
      <NavigationScreen />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})