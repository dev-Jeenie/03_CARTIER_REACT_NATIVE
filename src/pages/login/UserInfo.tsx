import {RouteProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import axios, {AxiosError} from 'axios';
import React from 'react';
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Config from 'react-native-config';
import EncryptedStorage from 'react-native-encrypted-storage';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SimpleToast from 'react-native-simple-toast';
import {useDispatch} from 'react-redux';
import assets from '../../../assets';
import StyledText from '../../commons/StyledText';
import theme from '../../commons/theme';
import BigButton from '../../components/common/BigButton';
import InputForm from '../../components/common/InputForm';
import LoadingView from '../../components/common/LoadingView';
import MyInput from '../../components/common/MyInput';
import {AuthStackParamList} from '../../nav/AppContainer';
import userSlice from '../../slices/user';
import {useAppDispatch} from '../../store';

const {width} = Dimensions.get('window');

type JoinFormType = {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  passwordConfirm: string;
};

const initJoinForm: JoinFormType = {
  name: '',
  email: '',
  phoneNumber: '',
  password: '',
  passwordConfirm: '',
};

const UserInfo = () => {
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();
  const inset = useSafeAreaInsets();
  const [isLoading, setIsLoading] = React.useState(false);

  const [joinForm, setJoinForm] = React.useState<JoinFormType>(initJoinForm);
  const [name, setname] = React.useState('myname1');
  const [email, setemail] = React.useState('myname1');
  const [password, setPassword] = React.useState('myname1');
  const [phoneNumberVerified, setPhoneNumberVerified] =
    React.useState<boolean>(false);
  const onSubmit = React.useCallback(async () => {
    if (isLoading) {
      return;
    }
    if (!joinForm?.name || !joinForm?.name.trim()) {
      return SimpleToast.show('????????? ???????????????');
    }
    if (!joinForm?.email || !joinForm?.email.trim()) {
      return SimpleToast.show('???????????? ???????????????');
    }
    if (!joinForm?.phoneNumber || !joinForm?.phoneNumber.trim()) {
      return SimpleToast.show('??????????????? ???????????????');
    }
    if (!joinForm?.password || !joinForm?.password.trim()) {
      return SimpleToast.show('??????????????? ???????????????');
    }
    try {
      setIsLoading(true);
      console.log(Config.API_URL);
      const res = await axios.post(`${Config.API_URL}/user`, {
        ...joinForm,
      });
      // dispatch(userSlice.actions.setName(res.data.data.name));
      console.log(res);
      Alert.alert('??????????????? ?????????????????????.');
      navigation.push('SubmitIdPassword');
    } catch (error) {
      const errorRes = (error as AxiosError).response;
      console.error(errorRes);
      if (errorRes) {
        Alert.alert(`${errorRes.data.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  }, [
    joinForm?.name,
    joinForm?.email,
    joinForm?.phoneNumber,
    joinForm?.password,
  ]);

  const checkInfo = () => {
    const result =
      joinForm?.name?.length > 0 &&
      joinForm?.password?.length > 0 &&
      joinForm?.email?.length > 0 &&
      phoneNumberVerified;
    if (joinForm?.name?.length < 1) {
      SimpleToast.show('????????? ???????????????');
    } else if (joinForm?.email?.length < 1) {
      SimpleToast.show('???????????? ???????????????.');
    } else if (joinForm?.password?.length < 1) {
      SimpleToast.show('??????????????? ???????????????.');
    } else if (!phoneNumberVerified) {
      SimpleToast.show('???????????? ????????? ??????????????????.');
    }
    return result;
  };

  const onPressVerifyPhoneNumber = () => {
    if (joinForm?.phoneNumber?.length !== 11) {
      return SimpleToast.show('????????? ????????? ?????? ??????????????????.');
    }
    setPhoneNumberVerified(true);
    SimpleToast.show('????????? ?????????????????????.');
  };

  const onPressSignUp = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigation.navigate('SignUpComplete');
    }, 1500);
  };

  return (
    <ScrollView
      style={{
        backgroundColor: theme.colors.GRAY_300,
      }}>
      <View
        style={{
          height: 400,
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image style={styles.slideImage} source={assets.clash_thum} />
        <View style={styles.imageBackground}>
          <StyledText
            color="DEFAULT_WHITE"
            type="pageTitle"
            style={{marginBottom: 20}}>
            ????????????
          </StyledText>
          <StyledText color="DEFAULT_WHITE" type="contentTitle">
            ??????????????? ??????????????????.
          </StyledText>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal:
            theme.styles.globalPaddingHorizontal.paddingHorizontal,
          paddingVertical: theme.styles.globalPaddingVertical.paddingVertical,
          marginBottom: 100,
        }}>
        <View
          style={{
            marginBottom: 20,
          }}>
          <InputForm title="??????" style={{marginBottom: 20}}>
            <MyInput
              value={joinForm.name}
              onChangeText={value => setJoinForm({...joinForm, name: value})}
              placeholder="????????? ???????????????"
              placeholderTextColor={theme.colors.GRAY_000}
              keyboardType="default"
              returnKeyType="next"
              autoCapitalize="none"
              textContentType="name"
              importantForAutofill="yes"
              blurOnSubmit={false}
              clearButtonMode="while-editing"
            />
          </InputForm>
          <InputForm title="?????????" style={{marginBottom: 20}}>
            <MyInput
              value={joinForm.email}
              onChangeText={value => setJoinForm({...joinForm, email: value})}
              placeholder="???????????? ???????????????"
              placeholderTextColor={theme.colors.GRAY_000}
              keyboardType="email-address"
              returnKeyType="next"
              autoCapitalize="none"
              textContentType="emailAddress"
              importantForAutofill="yes"
              autoComplete="email"
              blurOnSubmit={false}
              clearButtonMode="while-editing"
            />
          </InputForm>
          <InputForm title="????????? ??????" style={{marginBottom: 20}}>
            <MyInput
              value={joinForm.phoneNumber}
              onChangeText={value =>
                setJoinForm({...joinForm, phoneNumber: value})
              }
              placeholder="- ?????? ????????? ???????????????"
              placeholderTextColor={theme.colors.GRAY_000}
              keyboardType="number-pad"
              returnKeyType="next"
              autoCapitalize="none"
              textContentType="telephoneNumber"
              importantForAutofill="yes"
              blurOnSubmit={false}
              clearButtonMode="while-editing"
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                bottom: 10,
                right: 0,
                borderWidth: 2,
                borderColor: theme.colors.GRAY_200,
                height: 30,
                paddingHorizontal: 15,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={onPressVerifyPhoneNumber}>
              <StyledText>????????????</StyledText>
            </TouchableOpacity>
          </InputForm>
          <InputForm title="????????????" style={{marginBottom: 20}}>
            <MyInput
              value={joinForm?.password}
              onChangeText={value =>
                setJoinForm({...joinForm, password: value})
              }
              placeholder="??????????????? ???????????????"
              placeholderTextColor={theme.colors.GRAY_000}
              secureTextEntry
              textContentType="newPassword"
              autoCapitalize="none"
              autoComplete="password"
              importantForAutofill="yes"
              clearButtonMode="while-editing"
            />
          </InputForm>
          <InputForm title="???????????? ??????" style={{marginBottom: 20}}>
            <MyInput
              value={joinForm?.passwordConfirm}
              onChangeText={value =>
                setJoinForm({...joinForm, passwordConfirm: value})
              }
              placeholder="???????????? ??????"
              placeholderTextColor={theme.colors.GRAY_000}
              secureTextEntry
              textContentType="newPassword"
              autoCapitalize="none"
              autoComplete="password"
              importantForAutofill="yes"
              onSubmitEditing={onSubmit}
              clearButtonMode="while-editing"
              isValidCheck
              state={joinForm?.password === joinForm?.passwordConfirm}
              validText={
                joinForm?.password === joinForm?.passwordConfirm
                  ? '??????????????? ???????????????'
                  : '??????????????? ???????????? ????????????'
              }
            />
          </InputForm>
        </View>
        {isLoading ? (
          <ActivityIndicator color={theme.colors.MAIN_RED} />
        ) : (
          <BigButton
            text="????????????"
            onPress={() => onSubmit()}
            // onPress={() => checkInfo() && onPressSignUp()}
            style={{backgroundColor: theme.colors.DARK_GRAY}}
            disabled={isLoading}
          />
        )}
      </View>
    </ScrollView>
  );
};
export default UserInfo;

const styles = StyleSheet.create({
  languageBtnBox: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 5,
    marginRight: 20,
  },
  imageWrap: {
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: '11%',
  },
  slideImage: {
    width: width,
    // width: SLIDE_W,
    // height: width < 390 ? 476 : 550,
    height: '100%',
    marginBottom: 0.4,
  },
  imageBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(41,41,41,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneImage: {
    height: width < 390 ? 660 : 724,
    width: width < 390 ? 335 : 375,
  },
  round: {
    width: 66,
    height: 66,
  },
  shape: {
    width: 73,
    height: 74,
  },
  chevron: {
    width: 16,
    height: 16,
  },
  buttonModalBox: {
    width: '100%',
    height: 100,
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    flexDirection: 'column',
    paddingBottom: 0,
    backgroundColor: theme.colors.MAIN_RED,
    borderColor: theme.colors.MAIN_RED,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  subText: {
    fontSize: 12,
    color: theme.colors.MAIN_RED,
  },
  subTextBorder: {
    borderBottomColor: theme.colors.MAIN_RED,
    borderBottomWidth: 1,
    marginTop: 2,
  },
});
