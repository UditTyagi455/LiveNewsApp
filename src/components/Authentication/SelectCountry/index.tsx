import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CountryPicker, {DARK_THEME} from 'react-native-country-picker-modal';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {style} from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {UseSelector, useDispatch, useSelector} from 'react-redux';
import {setRegisteruser} from '../../../features/RegisterUser';

const SelectCountry = () => {
  const [countryName, setCountryName] = useState('India');
  const [withCallingCode, setWithCallingCode] = useState(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState(true);
  const [withFilter, setwithFilter] = useState(true);
  const [countryCode, setCountryCode] = useState('US');
  const [callingCode, setCallingCode] = useState('+91');
  const [visible, setVisible] = useState(false);
  const storeValue = useSelector(state => state.register);
  console.log("storeValue >>>>",storeValue);
  
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const countryChange = ({flag}) => {
    console.log('flag ::', flag);
    // setState(state => ({
    //     ...state,
    //     flag: flag,
    // }));
  };

  const SelectCountry = e => {
    setCountryName(e.name);
    setCallingCode(e.callingCode[0]);
  };

  
  const nextPress = () => {
    const saveValue = {country: countryName};
    dispatch(setRegisteruser({...storeValue, ...saveValue}));
    navigation.navigate('selectTopics');
  };
  return (
    <KeyboardAwareScrollView
      style={{backgroundColor: 'black', height: hp('100%')}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <Icon
          name="arrow-back-outline"
          size={30}
          color="white"
          onPress={() => navigation.pop()}
        />
        <Text
          style={{
            color: 'white',
            marginLeft: 100,
            fontWeight: '600',
            fontSize: 16,
          }}>
          Select your country
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
        }}>
        <View style={{marginTop: 40, marginHorizontal: 10}}>
          <TextInput
            value={`${callingCode} ${countryName}`}
            placeholder="select country..."
            placeholderTextColor={'white'}
            editable={false}
            style={{
              paddingVertical: 15,
              backgroundColor: '#3A3B3C',
              color: 'white',
              fontSize: 16,
              fontWeight: '600',
              borderRadius: 8,
            }}
          />
          <Icon
            name="caret-down-outline"
            size={35}
            color="white"
            style={{position: 'absolute', right: 10, top: 12}}
            onPress={() => setVisible(true)}
          />
          <CountryPicker
            {...{
              withCallingCode,
              withAlphaFilter,
              withFilter,
              countryChange,
            }}
            onSelect={country => SelectCountry(country)}
            modalProps={{
              visible: visible,
            }}
            onOpen={() => setVisible(true)}
            onClose={() => setVisible(false)}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#1877F2',
            paddingVertical: 15,
            alignItems: 'center',
            marginHorizontal: 10,
            borderRadius: 8,
            marginTop: hp('70%'),
          }}
          onPress={nextPress}
          disabled={countryName ? false : true}>
          <Text style={{color: 'white', fontSize: 18}}>Next</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SelectCountry;

const styles = StyleSheet.create({});
