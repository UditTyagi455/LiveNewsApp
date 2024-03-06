import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {style} from './style';

const SelectTopics = () => {
  const [topics, setTopics] = useState([]);
  const [search, setSearch] = useState('');
  const [myTopics, setMyTopics] = useState([
    'National',
    'International',
    'Sport',
    'Lifestyle',
    'Business',
    'Health',
    'Fashion',
    'Technology',
    'Science',
    'Art',
    'Poltics',
  ]);

  const navigation = useNavigation();

  const nextPress = () => {
    navigation.navigate('selectSources');
  };

  const pickTopics = (item: string) => {
    if (topics.includes(item)) {
      const index = topics.indexOf(item);
      if (index > -1) {
        setTopics(cur => {
          cur.splice(index, 1);
          return [...cur];
        });
      }
    } else {
      setTopics(cur => [...cur, item]);
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
          {myTopics.map((item, index) => {
            return (
              <TouchableOpacity
                style={[
                  style.selectTopics,
                  {backgroundColor: topics.includes(item) ? 'blue' : 'black'},
                ]}
                onPress={() => pickTopics(item)}
                key={index}>
                <Text
                  style={{
                    color: topics.includes(item) ? 'white' : '#1877F2',
                    alignItems: 'center',
                    paddingHorizontal: 14,
                  }}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity style={style.nextBtn} onPress={nextPress}>
          <Text style={{color: 'white', fontSize: 18}}>Next</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SelectTopics;

const styles = StyleSheet.create({});
