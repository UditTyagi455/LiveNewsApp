import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {style} from "./style"

const Bookmark = () => {
  const [search,setSearch] = useState("");
  return (
    <KeyboardAwareScrollView style={style.keyboardView}>
      <View style={style.header}>
      <Text style={{color: 'white', fontSize: 26,fontWeight: "700"}}>Bookmark</Text>
      </View>
      <View style={style.topiHeader}>
        <TextInput value={search} onChangeText={setSearch} style={{height: 56,backgroundColor: "#3A3B3C",width: "100%"
}}/>
        </View>
    </KeyboardAwareScrollView>
  )
}

export default Bookmark;

const styles = StyleSheet.create({})