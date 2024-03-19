import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {style} from './style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { setTabBar } from '../../../features/Tabbar';
import { useSelector, useDispatch } from 'react-redux';

const Profile = () => {
  const [currentlySeen, setCurrentlySeen] = useState(false);
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const newsArray = [
    {
      id: 1,
      image: require("../../../assets/img/recent-news.png"),
      heading: "Minting Your First NFT: A Beginner's Guide to Creating..."
    },
    {
      id: 2,
      image: require("../../../assets/img/business-news.png"),
      heading: "Minting Your First NFT: A Beginner's Guide to Creating..."
    },
    {
      id: 3,
      image: require("../../../assets/img/recent-news.png"),
      heading: "Minting Your First NFT: A Beginner's Guide to Creating..."
    },
    {
      id: 4,
      image: require("../../../assets/img/business-news.png"),
      heading: "Minting Your First NFT: A Beginner's Guide to Creating..."
    },
    {
      id: 5,
      image: require("../../../assets/img/recent-news.png"),
      heading: "Minting Your First NFT: A Beginner's Guide to Creating..."
    },
  ];

  useEffect(() => {
    dispatch(setTabBar(true));
  })
  return (
    <KeyboardAwareScrollView style={style.keyboardView}>
      <View style={style.header}>
        <View style={{width: 50}}></View>
        <Text style={{color: 'white', fontSize: 20}}>Profile</Text>
        <Icon name="settings-outline" size={30} color="white" onPress={() => navigation.navigate("Setting")}/>
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
            <Image
              source={{
                uri: 'https://cdn.pixabay.com/photo/2022/06/06/09/51/free-blazer-boy-stock-photo-7245764_1280.jpg',
              }}
              style={{width: '100%', height: '100%', borderRadius: 100}}
            />
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
          <Text style={{color: 'white', fontSize: 16, fontWeight: '300'}}>
            Followers
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            marginTop: 20,
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 20}}>26</Text>
          <Text style={{color: 'white', fontSize: 16, fontWeight: '300'}}>
            Following
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            marginTop: 20,
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 20}}>23</Text>
          <Text style={{color: 'white', fontSize: 16, fontWeight: '300'}}>
            News
          </Text>
        </View>
      </View>
      <Text
        style={{
          color: 'white',
          letterSpacing: 1,
          marginVertical: 8,
          marginHorizontal: 10,
          fontWeight: '300',
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
          <Text
            style={{color: 'white', textAlign: 'center', fontWeight: '600'}}>
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
          <Text
            style={{color: 'white', textAlign: 'center', fontWeight: '600'}}>
            Website
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginVertical: 15}}>
        <TouchableOpacity
          style={{paddingLeft: 15, width: wp('48%'), alignItems: 'flex-end'}}
          onPress={() => setCurrentlySeen(!currentlySeen)}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: !currentlySeen ? '500' : '100',
            }}>
            News
          </Text>
          {!currentlySeen && (
            <View
              style={{
                height: 4,
                width: 50,
                backgroundColor: '#1877F2',
                marginTop: 8,
              }}></View>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{paddingLeft: 15}}
          onPress={() => setCurrentlySeen(!currentlySeen)}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: currentlySeen ? '500' : '100',
            }}>
            Recent
          </Text>
          {currentlySeen && (
            <View
              style={{
                height: 4,
                width: 55,
                backgroundColor: '#1877F2',
                marginTop: 8,
              }}></View>
          )}
        </TouchableOpacity>
      </View>
      <ScrollView>
      {newsArray.map((item, index) => {
        return (
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginHorizontal: 6,
              marginBottom: 15,
            }}
            key={index}>
            <Image source={item.image} />
            <View style={{width: '76%', padding: 5}}>
              <Text>NFTs</Text>
              <Text style={{color: 'white', fontWeight: '600', fontSize: 16}}>
                {item.heading}
              </Text>
            </View>
          </View>
        );
      })}
      </ScrollView>
      
    </KeyboardAwareScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
