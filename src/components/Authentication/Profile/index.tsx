import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icon from "react-native-vector-icons/Ionicons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { initialValues, validationSchema } from '../../../services/validate/Profile';
import { style } from "./style";
import ImagePicker from 'react-native-image-crop-picker';

const Profile = () => {

    const [imagePath, setImagePath] = useState("")
    const navigation = useNavigation();

    const submitForm = (value) => {
        console.log("value :", value);

    }

    const nextPress = () => { }

    const imagePicker = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setImagePath(image.path)
            console.log("pick-image ", image);
        });
    }
    return (
        <KeyboardAwareScrollView style={{ backgroundColor: "black", height: hp("100%") }}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
                <Icon name="arrow-back-outline" size={30} color="white" onPress={() => navigation.pop()} />
                <Text style={{ color: "white", marginLeft: wp("25%"), fontWeight: "600", fontSize: 16 }}>Fill Your Profile</Text>
            </View>
            <View style={{ marginTop: 20 }}>
                <View style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
                    <View style={{ height: 90, width: 90, borderRadius: 100, backgroundColor: "white" }}>
                        {imagePath && <Image source={{ uri: imagePath }} style={{ height: "100%", width: "100%", borderRadius: 100 }} />}
                        <Icon name="camera" size={20} color="white" style={{ position: "absolute", bottom: 0, right: 0, backgroundColor: "#1877F2", borderRadius: 50, padding: 4 }} onPress={imagePicker} />
                    </View>
                </View>
                <View>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values: any, { resetForm }) => {
                            console.log('my-values ==>', values);
                            submitForm(values);
                            resetForm({ values: initialValues });
                        }}>
                        {({
                            values,
                            handleChange,
                            handleSubmit,
                            errors,
                            touched,
                            handleBlur,
                        }) => (
                            <View style={{ marginHorizontal: 10 }}>
                                <View style={{ marginTop: 10 }}>
                                    <Text style={style.usernamepasswordTest}>Username</Text>
                                    <TextInput
                                        name="username"
                                        onChangeText={handleChange('username')}
                                        onBlur={handleBlur('username')}
                                        style={style.input}
                                        value={values.username}
                                    />
                                    <View style={{ height: 22 }}>
                                        {!!errors.username && !!touched.username && (
                                            <Text style={style.errorText}> {errors?.username ? `*${errors?.username}` : ""}</Text>
                                        )}
                                    </View>
                                </View>
                                <View style={{ marginTop: 2 }}>
                                    <Text style={style.usernamepasswordTest}>Full Name</Text>
                                    <TextInput
                                        name="name"
                                        onChangeText={handleChange('fullName')}
                                        onBlur={handleBlur('fullName')}
                                        style={style.input}
                                        value={values.fullName}
                                    />
                                    <View style={{ height: 22 }}>
                                        {!!errors.fullName && !!touched.fullName && (
                                            <Text style={style.errorText}> {errors?.fullName ? `*${errors?.fullName}` : ""}</Text>
                                        )}
                                    </View>
                                </View>
                                <View style={{ marginTop: 2 }}>
                                    <Text style={style.usernamepasswordTest}>Email Address</Text>
                                    <TextInput
                                        name="email"
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        style={style.input}
                                        value={values.email}
                                    />
                                    <View style={{ height: 22 }}>
                                        {!!errors.email && !!touched.email && (
                                            <Text style={style.errorText}> {errors?.email ? `*${errors?.email}` : ""}</Text>
                                        )}
                                    </View>
                                </View>
                                <View style={{ marginTop: 2 }}>
                                    <Text style={style.usernamepasswordTest}>Phone Number</Text>
                                    <TextInput
                                        name="phone"
                                        onChangeText={handleChange('phone')}
                                        onBlur={handleBlur('phone')}
                                        style={style.input}
                                        value={values.phone}
                                    />
                                    <View style={{ height: 22 }}>
                                        {!!errors.phone && !!touched.phone && (
                                            <Text style={style.errorText}> {errors?.phone ? `*${errors?.phone}` : ""}</Text>
                                        )}
                                    </View>
                                </View>
                                <TouchableOpacity style={{ backgroundColor: "#1877F2", paddingVertical: 15, alignItems: "center", marginHorizontal: 10, borderRadius: 8, marginTop: hp("20%") }} onPress={handleSubmit}>
                                    <Text style={{ color: "white", fontSize: 18 }}>Next</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </Formik>
                </View>

            </View>
        </KeyboardAwareScrollView>
    )
}

export default Profile

const styles = StyleSheet.create({})