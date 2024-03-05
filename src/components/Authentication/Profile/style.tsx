import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const style = StyleSheet.create({
    keyboardScrollview: {
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
        marginLeft: wp("25%"),
        fontWeight: "600",
        fontSize: 16
    },
    imagePicker: {
        height: 90,
        width: 90,
        borderRadius: 100,
        backgroundColor: "white"
    },
    profileImageView: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
    },
    profileImage: {
        height: "100%",
        width: "100%",
        borderRadius: 100
    },
    cameraIcon: {
        position: "absolute",
        bottom: 0,
        right: 0,
        backgroundColor: "#1877F2",
        borderRadius: 50,
        padding: 4
    },
    input: {
        height: 50,
        backgroundColor: "#3A3B3C",
        borderRadius: 8,
        marginTop: 6,
        color: "#B0B3B8",
        paddingRight: 40
    },
    errorText: {
        color: '#da1e37',
        fontSize: 10,
        marginVertical: 3
    },
    usernamepasswordTest: {
        fontSize: 14,
        color: "#B0B3B8",
        fontWeight: "500",
        letterSpacing: 1
    },
    nextButton: {
        backgroundColor: "#1877F2",
        paddingVertical: 15,
        alignItems: "center",
        marginHorizontal: 10,
        borderRadius: 8,
        marginTop: hp("20%")
    }
})