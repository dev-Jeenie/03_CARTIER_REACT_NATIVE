import {RouteProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
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
  const emailRef = React.useRef<TextInput | null>(null); // generic type
  const passwordRef = React.useRef<TextInput | null>(null);

  const checkIdPw = () => {
    const result = email?.length > 0 && password?.length > 0;
    if (email?.length < 1) {
      SimpleToast.show('이메일을 입력하세요');
    } else if (password?.length < 1) {
      SimpleToast.show('비밀번호를 입력하세요.');
    }
    return result;
  };

  const onPressLogin = () => {
    SimpleToast.show('로그인시도');
    // setIsLoading(true);
    // setIsLoading(false);
  };
  const onPressSignUp = () => {
    SimpleToast.show('회원가입으로 이동');
  };
  return isLoading ? (
    <LoadingView />
  ) : (
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
            로그인
          </StyledText>
          <StyledText color="DEFAULT_WHITE" type="contentTitle">
            Cartier.com 계정으로 로그인하세요.
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
          <InputForm title="이메일" style={{marginBottom: 20}}>
            <MyInput
              value={email}
              onChangeText={value => setEmail(value)}
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
          <InputForm title="비밀번호" style={{marginBottom: 40}}>
            <MyInput
              value={password}
              onChangeText={value => setPassword(value)}
              placeholder="비밀번호를 입력하세요"
              placeholderTextColor={theme.colors.GRAY_000}
              secureTextEntry
              textContentType="newPassword"
              autoCapitalize="none"
              autoComplete="password"
              importantForAutofill="yes"
              onSubmitEditing={onPressLogin}
              ref={passwordRef}
              clearButtonMode="while-editing"
            />
          </InputForm>
          <View style={{alignItems: 'center'}}>
            <BigButton
              text="로그인"
              onPress={() => checkIdPw() && onPressLogin()}
            />
            <TouchableOpacity onPress={() => {}}>
              <StyledText
                color="GRAY_100"
                type="contentTitle"
                style={{marginTop: 20}}>
                비밀번호를 잊으셨나요?
              </StyledText>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: 60, alignItems: 'center'}}>
          <StyledText type="contentTitle">아직 회원이 아니신가요?</StyledText>
          <View style={{marginVertical: 20, alignItems: 'center'}}>
            <StyledText>결제 시간을 절약하고,</StyledText>
            <StyledText>어떤 기기에서든 저장된 아이템을 열람하세요.</StyledText>
          </View>
        </View>
        <BigButton
          text="회원가입"
          onPress={() => navigation.navigate('SignUp')}
          style={{backgroundColor: theme.colors.DARK_GRAY}}
        />
      </View>
    </ScrollView>
  );
};

export default SubmitIdPassword;
