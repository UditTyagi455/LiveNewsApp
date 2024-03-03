import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';

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
        navigation.navigate("selectSources")
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
        <KeyboardAwareScrollView style={{ backgroundColor: "black", height: hp("100%") }}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
                <Icon name="arrow-back-outline" size={30} color="white" onPress={() => navigation.pop()} />
                <Text style={{ color: "white", marginLeft: wp("20%"), fontWeight: "600", fontSize: 16 }}>Choose Your News Sources</Text>
            </View>
            <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                <View style={{ marginTop: 20, marginHorizontal: 10 }}>
                    <TextInput
                        value={search}
                        onChangeText={setTopics}
                        placeholder='search'
                        placeholderTextColor={"white"}
                        style={{
                            paddingVertical: 15,
                            backgroundColor: "#3A3B3C",
                            color: "white",
                            fontSize: 16,
                            fontWeight: "300",
                            borderRadius: 8
                        }} />
                    <Icon name="search" size={25} color="white" style={{ position: "absolute", right: 10, top: 12 }} />
                </View>
                <View style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between", }}>
                    {myTopics.map((item, index) => {
                        return (
                            <View style={{
                                paddingVertical: 10,
                                paddingHorizontal: 8,
                                borderRadius: 6,
                                marginHorizontal: 8,
                                marginVertical: 4,
                                backgroundColor: "#3A3B3C",
                                alignItems: "center"
                            }}
                                key={index}
                            >
                                <View style={{ padding: 10, backgroundColor: "#EEF1F452", }}>
                                    <Image source={item.image} />
                                </View>

                                <Text style={{
                                    color: topics.includes(item) ? "white" : "white", alignItems: "center",
                                    paddingHorizontal: 14,
                                    marginVertical: 5,
                                    fontWeight: "300"
                                }} >{item.name}</Text>
                                <TouchableOpacity style={{
                                    borderWidth: 1,
                                    borderColor: "#1877F2",
                                    paddingHorizontal: 8,
                                    borderRadius: 6,
                                    paddingVertical: 2,
                                    backgroundColor: item.follow ? "#1877f2" : "#3A3B3C"
                                }}
                                    onPress={() => startFollowing(item)}
                                >
                                    <Text style={{ fontWeight: "500", color: item.follow ? "white" : "#1877F2" }}>{item.follow ? "Following" : "Follow"}</Text></TouchableOpacity>
                            </View>
                        )
                    })}
                </View>

                <TouchableOpacity style={{ backgroundColor: "blue", paddingVertical: 15, alignItems: "center", marginHorizontal: 10, borderRadius: 8, marginTop: hp("7%") }} onPress={nextPress}>
                    <Text style={{ color: "white", fontSize: 18 }}>Next</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default SelectSources

const styles = StyleSheet.create({});