import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Animated,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SwiperFlatList from 'react-native-swiper-flatlist';
import assets from '../../assets';
import StyledText from '../commons/StyledText';
import theme from '../commons/theme';
import BigButton from '../components/common/BigButton';
import HeaderContainer from '../components/common/HeaderContainer';

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
    backgroundColor: 'rgba(41,41,41,0.7)',
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

const Login = () => {
  const navigation = useNavigation<any>();
  const inset = useSafeAreaInsets();

  const scrollX = React.useRef<any>(new Animated.Value(0)).current;
  const scrollY = React.useRef<any>(new Animated.Value(0)).current;

  const handleScroll = Animated.event([
    {
      nativeEvent: {
        contentOffset: {
          x: scrollX,
        },
      },
    },
  ]);

  const imgTranslateX_1 = scrollX.interpolate({
    inputRange: [0, width, width * 2, width * 3],
    // inputRange: [0, SLIDE_W, SLIDE_W * 2, SLIDE_W * 3],
    outputRange: [0, 100, 0, 0],
    extrapolate: 'clamp',
  });

  const imgTranslateX_2 = scrollX.interpolate({
    inputRange: [0, width, width * 2, width * 3],
    // inputRange: [0, SLIDE_W, SLIDE_W * 2, SLIDE_W * 3],
    outputRange: [0, 0, 100, 100],
    extrapolate: 'clamp',
  });

  const imgTranslateX_3 = scrollX.interpolate({
    inputRange: [0, width, width * 2, width * 3],
    // inputRange: [0, SLIDE_W, SLIDE_W * 2, SLIDE_W * 3],
    outputRange: [0, 0, 0, 100],
    extrapolate: 'clamp',
  });

  const imgTranslateX_4 = scrollX.interpolate({
    inputRange: [0, width, width * 2, width * 3],
    // inputRange: [0, SLIDE_W, SLIDE_W * 2, SLIDE_W * 3],
    outputRange: [0, 0, 0, 0],
    extrapolate: 'clamp',
  });

  const imgOpacity_1 = scrollX.interpolate({
    inputRange: [0, width],
    // inputRange: [0, SLIDE_W],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const imgOpacity_2 = scrollX.interpolate({
    inputRange: [0, width, width * 2],
    // inputRange: [0, SLIDE_W, SLIDE_W * 2],
    outputRange: [0, 1, 0],
    extrapolate: 'clamp',
  });

  const imgOpacity_3 = scrollX.interpolate({
    inputRange: [0, width, width * 2, width * 3],
    // inputRange: [0, SLIDE_W, SLIDE_W * 2, SLIDE_W * 3],
    outputRange: [0, 0, 1, 0],
    extrapolate: 'clamp',
  });

  const imgOpacity_4 = scrollX.interpolate({
    inputRange: [0, width, width * 2, width * 3],
    // inputRange: [0, SLIDE_W, SLIDE_W * 2, SLIDE_W * 3],
    outputRange: [0, 0, 0, 1],
    extrapolate: 'clamp',
  });

  const textTranslateY_1 = scrollY.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
    extrapolate: 'clamp',
    // inputRange: [0, width, width * 2, width * 3],
    // // inputRange: [0, SLIDE_W, SLIDE_W * 2, SLIDE_W * 3],
    // outputRange: [0, 0, 0, 100],
    // extrapolate: 'clamp',
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.DEFAULT_WHITE,
        position: 'relative',
      }}>
      {/* <View
        style={{
          height: 100,
          position: 'absolute',
          left: width / 2 - 80,
          zIndex: 3,
          marginTop: inset.top,
          justifyContent: 'center',
        }}>
        <Image
          source={assets.logo_w}
          style={{
            width: 160,
          }}
          resizeMode={'contain'}
        />
      </View> */}

      {/* <ScrollView>
        <View style={{backgroundColor: 'pink', height: 100}}>
          <Text>sdflsfkjlkj</Text>
        </View>
        <View style={{backgroundColor: 'red', height: 100}}>
          <Text>sdflsfkjlkj</Text>
        </View>
        <View style={{backgroundColor: 'blue', height: 100}}>
          <Text>sdflsfkjlkj</Text>
        </View>
      </ScrollView> */}
      <View style={styles.imageWrap}>
        <SwiperFlatList
          onScroll={handleScroll}
          showPagination={false}
          onEndReached={() => {}}
          style={styles.slideImage}
          autoplay
          autoplayDelay={4}
          autoplayLoop
          index={0}>
          <Animated.View
            style={[
              styles.slideImage,
              {
                // opacity: imgOpacity_1,
                transform: [{translateX: imgTranslateX_1}],
                position: 'relative',
              },
            ]}>
            <Image style={styles.slideImage} source={assets.banner_pic} />
            <View style={styles.imageBackground}>
              <Animated.View
                style={{
                  transform: [{translateY: textTranslateY_1}],
                }}>
                <StyledText
                  color="DEFAULT_WHITE"
                  type="contentTitle"
                  style={{marginBottom: 20}}>
                  까르띠에는 최상의 경험을 선사홥니다.
                </StyledText>
                <View style={{alignItems: 'center'}}>
                  <StyledText color="DEFAULT_WHITE" type="contentTitle">
                    174년의 역사를 지닌
                  </StyledText>
                  <StyledText color="DEFAULT_WHITE" type="contentTitle">
                    까르띠에와 함께 특별함을 선물하세요.
                  </StyledText>
                </View>
              </Animated.View>
            </View>
          </Animated.View>
          <Animated.View
            style={[
              styles.slideImage,
              {
                // opacity: imgOpacity_2,
                transform: [{translateX: imgTranslateX_2}],
              },
            ]}>
            <Image style={styles.slideImage} source={assets.banner_hall} />
            <View style={styles.imageBackground}>
              <Animated.View
                style={{
                  transform: [{translateY: textTranslateY_1}],
                }}>
                <StyledText
                  color="DEFAULT_WHITE"
                  type="contentTitle"
                  style={{marginBottom: 20}}>
                  까르띠에는 최상의 경험을 선사홥니다.
                </StyledText>
                <View style={{alignItems: 'center'}}>
                  <StyledText color="DEFAULT_WHITE" type="contentTitle">
                    174년의 역사를 지닌
                  </StyledText>
                  <StyledText color="DEFAULT_WHITE" type="contentTitle">
                    까르띠에와 함께 특별함을 선물하세요.
                  </StyledText>
                </View>
              </Animated.View>
            </View>
          </Animated.View>
          <Animated.View
            style={[
              styles.slideImage,
              {
                // opacity: imgOpacity_3,
                transform: [{translateX: imgTranslateX_3}],
              },
            ]}>
            <Image style={styles.slideImage} source={assets.banner_odyssee} />
            <View style={styles.imageBackground}>
              <Animated.View
                style={{
                  transform: [{translateY: textTranslateY_1}],
                }}>
                <StyledText
                  color="DEFAULT_WHITE"
                  type="contentTitle"
                  style={{marginBottom: 20}}>
                  까르띠에는 최상의 경험을 선사홥니다.
                </StyledText>
                <View style={{alignItems: 'center'}}>
                  <StyledText color="DEFAULT_WHITE" type="contentTitle">
                    174년의 역사를 지닌
                  </StyledText>
                  <StyledText color="DEFAULT_WHITE" type="contentTitle">
                    까르띠에와 함께 특별함을 선물하세요.
                  </StyledText>
                </View>
              </Animated.View>
            </View>
          </Animated.View>
          <Animated.View
            style={[
              styles.slideImage,
              {
                // opacity: imgOpacity_4,
                transform: [{translateX: imgTranslateX_4}],
              },
            ]}>
            <Image style={styles.slideImage} source={assets.banner_2} />
            <View style={styles.imageBackground}>
              <Animated.View
                style={{
                  transform: [{translateY: textTranslateY_1}],
                }}>
                <StyledText
                  color="DEFAULT_WHITE"
                  type="contentTitle"
                  style={{marginBottom: 20}}>
                  까르띠에는 최상의 경험을 선사홥니다.
                </StyledText>
                <View style={{alignItems: 'center'}}>
                  <StyledText color="DEFAULT_WHITE" type="contentTitle">
                    174년의 역사를 지닌
                  </StyledText>
                  <StyledText color="DEFAULT_WHITE" type="contentTitle">
                    까르띠에와 함께 특별함을 선물하세요.
                  </StyledText>
                </View>
              </Animated.View>
            </View>
          </Animated.View>
        </SwiperFlatList>
      </View>
      <View
        style={{
          position: 'absolute',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
          bottom: 0,
          marginBottom: inset.bottom + 20,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeStackNavigator')}
          style={{marginBottom: 20}}>
          <StyledText color="DEFAULT_WHITE" type="contentTitle">
            비회원으로 이용하기
          </StyledText>
        </TouchableOpacity>
        <BigButton
          text="로그인"
          onPress={() => navigation.navigate('SubmitIdPassword')}
        />
      </View>
    </View>
  );
};

export default Login;
