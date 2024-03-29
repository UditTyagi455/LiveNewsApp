import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Switch,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {style} from '../style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {setTabBar} from '../../../../features/Tabbar';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import api from '../../../../services/utils/axios';
import { API_URL } from '../../../../services/utils/defines';

const Setting = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const [loading,setLoading] = useState(false);

  const dispatch = useDispatch();

  const pressCalled =async (item:any) => {
    if(item.menu == "Logout"){
      try {
        setLoading(true)
        api.post("/users/logout").then(res => {
          console.log("data :::",res);
          AsyncStorage.removeItem("accesstoken");
          setLoading(false)
          navigation.navigate("Login")
        })
      } catch (error) {
        console.log("error >>>",error);
        setLoading(false);
      }
    }
  }

  const settingMenu = [
    {
      id: 1,
      menu: 'Notification',
      icon: 'notifications-outline',
    },
    {
      id: 2,
      menu: 'Security',
      icon: 'lock-closed-outline',
    },
    {
      id: 3,
      menu: 'Help',
      icon: 'information-circle-outline',
    },
    {
      id: 4,
      menu: 'Dark Mode',
      icon: 'moon-outline',
    },
    {
      id: 5,
      menu: 'Logout',
      icon: 'log-out-outline',
    },
  ];

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };

  useEffect(() => {
    dispatch(setTabBar(false));
    return () => dispatch(setTabBar(true));
  }, []);
  return (
    <KeyboardAvoidingView style={style.keyboardView}>
      {loading && <ActivityIndicator color="white" size="large" style={{position: "absolute",top: "50%",left: "50%"}}/>}
      <View style={style.settingHeader}>
        <Icon
          name="arrow-back-outline"
          size={30}
          color="white"
          onPress={() => navigation.goBack()}
        />
        <Text style={{color: 'white', fontSize: 20, marginLeft: wp('30%')}}>
          Settings
        </Text>
      </View>
      {settingMenu.map((item, index) => {
        return (
          <TouchableWithoutFeedback 
          key={index}
          onPress={() => pressCalled(item)}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: 8,
                marginBottom: 40,
              }}
              >
              <View style={{flexDirection: 'row'}}>
                <Icon
                  name={item.icon}
                  size={25}
                  color="white"
                  onPress={() => navigation.goBack()}
                />
                <Text style={{fontSize: 18, paddingLeft: 4, color: 'white'}}>
                  {item.menu}
                </Text>
              </View>
              {index == 3 ? (
                <Switch
                  trackColor={{false: '#767577', true: '#81b0ff'}}
                  thumbColor={'#f5dd4b'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={() => toggleSwitch()}
                  value={isEnabled}
                />
              ) : index == 4 ? null : (
                <Icon
                  name="chevron-forward-outline"
                  size={20}
                  color="white"
                  onPress={() => navigation.goBack()}
                />
              )}
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </KeyboardAvoidingView>
  );
};

export default Setting;

const styles = StyleSheet.create({});
