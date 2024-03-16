import {StyleSheet, Text, View } from 'react-native'
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {style} from "./style"

const Explore = () => {
  return (
   <KeyboardAwareScrollView style={style.keyboardView}>
     <View style={style.header}>
       <Text style={{color: 'white', fontSize: 26,fontWeight: "700"}}>Explore</Text>
     </View>
     <View style={style.topiHeader}>
       <Text style={{color: 'white', fontSize: 18,fontWeight: "600"}}>Topic</Text>
       <Text style={{color: 'white', fontSize: 18,fontWeight: "300"}}>See all</Text>
     </View>
   </KeyboardAwareScrollView>
  )
}

export default Explore ;

const styles = StyleSheet.create({})