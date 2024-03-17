import {StyleSheet, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {style} from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Notification = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAwareScrollView style={style.keyboardView}>
      <View style={style.header}>
        <Icon
          name="arrow-back-outline"
          size={30}
          color="white"
          onPress={() => navigation.goBack()}
        />
        <Text style={{color: 'white', fontSize: 22}}>Notification</Text>
        <Icon
          name="ellipsis-vertical-outline"
          size={25}
          color="white"
          onPress={() => navigation.goBack()}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Notification;

const styles = StyleSheet.create({});
