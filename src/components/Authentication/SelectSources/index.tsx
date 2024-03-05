import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import { style } from "./style"

const SelectSources = () => {
    const [topics, setTopics] = useState([]);
    const [search, setSearch] = useState("")
    const [myTopics, setMyTopics] = useState([
        {
            id: 1,
            image: require("../../../assets/img/bbc-news.png"),
            name: "BBC News",
            follow: false
        },
        {
            id: 2,
            image: require("../../../assets/img/SCMP.png"),
            name: "SCMP",
            follow: false
        },
        {
            id: 3,
            image: require("../../../assets/img/CNN.png"),
            name: "CNN",
            follow: false
        },
        {
            id: 4,
            image: require("../../../assets/img/MSN.png"),
            name: "MSN",
            follow: false
        },
        {
            id: 5,
            image: require("../../../assets/img/CNET.png"),
            name: "CNET",
            follow: false
        },
        {
            id: 6,
            image: require("../../../assets/img/USA-TODAY.png"),
            name: "USA Today",
            follow: false
        },
        {
            id: 7,
            image: require("../../../assets/img/TIME.png"),
            name: "TIME",
            follow: false
        },
        {
            id: 8,
            image: require("../../../assets/img/Buzzfeed.png"),
            name: "Buzzfeed",
            follow: false
        },
        {
            id: 9,
            image: require("../../../assets/img/Daily-mail.png"),
            name: "Daily Mail",
            follow: false
        }
    ])
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

    const navigation = useNavigation();

    const nextPress = () => {
        navigation.navigate("CreateProfile");
    }
    const startFollowing = (item: any) => {
        setMyTopics(cur => {
            cur.filter((current, index) => {
                if (current.id == item.id) {
                    return current.follow = !current.follow
                }
            })
            return [...cur]
        })

    }
    return (
        <KeyboardAwareScrollView style={style.keyboardView}>
            <View style={style.header}>
                <Icon name="arrow-back-outline" size={30} color="white" onPress={() => navigation.pop()} />
                <Text style={style.headerText}>Choose Your News Sources</Text>
            </View>
            <View style={style.mediumPart}>
                <View style={{ marginTop: 20, marginHorizontal: 10 }}>
                    <TextInput
                        value={search}
                        onChangeText={setSearch}
                        placeholder='search'
                        placeholderTextColor={"white"}
                        style={style.input} />
                    <Icon name="search" size={25} color="white" style={style.searchIcon} />
                </View>
                <View style={style.newsChannels}>
                    {myTopics.map((item, index) => {
                        return (
                            <View style={style.cards}
                                key={index}
                            >
                                <View style={{ padding: 10, backgroundColor: "#EEF1F452", }}>
                                    <Image source={item.image} />
                                </View>
                                <Text
                                    style={style.newsName}
                                >{item.name}</Text>
                                <TouchableOpacity style={[style.followButton, {
                                    backgroundColor: item.follow ? "#1877f2" : "#3A3B3C"
                                }]}
                                    onPress={() => startFollowing(item)}
                                >
                                    <Text style={{ fontWeight: "500", color: item.follow ? "white" : "#1877F2" }}>{item.follow ? "Following" : "Follow"}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                </View>

                <TouchableOpacity style={style.nextButton} onPress={nextPress}>
                    <Text style={{ color: "white", fontSize: 18 }}>Next</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default SelectSources

const styles = StyleSheet.create({});