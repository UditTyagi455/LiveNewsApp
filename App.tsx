import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import NavigationScreen from './src/navigation';

const App = () => {
  return (
    <NavigationContainer >
      <NavigationScreen />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})