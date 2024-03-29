import {
  ActivityIndicator,
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
import api from '../../../services/utils/axios';

const SelectTopics = () => {
  const [topics, setTopics] = useState([]);
  const [topicNames, setNames] = useState([]);
  const [search, setSearch] = useState('');
  const [myTopics, setMyTopics] = useState([]);
  const [loading, setLoading] = useState(false);
  const storeValue = useSelector(state => state.register);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    console.log('useEffect called :');
    allTopics();
  }, []);

  const allTopics = async () => {
    try {
      const {data} = await api.get(`/topics/topic`);
      setMyTopics(data);
    } catch (error) {
      console.log('error ===>', error);
    }
  };

  const nextPress = async () => {
    console.log('topics ==>', topics);
    if (topics.length < 3) {
      alert('Please select more than 2 topic!!');
    } else {
      setLoading(true);
      try {
        const {data} = await api.post(`/topics/interested-topic`, {
          userId: storeValue.userId,
          topics: topics,
        });
        setLoading(false);
        console.log('Api-response >>>>', data);

        navigation.navigate('selectSources');
      } catch (error) {
        setLoading(false);
        console.log('some error into select the topic ::', error);
      }
    }
  };

  const pickTopics = (item: string) => {
    console.log(
      'selected item >>>>>>>>>>>>>>',
      item,
      'topic-names :::',
      topicNames,
    );

    if (topicNames.includes(item.topic)) {
      const index = topics.findIndex(user => user._id === item._id);
      console.log('index >>>', index);

      if (index > -1) {
        setTopics(cur => {
          cur.splice(index, 1);
          return [...cur];
        });
        setNames(cur => {
          cur.splice(index, 1);
          return [...cur];
        });
      }
    } else {
      setTopics(cur => [
        ...cur,
        {_id: item._id, topic: item.topic, interested: true},
      ]);
      setNames(cur => [...cur, item?.topic]);
    }
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
        <Text style={style.headerText}>Choose Your Topics</Text>
      </View>
      <View style={style.mediumPart}>
        <View style={style.searchBox}>
          <TextInput
            value={search}
            onChangeText={setTopics}
            placeholder="search"
            placeholderTextColor={'white'}
            style={style.inputBox}
          />
          <Icon
            name="search"
            size={25}
            color="white"
            style={style.searchIcon}
          />
        </View>
        <View style={style.topicsView}>
          {myTopics.length > 0 &&
            myTopics?.map((item, index) => {
              return (
                <TouchableWithoutFeedback
                  onPress={() => pickTopics(item)}
                  key={index}>
                  <View
                    style={[
                      style.selectTopics,
                      {
                        backgroundColor: topicNames.includes(item.topic)
                          ? '#1877F2'
                          : 'black',
                      },
                    ]}>
                    <Text
                      style={{
                        color: topicNames.includes(item.topic)
                          ? 'white'
                          : '#1877F2',
                        alignItems: 'center',
                        paddingHorizontal: 15,
                        fontWeight: '700',
                      }}>
                      {item?.topic}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
        </View>

        <TouchableOpacity style={style.nextBtn} onPress={nextPress}>
          {!loading ? (
            <Text style={{color: 'white', fontSize: 18}}>Next</Text>
          ) : (
            <ActivityIndicator color="white" size="small" />
          )}
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SelectTopics;

const styles = StyleSheet.create({});
