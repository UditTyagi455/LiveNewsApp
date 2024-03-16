import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, { useState } from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {style} from './style';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = () => {
  const [search,setSearch] = useState("");
  return (
    <KeyboardAwareScrollView style={style.keyboardView}>
      <View style={style.header}>
        <Text style={{color: 'white', fontSize: 22}}>Daily News</Text>
        <Icon name="notifications-outline" size={30} color="white" />
      </View>
      <View style={style.topiHeader}>
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search"
          placeholderTextColor="white"
          style={{
            height: 56,
            backgroundColor: '#3A3B3C',
            width: '100%',
            paddingLeft: 30,
            borderRadius: 6,
          }}
        />
        <Image
          source={require('../../../assets/img/seach-icon.png')}
          style={{position: 'absolute', left: 5, tintColor: 'white', top: 25}}
        />
        <Image
          source={require('../../../assets/img/search-filter.png')}
          style={{position: 'absolute', right: 15, top: 25, tintColor: 'white'}}
        />
      </View>
      <View style={style.topiHeader}>
       <Text style={{color: 'white', fontSize: 18,fontWeight: "600"}}>Trending</Text>
       <Text style={{color: 'white', fontSize: 16,fontWeight: "300"}}>See all</Text>
     </View>
    </KeyboardAwareScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
