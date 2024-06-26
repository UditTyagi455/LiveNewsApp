import {
  ActivityIndicator,
  Button,
  Image,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {style} from './style';
import {commonStyles} from '../../Styles';
import CheckBox from 'react-native-check-box';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {
  initialValues,
  validationSchema,
} from '../../../services/validate/Login';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';
import TouchID from 'react-native-touch-id';
import {API_URL} from '../../../services/utils/defines';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../../services/utils/axios';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isSelected, setSelection] = useState(false);
  const [show, setShow] = useState(false);
  const [authenticationMessage, setAuthenticationMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  //Start here
  const handleAuthentication = () => {
    TouchID.authenticate('Authenticate with Face ID', {
      fallbackLabel: 'Enter Passcode',
    })
      .then(success => {
        console.log('touch-id auth :::', success);
        setAuthenticationMessage('Authentication successful!');
        navigation.navigate('BottomNavigation');
      })
      .catch(error => {
        setAuthenticationMessage('Authentication failed.');
        console.log(error);
      });
  };
  //End here

  const submitForm = async (value: any) => {
    try {
      setLoading(true);
      console.log('submit-form-value ====>', value);
      const {data} = await api.post('/users/login', value);
      console.log('postData ===>', data);
      setLoading(false);
      await AsyncStorage.setItem('accesstoken', data?.accessToken);
      navigation.navigate('BottomNavigation');
    } catch (error) {
      console.log('error ==>', error);
      setLoading(false);
    }
  };
  return (
    <KeyboardAwareScrollView
      style={{backgroundColor: 'black', height: hp('100%')}}>
      <StatusBar backgroundColor="black" />
      <View style={{marginHorizontal: 15}}>
        <View style={style.helloView}>
          <Text style={style.helloText}>Hello</Text>
          <Text style={style.againText}>Again!</Text>
        </View>
        <View style={commonStyles.mv10}>
          <Text style={style.welcomeText}>Welcome back,</Text>
          <Text style={style.welcomeText}>We've missed you</Text>
        </View>
      </View>

      <View>
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
            <View style={{marginHorizontal: 15}}>
              <View style={{marginTop: 10}}>
              <View style={{flexDirection: "row"}}>
                <Text style={style.usernamepasswordTest}>Email</Text>
                <Text style={{marginTop: -3,color: "#B0B3B8",paddingLeft: 2}}>*</Text>
                </View>
                <TextInput
                  name="email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  style={style.input}
                  value={values.email}
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
              <View style={{marginTop: 5}}>
              <View style={{flexDirection: "row"}}>
                <Text style={style.usernamepasswordTest}>Password</Text>
                <Text style={{marginTop: -3,color: "#B0B3B8",paddingLeft: 2}}>*</Text>
                </View>
                <View>
                  <TextInput
                    name="password"
                    style={style.input}
                    onChangeText={handleChange('password')}
                    value={values.password}
                    secureTextEntry={show ? false : true}
                  />
                  <View style={{height: 22}}>
                    {!!errors.password && !!touched.password && (
                      <Text style={style.errorText}>* {errors.password}</Text>
                    )}
                  </View>
                  {show ? (
                    <Icon
                      name="eye-outline"
                      color="white"
                      style={style.passwordHideShow}
                      onPress={() => setShow(!show)}
                    />
                  ) : (
                    <Icon
                      name="eye-off-outline"
                      color="white"
                      style={style.passwordHideShow}
                      onPress={() => setShow(!show)}
                    />
                  )}
                </View>
              </View>

              <View
                style={[
                  commonStyles.flex,
                  {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 5,
                  },
                ]}>
                <View style={{flexDirection: 'row'}}>
                  <CheckBox
                    style={{height: 15, width: 15, marginRight: 15}}
                    onClick={() => {
                      setSelection(!isSelected);
                    }}
                    isChecked={isSelected}
                    checkBoxColor={'#1877F2'}
                  />
                  <Text style={commonStyles.textColor}>Remember me</Text>
                </View>
                <TouchableOpacity>
                  <Text style={{color: '#1877F2'}}>Forgot the password?</Text>
                </TouchableOpacity>
              </View>
              <TouchableWithoutFeedback onPress={handleSubmit}>
                <View style={style.loginBtn}>
                  {!loading ? (
                    <Text
                      style={[
                        commonStyles.textColor,
                        {fontSize: 18, color: 'white'},
                      ]}>
                      Login
                    </Text>
                  ) : (
                    <ActivityIndicator size="small" color="white" />
                  )}
                </View>
              </TouchableWithoutFeedback>
            </View>
          )}
        </Formik>
      </View>

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{authenticationMessage}</Text>
        <Button
          title="Authenticate with Face ID"
          onPress={handleAuthentication}
        />
      </View>

      <View>
        <Text
          style={[commonStyles.textColor, {textAlign: 'center', fontSize: 18}]}>
          or continue with
        </Text>
        <View style={style.socialLoginView}>
          <TouchableWithoutFeedback>
            <View style={style.socialBtn}>
              <Image source={require('../../../assets/img/fb-icon.png')} />
              <Text style={style.socialBtnText}>Facebook</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View style={style.socialBtn}>
              <Image source={require('../../../assets/img/google-icon.png')} />
              <Text style={style.socialBtnText}>Google</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View
        style={[
          commonStyles.flex,
          {alignItems: 'center', justifyContent: 'center', marginVertical: 15},
        ]}>
        <Text style={[commonStyles.textColor, {fontWeight: '500'}]}>
          don't have an account?{' '}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={{color: '#1877F2', fontWeight: '600'}}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({});
