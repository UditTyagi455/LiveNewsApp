import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/core';
import { useSelector, useDispatch } from 'react-redux';
import ExploreNavigation from '../ExploreNavigation';
import HomeNavigation from '../HomeNavigation';
import BookmarkNavigation from '../BookmarkNavigation';
import ProfileNavigation from '../ProfileStack';


const Tab = createBottomTabNavigator();

const BottomNavigation = () => {

  const navigation = useNavigation();
  const iconClicked = (route: any) => {
    navigation.navigate(route);
  };
  return (
    <View
      style={{
        flex: 1,
        position: 'absolute',
        height: '100%',
        width: '100%',
        // backgroundColor: 'red',
        borderRadius: 50,
      }}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarLabelPosition: 'below-icon',
          headerShown: false,
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: focused ? 12 : 10,
                fontWeight: focused ? '400' : '400',
                color: focused ? '#1877F2' : 'white',
                display: 'flex',
                flexDirection: 'row',
              }}>
              {route.name}
            </Text>
          ),
          tabBarShowLabel: true,
          tabBarIndicatorStyle: {
            backgroundColor: '#000',
            height: 12,
          },
          tabBarStyle: {
            display: 'flex',
            backgroundColor: "black"
          },
          tabBarIcon: ({focused}) => (
            <TouchableWithoutFeedback onPress={() => iconClicked(route.name)}>
              <View
                style={[
                  {
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    alignContent: 'center',
                    flex: 1,
                    paddingLeft: 25,
                    paddingRight: 25,
                    borderTopWidth: 3,
                    // backgroundColor:"red",
                  },
                  focused ? {borderColor: '#000'} : {borderColor: '#000'},
                ]}>
                {route.name == 'Home' && focused ? (
                  <Ionicons name="home" style={styles.Icon} color={"#1877F2"} />
                ) : null}

                {route.name == 'Home' && !focused ? (
                  <TouchableWithoutFeedback
                    onPress={() => iconClicked(route.name)}>
                    <Ionicons
                      name="home-outline"
                      style={styles.Icon}
                      color={"white"}
                    />
                  </TouchableWithoutFeedback>
                ) : null}
                {route.name == 'Explore' && focused ? (
                  // <Image source={require("../../assets/img/Explore-icon-fill.png")}/>
                  <Ionicons
                    name="compass"
                    type="Ionicons"
                    style={styles.Icon}
                    color={"#1877F2"}
                  />
                ) : null}

                {route.name == 'Explore' && !focused ? (
                  <TouchableWithoutFeedback
                    onPress={() => iconClicked(route.name)}>
                      {/* <Image source={require("../../assets/img/Explore-icon.png")} style={{}}/> */}
                    <Ionicons
                      name="compass-outline"
                      type="Ionicons"
                      style={styles.Icon}
                      color={"white"}
                    />
                  </TouchableWithoutFeedback>
                ) : null}

                {route.name == 'Bookmark' && focused ? (
                  <Ionicons
                    name="bookmark"
                    type="Ionicons"
                    style={styles.Icon}
                    color={"#1877F2"}
                  />
                ) : null}

                {route.name == 'Bookmark' && !focused ? (
                  <TouchableWithoutFeedback
                    onPress={() => iconClicked(route.name)}>
                    <Ionicons
                      name="bookmark-outline"
                      type="Ionicons"
                      style={styles.Icon}
                      color={"white"}
                    />
                  </TouchableWithoutFeedback>
                ) : null}

                {route.name == 'Profile' && focused ? (
                  <Ionicons
                    name="person-circle"
                    type="Ionicons"
                    style={styles.Icon}
                    color={"#1877F2"} 
                  />
                ) : null}

                {route.name == 'Profile' && !focused ? (
                  <TouchableWithoutFeedback
                    onPress={() => iconClicked(route.name)}>
                    <Ionicons
                      name="person-circle-outline"
                      type="Ionicons"
                      style={styles.Icon}
                      color={"white"}
                    />
                  </TouchableWithoutFeedback>
                ) : null}
              </View>
            </TouchableWithoutFeedback>
          ),
        })}>
        <Tab.Screen name="Home" component={HomeNavigation} options={{}} />
        <Tab.Screen name="Explore" component={ExploreNavigation} />
        <Tab.Screen
          name="Bookmark"
          component={BookmarkNavigation}
        />
        <Tab.Screen name="Profile" component={ProfileNavigation} />
      </Tab.Navigator>
    </View>
  )
}

export default BottomNavigation ;

const styles = StyleSheet.create({
  Icon: {
    fontSize: 22,
  },
});