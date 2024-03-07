import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {style} from './style';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = () => {
  return (
    <KeyboardAwareScrollView style={style.keyboardView}>
      <View style={style.header}>
        <Text style={{color: 'white', fontSize: 22}}>Daily News</Text>
        <Icon name="notifications-outline" size={30} color="white" />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
