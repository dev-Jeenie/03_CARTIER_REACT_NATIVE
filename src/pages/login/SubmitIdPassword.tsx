import {RouteProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import axios, {AxiosError} from 'axios';
import React from 'react';
import {
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

// type SubmitIdPasswordRouteProp = RouteProp<
//   AuthStackParamList,
//   'SubmitIdPassword'
// >;

const SubmitIdPassword = () => {
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();
  const inset = useSafeAreaInsets();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  // const emailRef = React.useRef<any>(null); // generic type
  // const passwordRef = React.useRef<any>(null);
  const dispatch = useAppDispatch();

  const checkIdPw = () => {
    const result = email?.length > 0 && password?.length > 0;
    if (email?.length < 1) {
      SimpleToast.show('???????????? ???????????????');
    } else if (password?.length < 1) {
      SimpleToast.show('??????????????? ???????????????.');
    }
    return result;
  };

  const onSubmit = React.useCallback(async () => {
    if (isLoading) {
      return;
    }
    if (!email || !email.trim()) {
      return SimpleToast.show('???????????? ???????????????');
    }
    if (!password || !password.trim()) {
      return SimpleToast.show('??????????????? ???????????????');
    }
    try {
      setIsLoading(true);
      console.log(Config.API_URL);
      const res = await axios.post(`${Config.API_URL}/login`, {
        email,
        password,
      });
      console.log(res);
      navigation.navigate('MainDrawerNavigator');
      SimpleToast.show('????????????????????????.');
      dispatch(
        userSlice.actions.setUser({
          name: res.data.data.name,
          email: res.data.data.email,
          accessToken: res.data.data.accessToken,
        }),
      );
      await EncryptedStorage.setItem(
        'refreshToken',
        res.data.data.refreshToken,
      );
    } catch (error) {
      const errorRes = (error as AxiosError).response;
      console.error(errorRes);
      if (errorRes) {
        Alert.alert(`${errorRes.data.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  }, [email, password]);
  // const onPressLogin = async () => {
  //   setIsLoading(true);
  //   const res = await setTimeout(() => {
  //     return true;
  //   }, 1500);
  //   (await res) && navigation.navigate('MainDrawerNavigator'),
  //     SimpleToast.show('????????????????????????.');
  //   // try {
  //   //   const res = await setTimeout(() => {
  //   //     return true;
  //   //   }, 1500);
  //   //   res && navigation.navigate('MainDrawerNavigator'),
  //   //     SimpleToast.show('????????????????????????.');
  //   // } catch (error) {
  //   //   console.log(error);
  //   //   SimpleToast.show('????????? ?????? ??????????????????.');
  //   // }
  // };

  const onPressLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigation.navigate('MainDrawerNavigator');
      SimpleToast.show('????????????????????????.');
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
            ?????????
          </StyledText>
          <StyledText color="DEFAULT_WHITE" type="contentTitle">
            Cartier.com ???????????? ??????????????????.
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
          <InputForm title="?????????" style={{marginBottom: 20}}>
            <MyInput
              value={email}
              onChangeText={value => setEmail(value)}
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
          <InputForm title="????????????" style={{marginBottom: 40}}>
            <MyInput
              value={password}
              onChangeText={value => setPassword(value)}
              placeholder="??????????????? ???????????????"
              placeholderTextColor={theme.colors.GRAY_000}
              secureTextEntry
              textContentType="newPassword"
              autoCapitalize="none"
              autoComplete="password"
              importantForAutofill="yes"
              onSubmitEditing={onSubmit}
              // onSubmitEditing={onPressLogin}
              clearButtonMode="while-editing"
            />
          </InputForm>
          <View style={{alignItems: 'center'}}>
            <BigButton
              text="?????????"
              onPress={() => onSubmit()}
              // onPress={() => checkIdPw() && onPressLogin()}
            />
            <TouchableOpacity onPress={() => {}}>
              <StyledText
                color="GRAY_100"
                type="contentTitle"
                style={{marginTop: 20}}>
                ??????????????? ????????????????
              </StyledText>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: 60, alignItems: 'center'}}>
          <StyledText type="contentTitle">?????? ????????? ????????????????</StyledText>
          <View style={{marginVertical: 20, alignItems: 'center'}}>
            <StyledText>?????? ????????? ????????????,</StyledText>
            <StyledText>?????? ??????????????? ????????? ???????????? ???????????????.</StyledText>
          </View>
        </View>
        <BigButton
          text="????????????"
          onPress={() => navigation.navigate('SignUp')}
          style={{backgroundColor: theme.colors.DARK_GRAY}}
        />
      </View>
    </ScrollView>
  );
};

export default SubmitIdPassword;
