import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const style = StyleSheet.create({
    keyboardView: {
        backgroundColor: "black",
        height: hp("100%")
    },
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10
    },
    headerText: {
        color: "white",
        marginLeft: wp("20%"),
        fontWeight: "600",
        fontSize: 16
    },
    mediumPart: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        paddingHorizontal: 10
    },
    input: {
        paddingVertical: 15,
        backgroundColor: "#3A3B3C",
        color: "white",
        fontSize: 16,
        fontWeight: "300",
        borderRadius: 8
    },
    searchIcon: {
        position: "absolute",
        right: 10,
        top: 12
    },
    newsChannels: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 8,
        marginTop: 8
    },
    cards: {
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderRadius: 6,
        marginHorizontal: 4,
        marginVertical: 4,
        backgroundColor: "#3A3B3C",
        alignItems: "center"
    },
    newsName: {
        color: "white",
        alignItems: "center",
        paddingHorizontal: 14,
        marginVertical: 5,
        fontWeight: "300"
    },
    followButton: {
        borderWidth: 1,
        borderColor: "#1877F2",
        paddingHorizontal: 8,
        borderRadius: 6,
        paddingVertical: 2,
    },
    nextButton: {
        backgroundColor: "#1877F2",
        paddingVertical: 15,
        alignItems: "center",
        marginHorizontal: 10,
        borderRadius: 8,
        marginTop: hp("8%")
    }
})