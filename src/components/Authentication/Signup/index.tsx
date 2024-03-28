import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {style} from '../Login/style';
import {commonStyles} from '../../Styles';
import CheckBox from 'react-native-check-box';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  initialValues,
  validationSchema,
} from '../../../services/validate/Login';
import {Formik} from 'formik';
import axios from 'axios';
import {UseSelector, useDispatch, useSelector} from 'react-redux';
import {setRegisteruser} from '../../../features/RegisterUser';
import {API_URL} from '../../../constants';

const Signup = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isSelected, setSelection] = useState(false);
  const [show, setShow] = useState(false);
  const [loading,setLoading] = useState(false);
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const dispatch = useDispatch();
  // const storeValue = useSelector(state => console.log("useSelector value ::",state.register))

  const navigation = useNavigation();

  const submitForm = async (values: string) => {
    try {
      setLoading(true);
      console.log('submit-values :::', values);
      const {data} = await axios.post(`${API_URL}/users/register`, {
        email: values?.email,
        password: values?.password,
      });
      console.log('data >>>>>>>', data);
      setLoading(false);
      dispatch(setRegisteruser({userId: data.data._id,email: data.data.email}));
      navigation.navigate('selectCountry');
    } catch (error) {
      console.log('error occured into register-user ::', error);
      setLoading(false);
    }

   
  };
  const handleFirstSubmit = (event: any) => {
    secondRef.current.focus();
  };
  return (
    <KeyboardAwareScrollView
      style={{backgroundColor: 'black', height: hp('100%')}}>
      <View style={{marginHorizontal: 15}}>
        <View style={style.helloView}>
          <Text style={{fontSize: 48, color: '#1877F2', fontWeight: '600'}}>
            Hello!
          </Text>
        </View>
        <View style={commonStyles.mv10}>
          <Text style={style.welcomeText}>Signup to get Started,</Text>
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
                <Text style={style.usernamepasswordTest}>Username*</Text>
                <TextInput
                  name="email"
                  ref={firstRef}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  style={style.input}
                  value={values.email}
                  onSubmitEditing={handleFirstSubmit}
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
                <Text style={style.usernamepasswordTest}>Password*</Text>
                <View>
                  <TextInput
                    name="password"
                    ref={secondRef}
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
              </View>
              <TouchableWithoutFeedback onPress={handleSubmit}>
                <View style={style.loginBtn}>
                  {!loading ? <Text style={[commonStyles.textColor, {fontSize: 18}]}>
                    Signup
                  </Text> : <ActivityIndicator color="white" size="small"/>}
                </View>
              </TouchableWithoutFeedback>
            </View>
          )}
        </Formik>
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
          Already have an account?{' '}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{color: '#1877F2', fontWeight: '600'}}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({});
