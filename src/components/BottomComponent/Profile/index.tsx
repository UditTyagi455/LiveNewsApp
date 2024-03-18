import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {style} from './style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

const Profile = () => {
  return (
    <KeyboardAwareScrollView style={style.keyboardView}>
      <View style={style.header}>
        <View style={{width: 50}}></View>
        <Text style={{color: 'white', fontSize: 20}}>Profile</Text>
        <Icon name="notifications-outline" size={30} color="white" />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}>
        <View style={{flexDirection: 'column'}}>
          <View
            style={{
              width: 90,
              height: 90,
              borderRadius: 100,
              backgroundColor: 'white',
            }}>
              <Image source={{uri: "https://cdn.pixabay.com/photo/2022/06/06/09/51/free-blazer-boy-stock-photo-7245764_1280.jpg"}} style={{width: "100%",height: "100%",borderRadius: 100}}/>
            </View>
          <Text style={{color: 'white', fontSize: 20}}>Udit Tyagi</Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            marginTop: 20,
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 20}}>216</Text>
          <Text style={{color: 'white', fontSize: 16,fontWeight: "300"}}>Followers</Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            marginTop: 20,
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 20}}>26</Text>
          <Text style={{color: 'white', fontSize: 16,fontWeight: "300"}}>Following</Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            marginTop: 20,
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 20}}>23</Text>
          <Text style={{color: 'white', fontSize: 16,fontWeight: "300"}}>News</Text>
        </View>
      </View>
      <Text
        style={{
          color: 'white',
          letterSpacing: 1,
          marginVertical: 8,
          marginHorizontal: 10,
          fontWeight: "300"
        }}>
        Lorem ipsum dolor sit amet consectetur adi elit. Molestias, quasi id
        autem .
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          marginVertical: 10,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#1877F2',
            paddingHorizontal: 8,
            width: wp('45%'),
            paddingVertical: 15,
            borderRadius: 8,
          }}>
          <Text style={{color: 'white', textAlign: 'center',fontWeight: "600"}}>
            Edit Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#1877F2',
            paddingHorizontal: 8,
            width: wp('45%'),
            paddingVertical: 15,
            borderRadius: 8,
          }}>
          <Text style={{color: 'white', textAlign: 'center',fontWeight: "600"}}>
            Website
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
