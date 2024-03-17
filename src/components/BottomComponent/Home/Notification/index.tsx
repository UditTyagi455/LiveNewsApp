import {StyleSheet, Text, View,Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {style} from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const Notification = () => {
  const navigation = useNavigation();
  var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

const todayDate = mm + '/' + dd + '/' + yyyy;
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
      <View style={{marginHorizontal: 8}}>
        <Text style={{color: "white",fontWeight: "800",marginBottom: 10}}>{todayDate}</Text>
        <View style={{flexDirection: "row",backgroundColor: "#3A3B3C",padding: 12,borderRadius: 12}}>
        <Image source = {require('../../../../assets/img/bbc-news.png')} />
        <View style={{padding: 8,width: wp("85%")}}>
            <Text style={{color: "white",fontWeight: "600",fontSize: 15,lineHeight: 18}}>BBC News has posted new europe news “Ukraine's President Zele...”</Text>
            <Text style={{color: "white"}}>15m ago</Text>
        </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Notification;

const styles = StyleSheet.create({});
