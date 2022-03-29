import theme from '../../commons/theme';
// import Form from '#components/Form';
// import Input from '#components/Input';
// import KeyboardAvoidingScrollView from '#components/KeyboardAvoidingScrollView';
// import Text from '#components/Text';
// import {setPrincipal} from '#stores/auth';
import produce from 'immer';
import React from 'react';
import {
  Animated,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {useDispatch} from 'react-redux';
import assets from '../../../assets';

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    paddingTop: 27.5,
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  formContainer: {
    flex: 1,
  },
  titleContainer: {
    marginBottom: 50,
  },
  formItemDistance: {
    marginBottom: 20,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 100,
  },
  navigationBorder: {
    borderRightColor: Color[ColorType.GRAY_100],
    borderRightWidth: 1,
    marginRight: 12.5,
    paddingRight: 12.5,
  },
  navigationText: {
    ...Font[FontType.H6_BOLD],
    color: Color[ColorType.GRAY_500],
  },
  socialLoginWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialLoginContainer: {
    flexDirection: 'row',
    marginTop: 25,
  },
  socialLogin: {justifyContent: 'center', alignItems: 'center'},
  socialLoginIcon: {width: 50, height: 50, marginBottom: 10},
  socialLoginDistance: {marginRight: 25},
  modalBackground: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  modalContents: {
    backgroundColor: theme.colors.DEFAULT_WHITE,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  btnBox: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 60,
  },
  modalText: {
    lineHeight: 21,
  },
});

const initialRequestBody = {
  checked: true,
};

const CustomBackdrop = ({animatedIndex, style}) => {
  // animated variables
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [0, 1],
      [0, 1],
      Extrapolate.CLAMP,
    ),
  }));

  // styles
  const containerStyle = React.useMemo(
    () => [
      style,
      {
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
      },
      containerAnimatedStyle,
    ],
    [style, containerAnimatedStyle],
  );

  return <Animated.View style={containerStyle} />;
};

function Login({navigation, route}) {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = React.useState(false);
  const [requestBody, setRequestBody] = React.useState(initialRequestBody);

  // const handleLogin = async () => {
  //   try {
  //     await dispatch(setPrincipal());
  //     navigation.navigate(route.params.to ?? 'HomeStackNavigator');
  //   } catch (error) {
  //     console.warn(error);
  //   }
  // };

  return (
    <View style={styles.formContainer}>
      <View style={styles.titleContainer}>
        <Text
          style={
            {
              // ...Font[FontType.BIG_TITLE_NORMAL],
              // color: Color[ColorType.GRAY_400],
            }
          }>
          홈그릿과 함께
        </Text>
        <Text
          style={
            {
              // ...Font[FontType.BIG_TITLE],
              // color: Color[ColorType.MAIN_PRIMARY],
            }
          }>
          성공적인 인테리어{' '}
          <Text
            style={
              {
                // ...Font[FontType.BIG_TITLE_NORMAL],
                // color: Color[ColorType.GRAY_400],
              }
            }>
            하세요.
          </Text>
        </Text>
      </View>
      {/* <Form.Item title="이메일" style={styles.formItemDistance}> */}
      <TextInput
        placeholder="이메일을 입력하세요"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {/* </Form.Item> */}
      {/* <Form.Item title="비밀번호" style={styles.formItemDistance}> */}
      <TextInput
        placeholder="비밀번호를 입력하세요"
        textContentType="newPassword"
        autoCapitalize="none"
        secureTextEntry
      />
      {/* </Form.Item> */}
      {/* <Input.CheckBox
        label="로그인 유지"
        checked={requestBody.checked}
        onChangeCheck={checked => {
          setRequestBody(
            produce(draft => {
              draft.checked = checked;
            }),
          );
        }}
        style={styles.formItemDistance}
      /> */}
      {/* <Button
        type="primary"
        onPress={handleLogin}
        style={styles.formItemDistance}>
        로그인
      </Button> */}
      <View style={styles.navigationContainer}>
        <TouchableOpacity
          style={styles.navigationBorder}
          onPress={() => {
            navigation.navigate('Signup');
          }}>
          <Text style={styles.navigationText}>회원가입</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navigationBorder}
          onPress={() => {
            navigation.navigate('FindId');
          }}>
          <Text style={styles.navigationText}>아이디 찾기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navigationBorder}
          onPress={() => {
            navigation.navigate('FindPassword');
          }}>
          <Text style={styles.navigationText}>비밀번호 찾기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setIsVisible(true);
          }}>
          <Text style={styles.navigationText}>계정 활성화</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;
