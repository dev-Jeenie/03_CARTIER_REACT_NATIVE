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

const {width} = Dimensions.get('window');
const SLIDE_W = width < 390 ? 223 : 253;
type LoginProps = {};

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
    marginTop: '11%',
  },
  slideImage: {
    width: SLIDE_W,
    height: width < 390 ? 476 : 550,
    marginLeft: 0.2,
    marginBottom: 0.4,
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
    height: 324,
    position: 'absolute',
    zIndex: 2,
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
  loginBtn: {
    width: 335,
    height: 52,
    backgroundColor: theme.colors.DARK_GRAY,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 28,
    marginBottom: 16,
  },
  loginBtnText: {
    color: '#ffff',
    fontSize: 16,
    fontWeight: '500',
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

const Login: React.FC<LoginProps> = () => {
  const navigation = useNavigation<any>();
  const inset = useSafeAreaInsets();

  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  const scrollX = React.useRef<any>(new Animated.Value(0)).current;

  const handleScroll = Animated.event([
    {
      nativeEvent: {
        contentOffset: {
          x: scrollX,
        },
      },
    },
  ]);

  const opacity_1 = scrollX.interpolate({
    inputRange: [0, SLIDE_W],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const opacity_2 = scrollX.interpolate({
    inputRange: [0, SLIDE_W, SLIDE_W * 2],
    outputRange: [0, 1, 0],
    extrapolate: 'clamp',
  });

  const opacity_3 = scrollX.interpolate({
    inputRange: [0, SLIDE_W, SLIDE_W * 2, SLIDE_W * 3],
    outputRange: [0, 0, 1, 0],
    extrapolate: 'clamp',
  });

  const opacity_4 = scrollX.interpolate({
    inputRange: [0, SLIDE_W, SLIDE_W * 2, SLIDE_W * 3],
    outputRange: [0, 0, 0, 1],
    extrapolate: 'clamp',
  });

  const translateX_1 = scrollX.interpolate({
    inputRange: [0, SLIDE_W],
    outputRange: [0, -250],
    extrapolate: 'clamp',
  });

  const translateX_2 = scrollX.interpolate({
    inputRange: [0, SLIDE_W, SLIDE_W * 2],
    outputRange: [450, 0, -250],
    extrapolate: 'clamp',
  });

  const translateX_3 = scrollX.interpolate({
    inputRange: [0, SLIDE_W, SLIDE_W * 2, SLIDE_W * 3],
    outputRange: [0, 450, 0, -250],
    extrapolate: 'clamp',
  });

  const translateX_4 = scrollX.interpolate({
    inputRange: [0, SLIDE_W, SLIDE_W * 2, SLIDE_W * 3],
    outputRange: [0, 0, 450, 0],
    extrapolate: 'clamp',
  });

  const translateX_5 = scrollX.interpolate({
    inputRange: [0, SLIDE_W, SLIDE_W * 2, SLIDE_W * 3],
    outputRange: [0, 17, 33, 50],
    extrapolate: 'clamp',
  });

  const translateX_6 = scrollX.interpolate({
    inputRange: [0, SLIDE_W, SLIDE_W * 2, SLIDE_W * 3],
    outputRange: [0, -15, -15, -15],
    extrapolate: 'clamp',
  });

  const translateX_7 = scrollX.interpolate({
    inputRange: [0, SLIDE_W, SLIDE_W * 2, SLIDE_W * 3],
    outputRange: [0, 0, -15, -15],
    extrapolate: 'clamp',
  });

  const translateX_8 = scrollX.interpolate({
    inputRange: [0, SLIDE_W, SLIDE_W * 2, SLIDE_W * 3],
    outputRange: [0, 0, 0, -15],
    extrapolate: 'clamp',
  });

  const imgTranslateX_1 = scrollX.interpolate({
    inputRange: [0, SLIDE_W, SLIDE_W * 2, SLIDE_W * 3],
    outputRange: [0, 100, 0, 0],
    extrapolate: 'clamp',
  });

  const imgTranslateX_2 = scrollX.interpolate({
    inputRange: [0, SLIDE_W, SLIDE_W * 2, SLIDE_W * 3],
    outputRange: [0, 0, 100, 100],
    extrapolate: 'clamp',
  });

  const imgTranslateX_3 = scrollX.interpolate({
    inputRange: [0, SLIDE_W, SLIDE_W * 2, SLIDE_W * 3],
    outputRange: [0, 0, 0, 100],
    extrapolate: 'clamp',
  });

  const imgTranslateX_4 = scrollX.interpolate({
    inputRange: [0, SLIDE_W, SLIDE_W * 2, SLIDE_W * 3],
    outputRange: [0, 0, 0, 0],
    extrapolate: 'clamp',
  });

  const imgOpacity_1 = scrollX.interpolate({
    inputRange: [0, SLIDE_W],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const imgOpacity_2 = scrollX.interpolate({
    inputRange: [0, SLIDE_W, SLIDE_W * 2],
    outputRange: [0, 1, 0],
    extrapolate: 'clamp',
  });

  const imgOpacity_3 = scrollX.interpolate({
    inputRange: [0, SLIDE_W, SLIDE_W * 2, SLIDE_W * 3],
    outputRange: [0, 0, 1, 0],
    extrapolate: 'clamp',
  });

  const imgOpacity_4 = scrollX.interpolate({
    inputRange: [0, SLIDE_W, SLIDE_W * 2, SLIDE_W * 3],
    outputRange: [0, 0, 0, 1],
    extrapolate: 'clamp',
  });
  return (
    // <ScrollView>
    //   <StyledText>sdlfksdjfsdfdsflkj</StyledText>
    // </ScrollView>
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.DEFAULT_WHITE,
        position: 'relative',
        paddingTop: inset.top + 10,
      }}>
      <TouchableOpacity
        onPress={() => setIsVisible(!isVisible)}
        style={{zIndex: 3}}>
        <View style={styles.languageBtnBox}>
          <StyledText style={{textAlign: 'center'}}>우측버튼</StyledText>
          <Image style={styles.chevron} source={assets.logo_r} />
        </View>
      </TouchableOpacity>

      {/*  */}
      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View>
          <View
            style={{
              position: 'absolute',
              zIndex: -2,
              left: '-42%',
              bottom: 255,
            }}>
            <Image style={styles.round} source={assets.logo_r} />
          </View>
          <View
            style={{
              position: 'absolute',
              zIndex: -2,
              right: '-47%',
              bottom: 5,
              // top: '7%',
            }}>
            <Image style={styles.shape} source={assets.logo_r} />
          </View>
        </View>
      </View>
      {/*  */}

      <View style={styles.imageWrap}>
        <View style={{position: 'absolute'}}>
          <Image style={styles.phoneImage} source={assets.logo_r} />
        </View>
        <SwiperFlatList
          onScroll={handleScroll}
          style={[styles.slideImage]}
          index={0}
          showPagination={false}>
          <Animated.View
            style={[
              styles.slideImage,
              {
                opacity: imgOpacity_1,
                transform: [{translateX: imgTranslateX_1}],
              },
            ]}>
            <Image style={styles.slideImage} source={assets.logo_r} />
          </Animated.View>
          <Animated.View
            style={[
              styles.slideImage,
              {
                opacity: imgOpacity_2,
                transform: [{translateX: imgTranslateX_2}],
              },
            ]}>
            <Image style={styles.slideImage} source={assets.logo_r} />
          </Animated.View>
          <Animated.View
            style={[
              styles.slideImage,
              {
                opacity: imgOpacity_3,
                transform: [{translateX: imgTranslateX_3}],
              },
            ]}>
            <Image style={styles.slideImage} source={assets.logo_r} />
          </Animated.View>
          <Animated.View
            style={[
              styles.slideImage,
              {
                opacity: imgOpacity_4,
                transform: [{translateX: imgTranslateX_4}],
              },
            ]}>
            <Image style={styles.slideImage} source={assets.logo_r} />
          </Animated.View>
        </SwiperFlatList>
      </View>
      {/* <View style={styles.imageWrap}>
      <ImageBackground source={assets.i_phone_x}>
        <Image style={styles.slideImage} source={assets.img_is_play} />
      </ImageBackground>
    </View> */}
      <View
        pointerEvents={'box-none'}
        style={[styles.buttonModalBox, {paddingBottom: inset.bottom}]}>
        <Animated.View
          pointerEvents={'none'}
          style={{
            marginTop: 24,
            alignItems: 'center',
            position: 'absolute',
            paddingHorizontal: 29,
            opacity: opacity_1,
            transform: [{translateX: translateX_1}],
          }}>
          <StyledText
            style={{textAlign: 'center', marginBottom: 12}}
            color="DEFAULT_WHITE">
            1111
          </StyledText>
          <StyledText style={{textAlign: 'center'}} color="DEFAULT_WHITE">
            1111
          </StyledText>
        </Animated.View>
        <Animated.View
          pointerEvents={'none'}
          style={{
            marginTop: 24,
            alignItems: 'center',
            position: 'absolute',
            paddingHorizontal: 29,
            opacity: opacity_2,
            transform: [{translateX: translateX_2}],
          }}>
          <StyledText
            style={{textAlign: 'center', marginBottom: 12}}
            color="DEFAULT_WHITE">
            2222
          </StyledText>
          <StyledText style={{textAlign: 'center'}} color="DEFAULT_WHITE">
            2222
          </StyledText>
        </Animated.View>
        <Animated.View
          pointerEvents={'none'}
          style={{
            marginTop: 24,
            alignItems: 'center',
            position: 'absolute',
            paddingHorizontal: 29,
            opacity: opacity_3,
            transform: [{translateX: translateX_3}],
          }}>
          <StyledText
            style={{textAlign: 'center', marginBottom: 12}}
            color="DEFAULT_WHITE">
            3333
          </StyledText>
          <StyledText style={{textAlign: 'center'}} color="DEFAULT_WHITE">
            3333
          </StyledText>
        </Animated.View>
        <Animated.View
          pointerEvents={'none'}
          style={{
            marginTop: 24,
            alignItems: 'center',
            position: 'absolute',
            paddingHorizontal: 29,
            opacity: opacity_4,
            transform: [{translateX: translateX_4}],
          }}>
          <StyledText
            style={{textAlign: 'center', marginBottom: 12}}
            color="DEFAULT_WHITE">
            4444
          </StyledText>
          <StyledText style={{textAlign: 'center'}} color="DEFAULT_WHITE">
            4444
          </StyledText>
        </Animated.View>
        <View style={{flexDirection: 'row', marginTop: 185}}>
          <Animated.View
            style={{
              transform: [{translateX: translateX_5}],
              height: 6,
              width: 6,
              backgroundColor: theme.colors.DARK_GRAY,
              marginHorizontal: 5,
              borderRadius: 5,
            }}
          />
          <Animated.View
            style={{
              transform: [{translateX: translateX_6}],
              height: 6,
              width: 6,
              backgroundColor: theme.colors.DARK_GRAY,
              marginHorizontal: 5,
              borderRadius: 5,
              opacity: 0.3,
            }}
          />
          <Animated.View
            style={{
              transform: [{translateX: translateX_7}],
              height: 6,
              width: 6,
              backgroundColor: theme.colors.DARK_GRAY,
              marginHorizontal: 5,
              borderRadius: 5,
              opacity: 0.3,
            }}
          />
          <Animated.View
            style={{
              transform: [{translateX: translateX_8}],
              height: 6,
              width: 6,
              backgroundColor: theme.colors.DARK_GRAY,
              marginHorizontal: 5,
              borderRadius: 5,
              opacity: 0.3,
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate('SubmitPhoneNumber')}>
          <Text style={styles.loginBtnText}>버튼</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeStackNavigator')}>
          <Text style={styles.subText}>이건뭐지</Text>
          <View style={styles.subTextBorder}></View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
