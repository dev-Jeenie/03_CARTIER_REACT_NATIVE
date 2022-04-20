import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, View} from 'react-native';
import assets from '../../../assets';
import StyledText from '../../commons/StyledText';
import theme from '../../commons/theme';
import BigButton from '../../components/common/BigButton';
import {AuthStackParamList} from '../../nav/AppContainer';

const {width} = Dimensions.get('window');

const SignUpComplete = () => {
  const {navigate, push} =
    useNavigation<StackNavigationProp<AuthStackParamList>>();
  return (
    <ScrollView
      style={
        {
          // backgroundColor: theme.colors.GRAY_300,
        }
      }>
      <View
        style={{
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <Image
          source={assets.cartier_service}
          style={{
            height: 200,
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            width: width,
            backgroundColor: 'pink',
          }}
          // resizeMode="contain"
        />
        <StyledText type="contentTitle">회원가입이 완료되었습니다.</StyledText>
        <BigButton text="로그인하기" onPress={() => push('SubmitIdPassword')} />
      </View>
    </ScrollView>
  );
};
export default SignUpComplete;

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
  // imageBackground: {
  //   position: 'absolute',
  //   left: 0,
  //   right: 0,
  //   top: 0,
  //   bottom: 0,
  //   backgroundColor: 'rgba(41,41,41,0.5)',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
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
