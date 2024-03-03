import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';

const SelectTopics = () => {
    const [topics, setTopics] = useState([]);
    const [search,setSearch] = useState("")
    const [myTopics, setMyTopics] = useState(["National", "International", "Sport", "Lifestyle", "Business", "Health", "Fashion", "Technology", "Science", "Art", "Poltics"])

    const navigation = useNavigation();

    const nextPress = () => { 
        navigation.navigate("selectSources")
    }
    return (
        <KeyboardAwareScrollView style={{ backgroundColor: "black", height: hp("100%") }}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
                <Icon name="arrow-back-outline" size={30} color="white" onPress={() => navigation.pop()} />
                <Text style={{ color: "white", marginLeft: wp("20%"), fontWeight: "600", fontSize: 16 }}>Choose Your Topics</Text>
            </View>
            <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                <View style={{ marginTop: 40, marginHorizontal: 10 }}>
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
                <View style={{display: "flex",flexWrap: "wrap",flexDirection: "row"}}>
                {myTopics.map((item, index) => {
                    return (
                        <TouchableOpacity style={{paddingVertical: 10,paddingHorizontal: 6,borderWidth: 1,borderColor: "#1877F2",borderRadius: 6,marginHorizontal: 6,marginVertical: 4,backgroundColor: topics.includes(item) ? "blue" : "black"}} onPress={() => setTopics(cur => [...cur,item])} key={index}>
                        <Text style={{color: topics.includes(item) ? "white":"#1877F2",alignItems: "center",paddingHorizontal: 14}} >{item}</Text>
                        </TouchableOpacity>
                    )
                })}
                </View>

                <TouchableOpacity style={{ backgroundColor: "blue", paddingVertical: 15, alignItems: "center", marginHorizontal: 10, borderRadius: 8, marginTop: hp("45%") }} onPress={nextPress}>
                    <Text style={{ color: "white", fontSize: 18 }}>Next</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default SelectTopics;

const styles = StyleSheet.create({})