import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React,{useEffect} from 'react'

const Root = () => {
  const navigation = useNavigation();

  useEffect(() => {
    AsyncStorage.getItem('accesstoken').then(accesstoken => {
      if (accesstoken) {
        console.log('accesstoken', accesstoken);
        navigation.reset({
          index: 0,
          routes: [{name: 'BottomNavigation'}],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{name: 'Login'}],
        });
      }
    });
    // SplashScreen.hide(); // here
  }, []);
  return (
    <View>
      <Text>Please wait....</Text>
    </View>
  )
}

export default Root;

const styles = StyleSheet.create({})