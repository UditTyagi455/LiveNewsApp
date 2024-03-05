import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Home = () => {
  return (
    <KeyboardAwareScrollView>
      <Text>Home</Text>
    </KeyboardAwareScrollView>
  )
}

export default Home ;

const styles = StyleSheet.create({})