import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    helloView: {
        paddingVertical: 20
    },
    helloText: {
        fontSize: 48,
        fontWeight: "600",
        color: "white"
    },
    againText: {
        fontSize: 48,
        color: "#1877F2",
        paddingLeft: 100,
        fontWeight: "600"
    },
    welcomeText: {
        fontSize: 20,
        color: "#B0B3B8",
    },
    usernamepasswordTest: {
        fontSize: 14,
        color: "#B0B3B8",
        fontWeight: "500",
        letterSpacing: 1
    },
    checkbox: {
        alignSelf: 'center',
    },
    input: {
        height: 50,
        backgroundColor: "#3A3B3C",
        borderRadius: 8,
        marginTop: 6,
        color: "#B0B3B8",
        paddingRight: 40,
        color: "white",
        fontWeight: "500",
        fontSize: 16
    },
    passwordHideShow: {
        position: "absolute",
        right: 10,
        top: 18,
        fontSize: 25
    },
    loginBtn: {
        paddingVertical: 14,
        backgroundColor: "#1877F2",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        marginVertical: 18
    },
    socialLoginView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 15,
        marginHorizontal: 10
    },
    socialBtn: {
        paddingVertical: 13,
        paddingHorizontal: 30,
        backgroundColor: "white",
        width: 165,
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    socialBtnText: {
        color: "black",
        fontWeight: "500",
        fontSize: 15,
        marginLeft: 10
    },
    errorText: {
        color: '#da1e37',
        fontSize: 10,
        marginVertical: 3
      },

})