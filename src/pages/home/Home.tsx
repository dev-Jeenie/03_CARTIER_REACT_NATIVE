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
import assets from '../../../assets';
import StyledText from '../../commons/StyledText';
import theme from '../../commons/theme';

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
    // marginTop: '11%',
  },
  slideImage: {
    width: width,
    // width: SLIDE_W,
    // height: width < 390 ? 476 : 550,
    height: '100%',
    marginLeft: 0.2,
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

const Home: React.FC<LoginProps> = () => {
  const navigation = useNavigation<any>();
  const inset = useSafeAreaInsets();

  // const [isVisible, setIsVisible] = React.useState<boolean>(false);

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

  // const opacity_1 = scrollX.interpolate({
  //   inputRange: [0, SLIDE_W],
  //   outputRange: [1, 0],
  //   extrapolate: 'clamp',
  // });

  // const opacity_2 = scrollX.interpolate({
  //   inputRange: [0, SLIDE_W, SLIDE_W * 2],
  //   outputRange: [0, 1, 0],
  //   extrapolate: 'clamp',
  // });

  // const opacity_3 = scrollX.interpolate({
  //   inputRange: [0, SLIDE_W, SLIDE_W * 2, SLIDE_W * 3],
  //   outputRange: [0, 0, 1, 0],
  //   extrapolate: 'clamp',
  // });

  // const opacity_4 = scrollX.interpolate({
  //   inputRange: [0, SLIDE_W, SLIDE_W * 2, SLIDE_W * 3],
  //   outputRange: [0, 0, 0, 1],
  //   extrapolate: 'clamp',
  // });

  // const translateX_1 = scrollX.interpolate({
  //   inputRange: [0, SLIDE_W],
  //   outputRange: [0, -250],
  //   extrapolate: 'clamp',
  // });

  // const translateX_2 = scrollX.interpolate({
  //   inputRange: [0, SLIDE_W, SLIDE_W * 2],
  //   outputRange: [450, 0, -250],
  //   extrapolate: 'clamp',
  // });

  // const translateX_3 = scrollX.interpolate({
  //   inputRange: [0, SLIDE_W, SLIDE_W * 2, SLIDE_W * 3],
  //   outputRange: [0, 450, 0, -250],
  //   extrapolate: 'clamp',
  // });

  // const translateX_4 = scrollX.interpolate({
  //   inputRange: [0, SLIDE_W, SLIDE_W * 2, SLIDE_W * 3],
  //   outputRange: [0, 0, 450, 0],
  //   extrapolate: 'clamp',
  // });

  // const translateX_5 = scrollX.interpolate({
  //   inputRange: [0, SLIDE_W, SLIDE_W * 2, SLIDE_W * 3],
  //   outputRange: [0, 17, 33, 50],
  //   extrapolate: 'clamp',
  // });

  // const translateX_6 = scrollX.interpolate({
  //   inputRange: [0, SLIDE_W, SLIDE_W * 2, SLIDE_W * 3],
  //   outputRange: [0, -15, -15, -15],
  //   extrapolate: 'clamp',
  // });

  // const translateX_7 = scrollX.interpolate({
  //   inputRange: [0, SLIDE_W, SLIDE_W * 2, SLIDE_W * 3],
  //   outputRange: [0, 0, -15, -15],
  //   extrapolate: 'clamp',
  // });

  // const translateX_8 = scrollX.interpolate({
  //   inputRange: [0, SLIDE_W, SLIDE_W * 2, SLIDE_W * 3],
  //   outputRange: [0, 0, 0, -15],
  //   extrapolate: 'clamp',
  // });

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
    // <ScrollView>
    //   <StyledText>sdlfksdjfsdfdsflkj</StyledText>
    // </ScrollView>
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.DEFAULT_WHITE,
        position: 'relative',
        // paddingTop: inset.top + 10,
      }}>
      {/* <TouchableOpacity
        onPress={() => setIsVisible(!isVisible)}
        style={{zIndex: 3}}>
        <View style={styles.languageBtnBox}>
          <StyledText style={{textAlign: 'center'}}>우측버튼</StyledText>
          <Image style={styles.chevron} source={assets.logo_r} />
        </View>
      </TouchableOpacity> */}

      {/*  */}
      {/* <View
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
      </View> */}
      {/*  */}

      <View style={styles.imageWrap}>
        {/* <View style={{position: 'absolute'}}>
          <Image style={styles.phoneImage} source={assets.logo_r} />
        </View> */}
        {/* <SwiperFlatList
          autoplay
          autoplayDelay={3}
          autoplayLoop
          index={0}
          showPagination
          data={[
            assets.banner_pic,
            assets.banner_hall,
            assets.banner_clash,
            assets.banner_2,
          ]}
          renderItem={({item}) => (
            <Animated.View
              style={[
                styles.slideImage,
                {
                  opacity: imgOpacity_1,
                  transform: [{translateX: imgTranslateX_1}],
                  position: 'relative',
                },
              ]}>
              <Image style={styles.slideImage} source={item} />
              <View style={styles.imageBackground}>
                <Animated.View
                  style={{
                    transform: [{translateY: textTranslateY_1}],
                  }}>
                  <StyledText
                    color="DEFAULT_WHITE"
                    type="contentTitle"
                    style={{marginBottom: 20}}>
                    까르띠에는 최상의 경험을 선사합니다.
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
          )}
        /> */}
        <SwiperFlatList
          onScroll={handleScroll}
          style={styles.slideImage}
          autoplay
          autoplayDelay={3}
          autoplayLoop
          index={0}
          // removeClippedSubviews
          showPagination>
          <Animated.View
            style={[
              styles.slideImage,
              {
                opacity: imgOpacity_1,
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
                opacity: imgOpacity_2,
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
                opacity: imgOpacity_3,
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
                opacity: imgOpacity_4,
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
      {/* <View style={styles.imageWrap}>
      <ImageBackground source={assets.i_phone_x}>
        <Image style={styles.slideImage} source={assets.img_is_play} />
      </ImageBackground>
    </View> */}
    </SafeAreaView>
  );
};

export default Home;
