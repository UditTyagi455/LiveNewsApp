import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import {
  initialValues,
  validationSchema,
} from '../../../services/validate/Profile';
import {style} from './style';
import ImagePicker from 'react-native-image-crop-picker';
import {UseSelector, useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {API_URL} from '../../../constants';

const CreateProfile = () => {
  const [imagePath, setImagePath] = useState('');
  const [imageLoading, setImageLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const storeValue = useSelector(state => state.register);
  const navigation = useNavigation();

  const submitForm = async (value: any) => {
    try {
      setLoading(true);
      console.log('value :', value);
      const {data} = await axios.post(`${API_URL}/users/user-create`, {
        userid: storeValue.userId,
        country: storeValue.country,
        username: value.username,
        fullName: value.fullName,
        phone: value.phone,
        avatar: imagePath,
      });
      console.log('register-user :::', data);
      setLoading(false);
      navigation.navigate('Login');
    } catch (error) {
      console.log('error >>>>>', error);
      setLoading(false);
    }
    // navigation.navigate('BottomNavigation');
  };

  const imagePicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log('image-picker >>>', image);
      setImageLoading(true);
      const formData = new FormData();
      formData.append('file', {
        uri: image.path,
        type: image.mime ? image.mime : image.path,
        name: 'test_image.jpg',
      });

      axios
        .post(`${API_URL}/users/upload-image`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(res => {
          console.log('upload-image ', res.data.data);
          setImagePath(res.data.data.path);
          setImageLoading(false);
        })
        .catch(err => {
          console.log('error >>>>>', err);
          setImageLoading(false);
        });
    });
  };

  return (
    <KeyboardAwareScrollView style={style.keyboardScrollview}>
      <View style={style.header}>
        <Icon
          name="arrow-back-outline"
          size={30}
          color="white"
          onPress={() => navigation.pop()}
        />
        <Text style={style.headerText}>Fill Your Profile</Text>
      </View>
      <View
        style={{marginTop: 20, height: Dimensions.get('screen').height * 0.85}}>
        <View style={style.profileImageView}>
          <View style={style.imagePicker}>
            {imagePath && (
              <Image source={{uri: imagePath}} style={style.profileImage} />
            )}
            {!imageLoading ? (
              <Icon
                name="camera"
                size={20}
                color="white"
                style={style.cameraIcon}
                onPress={imagePicker}
              />
            ) : (
              <ActivityIndicator
                size="small"
                color="black"
                style={style.cameraIcon}
              />
            )}
          </View>
        </View>
        <View
          style={{display: 'flex', height: '100%', flexDirection: 'column'}}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values: any, {resetForm}) => {
              console.log('my-values ==>', values);
              submitForm(values);
              resetForm({values: initialValues});
            }}>
            {({
              values,
              handleChange,
              handleSubmit,
              errors,
              touched,
              handleBlur,
            }) => (
              <View
                style={{
                  marginHorizontal: 10,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '88%',
                }}>
                <View style={{flexDirection: 'column'}}>
                  <View style={{marginTop: 10}}>
                    <Text style={style.usernamepasswordTest}>Username</Text>
                    <TextInput
                      name="username"
                      onChangeText={handleChange('username')}
                      onBlur={handleBlur('username')}
                      style={style.input}
                      value={values.username}
                    />
                    <View style={{height: 22}}>
                      {!!errors.username && !!touched.username && (
                        <Text style={style.errorText}>
                          {' '}
                          {errors?.username ? `*${errors?.username}` : ''}
                        </Text>
                      )}
                    </View>
                  </View>
                  <View style={{marginTop: 2}}>
                    <Text style={style.usernamepasswordTest}>Full Name</Text>
                    <TextInput
                      name="name"
                      onChangeText={handleChange('fullName')}
                      onBlur={handleBlur('fullName')}
                      style={style.input}
                      value={values.fullName}
                    />
                    <View style={{height: 22}}>
                      {!!errors.fullName && !!touched.fullName && (
                        <Text style={style.errorText}>
                          {' '}
                          {errors?.fullName ? `*${errors?.fullName}` : ''}
                        </Text>
                      )}
                    </View>
                  </View>
                  <View style={{marginTop: 2}}>
                    <Text style={style.usernamepasswordTest}>
                      Email Address
                    </Text>
                    <TextInput
                      name="email"
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      style={style.input}
                      value={storeValue.email}
                      editable={false}
                    />
                    <View style={{height: 22}}>
                      {!!errors.email && !!touched.email && (
                        <Text style={style.errorText}>
                          {' '}
                          {errors?.email ? `*${errors?.email}` : ''}
                        </Text>
                      )}
                    </View>
                  </View>
                  <View style={{marginTop: 2}}>
                    <Text style={style.usernamepasswordTest}>Phone Number</Text>
                    <TextInput
                      name="phone"
                      onChangeText={handleChange('phone')}
                      onBlur={handleBlur('phone')}
                      style={style.input}
                      value={values.phone}
                    />
                    <View style={{height: 22}}>
                      {!!errors.phone && !!touched.phone && (
                        <Text style={style.errorText}>
                          {' '}
                          {errors?.phone ? `*${errors?.phone}` : ''}
                        </Text>
                      )}
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  style={style.RegisterButton}
                  onPress={handleSubmit}>
                  {!loading ? (
                    <Text style={{color: 'white', fontSize: 18}}>Register</Text>
                  ) : (
                    <ActivityIndicator size="small" color="white" />
                  )}
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default CreateProfile;

const styles = StyleSheet.create({});
