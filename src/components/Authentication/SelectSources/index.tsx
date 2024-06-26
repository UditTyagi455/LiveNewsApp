import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {style} from './style';
import {UseSelector, useDispatch, useSelector} from 'react-redux';
import {setRegisteruser} from '../../../features/RegisterUser';
import { API_URL } from '../../../services/utils/defines';
import axios from 'axios';

const SelectSources = () => {
  const [topics, setTopics] = useState([]);
  const [search, setSearch] = useState('');
  const [myTopics, setMyTopics] = useState([]);
  const [loading, setLoading] = useState(false);
  // other method for set following
  // const changethefollowvalue = (id: any) => {
  //     let val = myTopics.map((item, index) => {
  //         console.log(id, "<><><><>")
  //         if (item.id === id) {
  //             console.log("trueee")
  //             return { ...item, follow: true };
  //         }
  //         return item;
  //     });

  //     setMyTopics(val)
  // }
  const storeValue = useSelector(state => state.register);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    getMyTopics();
  }, []);

  const getMyTopics = async () => {
    // data from Api
    try {
      const {data} = await axios.get(`${API_URL}/author/get-author`);
      setMyTopics(data.data);
    } catch (error) {
      console.log('error >>>>', error);
    }
  };

  const nextPress = async () => {
    const followSource = myTopics.filter((item, index) => {
      return item.follow == true;
    });
    if (followSource.length < 3) {
      alert('please follow min 3 sources!!');
    } else {
      try {
        setLoading(true)
        const {data} = await axios.post(`${API_URL}/author/follow-author`, {
          userId: storeValue.userId,
          follow: followSource,
        });
        setLoading(false);
        console.log('APi-data ===>>>>>', data);
        navigation.navigate('CreateProfile');
      } catch (error) {
        console.log('Api-error to follow the author >>', error);
        setLoading(false);
      }
    }
  };
  const startFollowing = (item: any) => {
    setMyTopics(cur => {
      cur.filter((current, index) => {
        if (current._id == item._id) {
          return (current.follow = !current.follow);
        }
      });
      return [...cur];
    });
  };
  return (
    <KeyboardAwareScrollView style={style.keyboardView}>
      <View style={style.header}>
        <Icon
          name="arrow-back-outline"
          size={30}
          color="white"
          onPress={() => navigation.pop()}
        />
        <Text style={style.headerText}>Choose Your News Sources</Text>
      </View>
      <View style={style.mediumPart}>
        <View style={{marginTop: 20, marginHorizontal: 10}}>
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="search"
            placeholderTextColor={'white'}
            style={style.input}
          />
          <Icon
            name="search"
            size={25}
            color="white"
            style={style.searchIcon}
          />
        </View>
        <View style={style.newsChannels}>
          {myTopics.length > 0 &&
            myTopics.map((item, index) => {
              return (
                <View style={style.cards} key={index}>
                  <View
                    style={{
                      padding: 10,
                      backgroundColor: '#EEF1F452',
                      borderRadius: 8,
                    }}>
                    <Image
                      source={{uri: item?.Logo}}
                      style={{height: 65, width: 65}}
                    />
                  </View>
                  <Text style={style.newsName}>{item.name}</Text>
                  <TouchableWithoutFeedback
                    onPress={() => startFollowing(item)}>
                    <View
                      style={[
                        style.followButton,
                        {
                          backgroundColor: item.follow ? '#1877f2' : '#3A3B3C',
                        },
                      ]}>
                      <Text
                        style={{
                          fontWeight: '500',
                          color: item.follow ? 'white' : '#1877F2',
                        }}>
                        {item.follow ? 'Following' : 'Follow'}
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              );
            })}
        </View>
        <TouchableOpacity style={style.nextButton} onPress={nextPress}>
          {!loading ? <Text style={{color: 'white', fontSize: 18}}>Next</Text>
          : <ActivityIndicator color="white" size="small"/>}
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SelectSources;

const styles = StyleSheet.create({});
