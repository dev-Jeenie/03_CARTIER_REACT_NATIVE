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

  const nameRef = React.useRef<TextInput | null>(null); // generic type
  const emailRef = React.useRef<TextInput | null>(null); // generic type
  const passwordRef = React.useRef<TextInput | null>(null);
  const passwordConfirmRef = React.useRef<TextInput | null>(null);

  const onSubmit = React.useCallback(async () => {
    if (isLoading) {
      return;
    }
    if (!joinForm?.name || !joinForm?.name.trim()) {
      return SimpleToast.show('이름을 입력하세요');
    }
    if (!joinForm?.email || !joinForm?.email.trim()) {
      return SimpleToast.show('이메일을 입력하세요');
    }
    if (!joinForm?.phoneNumber || !joinForm?.phoneNumber.trim()) {
      return SimpleToast.show('전화번호를 입력하세요');
    }
    if (!joinForm?.password || !joinForm?.password.trim()) {
      return SimpleToast.show('비밀번호를 입력하세요');
    }
    try {
      setIsLoading(true);
      console.log(Config.API_URL);
      const res = await axios.post('http://192.168.0.167:3105/user', {
        // name,
        // email,
        // password,
        ...joinForm,
      });
      // const res = await axios.post(`http://222.237.193.154:3105/user`, {
      //   // name,
      //   // email,
      //   // password,
      //   joinForm,
      // });
      // const res = await axios.post(
      //   // `${
      //   //   process.env.MODE_ENV === 'production'
      //   //     ? '실서버주소'
      //   //     : 'localhost:3105'
      //   // }/user`,
      //   // `${__DEV__ ? 'localhost:3105' : '실서버주소'}/user`,
      //   // `${__DEV__ ? '10.0.2.2:3105' : '실서버주소'}/user`,
      //   // `${__DEV__ ? '222.237.193.154:3105' : '실서버주소'}/user`,
      //   // `${__DEV__ ? Config.API_URL : '실서버주소'}/user`,
      //   // `${Config.API_URL}/user`,
      //   // `192.168.0.167/user`,
      //   `http://222.237.193.154:3105/user`,
      //   {name, email, password},
      // );
      //   {
      //     headers: {
      //       token: '나만의 고유한 값',
      //       // 이 고유한 값을 통해서 이 사람의 요청이 방금 들어왔다는 것을 체크함
      //     },
      //   },
      // ); // 서버개발자와의 약속
      // 이 요청을 보낼 권한이 있는지를 header에 담는다
      console.log(res);
      // 비동기, promise이기 때문에 앞에 await를 붙여야한다
      Alert.alert('회원가입이 완료되었습니다.');
      navigation.navigate('SubmitIdPassword');
    } catch (error) {
      const errorRes = (error as AxiosError).response;
      console.error(errorRes);
      // 네트워크 에러인지 문법에러인지 알 수 없다. 무슨 에러인지도 모르는데 error.response가 있을거라고 TS가 확신할 수 없어!
      // TS가 타입추론을 못할 때에는 as로 직접 이렇게 네트워크에러로 타입을 변경시킬 수 있다
      if (errorRes) {
        Alert.alert(`${errorRes.data.message}`); // 서버개발자와의 약속
      } // 이건 네트워크 에러만 잡는거라 문법에러는 잡지 못한다.
    } finally {
      setIsLoading(false);
    }
  }, [
    joinForm?.name,
    joinForm?.email,
    joinForm?.phoneNumber,
    joinForm?.password,
  ]);

  // useEffect는 async를 사용할 수 없음. return 값이 () => {} clean up 함수이기 때문에(clean up 함수는 promise가 아니라 함수여야한다!)
  const checkInfo = () => {
    const result =
      joinForm?.name?.length > 0 &&
      joinForm?.password?.length > 0 &&
      joinForm?.email?.length > 0 &&
      phoneNumberVerified;
    if (joinForm?.name?.length < 1) {
      SimpleToast.show('이름을 입력하세요');
    } else if (joinForm?.email?.length < 1) {
      SimpleToast.show('이메일을 입력하세요.');
    } else if (joinForm?.password?.length < 1) {
      SimpleToast.show('비밀번호를 입력하세요.');
    } else if (!phoneNumberVerified) {
      SimpleToast.show('휴대전화 인증을 완료해주세요.');
    }
    return result;
  };

  const onPressVerifyPhoneNumber = () => {
    if (joinForm?.phoneNumber?.length !== 11) {
      return SimpleToast.show('휴대폰 번호를 다시 확인해주세요.');
    }
    setPhoneNumberVerified(true);
    SimpleToast.show('인증이 완료되었습니다.');
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
            회원가입
          </StyledText>
          <StyledText color="DEFAULT_WHITE" type="contentTitle">
            회원정보를 입력해주세요.
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
          <InputForm title="이름" style={{marginBottom: 20}}>
            <MyInput
              value={joinForm.name}
              onChangeText={value => setJoinForm({...joinForm, name: value})}
              placeholder="이름을 입력하세요"
              placeholderTextColor={theme.colors.GRAY_000}
              keyboardType="default"
              returnKeyType="next"
              autoCapitalize="none"
              textContentType="name"
              importantForAutofill="yes"
              onSubmitEditing={() => {
                emailRef.current?.focus();
              }}
              blurOnSubmit={false}
              ref={nameRef}
              clearButtonMode="while-editing"
            />
          </InputForm>
          <InputForm title="이메일" style={{marginBottom: 20}}>
            <MyInput
              value={joinForm.email}
              onChangeText={value => setJoinForm({...joinForm, email: value})}
              placeholder="이메일을 입력하세요"
              placeholderTextColor={theme.colors.GRAY_000}
              keyboardType="email-address"
              returnKeyType="next"
              autoCapitalize="none"
              textContentType="emailAddress"
              importantForAutofill="yes"
              autoComplete="email"
              onSubmitEditing={() => {
                passwordRef.current?.focus();
              }}
              blurOnSubmit={false}
              ref={emailRef}
              clearButtonMode="while-editing"
            />
          </InputForm>
          <InputForm title="휴대폰 번호" style={{marginBottom: 20}}>
            <MyInput
              value={joinForm.phoneNumber}
              onChangeText={value =>
                setJoinForm({...joinForm, phoneNumber: value})
              }
              placeholder="- 없이 번호만 입력하세요"
              placeholderTextColor={theme.colors.GRAY_000}
              keyboardType="number-pad"
              returnKeyType="next"
              autoCapitalize="none"
              textContentType="telephoneNumber"
              importantForAutofill="yes"
              onSubmitEditing={() => {
                passwordRef.current?.focus();
              }}
              blurOnSubmit={false}
              ref={emailRef}
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
              <StyledText>인증하기</StyledText>
            </TouchableOpacity>
          </InputForm>
          <InputForm title="비밀번호" style={{marginBottom: 20}}>
            <MyInput
              value={joinForm?.password}
              onChangeText={value =>
                setJoinForm({...joinForm, password: value})
              }
              placeholder="비밀번호를 입력하세요"
              placeholderTextColor={theme.colors.GRAY_000}
              secureTextEntry
              textContentType="newPassword"
              autoCapitalize="none"
              autoComplete="password"
              importantForAutofill="yes"
              onSubmitEditing={() => {
                passwordConfirmRef.current?.focus();
              }}
              ref={passwordRef}
              clearButtonMode="while-editing"
            />
          </InputForm>
          <InputForm title="비밀번호 확인" style={{marginBottom: 20}}>
            <MyInput
              value={joinForm?.passwordConfirm}
              onChangeText={value =>
                setJoinForm({...joinForm, passwordConfirm: value})
              }
              placeholder="비밀번호 확인"
              placeholderTextColor={theme.colors.GRAY_000}
              secureTextEntry
              textContentType="newPassword"
              autoCapitalize="none"
              autoComplete="password"
              importantForAutofill="yes"
              onSubmitEditing={onSubmit}
              // onSubmitEditing={onPressSignUp}
              ref={passwordRef}
              clearButtonMode="while-editing"
              isValidCheck
              state={joinForm?.password === joinForm?.passwordConfirm}
              validText={
                joinForm?.password === joinForm?.passwordConfirm
                  ? '비밀번호가 일치합니다'
                  : '비밀번호가 일치하지 않습니다'
              }
            />
          </InputForm>
        </View>
        {isLoading ? (
          <ActivityIndicator color={theme.colors.MAIN_RED} />
        ) : (
          <BigButton
            text="회원가입"
            onPress={() => onSubmit()}
            // onPress={() => checkInfo() && onPressSignUp()}
            style={{backgroundColor: theme.colors.DARK_GRAY}}
            disabled={isLoading}
          />
        )}
      </View>
    </ScrollView>
  );
};;;;;
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
