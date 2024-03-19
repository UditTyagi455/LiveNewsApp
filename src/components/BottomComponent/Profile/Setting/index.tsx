import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Switch,
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

const Setting = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);

  const dispatch = useDispatch();

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
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginHorizontal: 8,
              marginBottom: 40,
            }}
            key={index}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name={item.icon}
                size={25}
                color="white"
                onPress={() => navigation.goBack()}
              />
              <Text style={{fontSize: 18, paddingLeft: 4,color: "white"}}>{item.menu}</Text>
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
        );
      })}
    </KeyboardAvoidingView>
  );
};

export default Setting;

const styles = StyleSheet.create({});
