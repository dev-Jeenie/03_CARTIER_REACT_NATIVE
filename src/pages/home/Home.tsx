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
import {FlatList} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SimpleToast from 'react-native-simple-toast';
import SwiperFlatList from 'react-native-swiper-flatlist';
import assets from '../../../assets';
import StyledText from '../../commons/StyledText';
import theme from '../../commons/theme';
import Section from '../../components/home/Section';

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
    // height: '100%',
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

const Home = () => {
  const navigation = useNavigation<any>();
  const inset = useSafeAreaInsets();

  const scrollX = React.useRef<any>(new Animated.Value(0)).current;
  const scrollY = React.useRef<any>(new Animated.Value(0)).current;

  const [bannerIndex, setBannerIndex] = React.useState(0);

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
    inputRange: [0, 100, 100 * 2, 100 * 3],
    // inputRange: [0, width, width * 2, width * 3],
    // inputRange: [0, SLIDE_W, SLIDE_W * 2, SLIDE_W * 3],
    outputRange: [0, 100, 0, 0],
    extrapolate: 'clamp',
  });

  const imgTranslateX_2 = scrollX.interpolate({
    inputRange: [0, 100, 100 * 2, 100 * 3],
    // inputRange: [0, width, width * 2, width * 3],
    // inputRange: [0, SLIDE_W, SLIDE_W * 2, SLIDE_W * 3],
    outputRange: [0, 0, 100, 100],
    extrapolate: 'clamp',
  });

  const imgTranslateX_3 = scrollX.interpolate({
    inputRange: [0, 100, 100 * 2, 100 * 3],
    // inputRange: [0, width, width * 2, width * 3],
    // inputRange: [0, SLIDE_W, SLIDE_W * 2, SLIDE_W * 3],
    outputRange: [0, 0, 0, 100],
    extrapolate: 'clamp',
  });

  const imgTranslateX_4 = scrollX.interpolate({
    inputRange: [0, 100, 100 * 2, 100 * 3],
    // inputRange: [0, width, width * 2, width * 3],
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
    // <ScrollView style={{backgroundColor: 'pink'}}>
    //   <View>
    //     <Image
    //       source={assets.panthere_thum}
    //       style={{height: 300, width: '100%'}}
    //     />
    //   </View>
    //   <SwiperFlatList
    //     // style={[styles.eventBannerBox, style]}
    //     // onMomentumScrollEnd={(index: any, event: any) => {
    //     //   setBannerIndex(index.index);
    //     // }}
    //     index={0}
    //     // autoplay
    //     // autoplayDelay={2}
    //     // autoplayLoop
    //     showPagination={false}
    //     paginationStyleItemInactive={{backgroundColor: '#fff'}}
    //     paginationStyleItemActive={{backgroundColor: '#474341'}}
    //     // data={[
    //     //   assets.banner_2,
    //     //   assets.banner_hall,
    //     //   assets.banner_odyssee,
    //     //   assets.banner_2,
    //     //   assets.banner_hall,
    //     //   assets.banner_odyssee,
    //     //   assets.banner_2,
    //     //   assets.banner_hall,
    //     //   assets.banner_odyssee,
    //     // ]}
    //     // renderItem={item => {
    //     //   return (
    //     //     <TouchableOpacity
    //     //     // style={[styles.eventBannerImage]}
    //     //     >
    //     //       <Image
    //     //         style={{width: 100, height: 100}}
    //     //         // style={styles.eventBannerImage}
    //     //         source={item}
    //     //       />
    //     //     </TouchableOpacity>
    //     //   );
    //     // }}
    //   >
    //     {/* {[
    //       assets.banner_2,
    //       assets.banner_hall,
    //       assets.banner_odyssee,
    //       assets.banner_2,
    //     ]?.map((v: number, i: number) => {
    //       return (
    //         <Animated.View
    //           style={[
    //             styles.slideImage,
    //             {
    //               opacity: imgOpacity_1,
    //               transform: [{translateX: imgTranslateX_1}],
    //               position: 'relative',
    //             },
    //           ]}>
    //           <TouchableOpacity
    //           // style={[styles.eventBannerImage]}
    //           >
    //             <Image
    //               // style={{width: 100, height: 100}}
    //               // style={styles.eventBannerImage}
    //               source={v}
    //             />
    //           </TouchableOpacity>
    //         </Animated.View>
    //       );
    //     })} */}
    //     {[
    //       assets.panthere_br_yg,
    //       assets.panthere_er_wg,
    //       assets.panthere_r_yg,
    //       assets.thum_panthere_wt,
    //     ]?.map((v: number, i: number) => {
    //       return (
    //         <Animated.View
    //           style={[
    //             styles.slideImage,
    //             {
    //               opacity: imgOpacity_1,
    //               transform: [{translateX: imgTranslateX_1}],
    //               position: 'relative',
    //             },
    //           ]}>
    //           <TouchableOpacity
    //           // style={[styles.eventBannerImage]}
    //           >
    //             <Image
    //               // style={{width: 100, height: 100}}
    //               // style={styles.eventBannerImage}
    //               source={v}
    //             />
    //           </TouchableOpacity>
    //         </Animated.View>
    //       );
    //     })}
    //   </SwiperFlatList>
    // </ScrollView>
    <ScrollView>
      <View>
        <Image
          source={assets.panthere_thum}
          style={{height: 300, width: '100%'}}
        />
      </View>
      {/* <View style={styles.imageWrap}>
        <SwiperFlatList
          onScroll={handleScroll}
          // style={styles.slideImage}
          // autoplay
          // autoplayDelay={3}
          // autoplayLoop
          // index={0}
          showPagination>
          <Animated.View
            style={[
              // styles.slideImage,
              {
                opacity: imgOpacity_1,
                transform: [{translateX: imgTranslateX_1}],
                position: 'relative',
                width: 100,
              },
            ]}>
            <Image source={assets.panthere_br_yg} />
          </Animated.View>
          <Animated.View
            style={[
              // styles.slideImage,
              {
                opacity: imgOpacity_2,
                transform: [{translateX: imgTranslateX_2}],
              },
            ]}>
            <Image
              //  style={styles.slideImage}
              source={assets.panthere_er_wg}
            />
          </Animated.View>
          <Animated.View
            style={[
              // styles.slideImage,
              {
                opacity: imgOpacity_3,
                transform: [{translateX: imgTranslateX_3}],
              },
            ]}>
            <Image
              // style={styles.slideImage}
              source={assets.panthere_r_yg}
            />
          </Animated.View>
          <Animated.View
            style={[
              // styles.slideImage,
              {
                opacity: imgOpacity_4,
                transform: [{translateX: imgTranslateX_4}],
              },
            ]}>
            <Image
              // style={styles.slideImage}
              source={assets.thum_panthere_wt}
            />
          </Animated.View>
        </SwiperFlatList>
      </View> */}
      <View
        style={[theme.styles.globalPaddingHorizontal, {marginVertical: 30}]}>
        <StyledText type="titleEnglish">PANTHÈRE DE CARTIER</StyledText>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <StyledText type="contentTitle">팬더 드 까르띠에 컬렉션</StyledText>
          <StyledText>{'>'}</StyledText>
          {/* <Image source={assets.chevon_right} /> */}
        </TouchableOpacity>
      </View>
      <FlatList
        data={[
          assets.panthere_br_yg,
          assets.panthere_er_wg,
          assets.panthere_r_yg,
          assets.panthere_br_yg,
          assets.panthere_er_wg,
          assets.panthere_r_yg,
        ]}
        // contentContainerStyle={{backgroundColor: 'pink'}}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                SimpleToast.show('상세로 이동');
              }}>
              <Image
                // style={styles.slideImage}
                style={{width: 150, height: 150}}
                source={item}
              />
            </TouchableOpacity>
          );
        }}
      />
      <View
        style={[
          theme.styles.globalPaddingHorizontal,
          {marginVertical: 30, alignItems: 'center', backgroundColor: 'pink'},
        ]}>
        <StyledText type="titleEnglish">CARTIER COLLECTIONS</StyledText>
        <StyledText type="contentTitle">
          까르띠에 컬렉션을 만나보세요
        </StyledText>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'nowrap',
            marginTop: 30,
          }}>
          <Image
            source={assets.thum_panthere_wt}
            style={{width: 100, height: 100}}
            resizeMode="center"
          />
          <Image
            source={assets.thum_trinity_r}
            style={{width: 100, height: 100}}
            resizeMode="center"
          />
          <View style={{flexDirection: 'row'}}>
            <Image
              source={assets.thum_juste_br}
              style={{width: 100, height: 100}}
              resizeMode="center"
            />
            <Image
              source={assets.cartier_panthere_4}
              style={{width: 100, height: 100}}
              resizeMode="center"
            />
          </View>
        </View>
      </View>

      <Section
        title="CARTIER SERVICES"
        description="까르띠에가 제공하는 서비스">
        {/* <View
          style={{
            flexDirection: 'row',
            flexWrap: 'nowrap',
          }}>
          <Image
            source={assets.banner_hall}
            style={{height: 500}}
            resizeMode="contain"
          />
        </View> */}
        <View style={{backgroundColor: 'pink', position: 'relative'}}>
          <View>
            <Animated.View
              style={
                {
                  // opacity: imgOpacity_1
                }
              }>
              <Image
                source={assets.banner_hall}
                style={{height: 500}}
                resizeMode="contain"
              />
            </Animated.View>
            {/* <Animated.View
              style={
                {
                  // opacity: imgOpacity_2
                }
              }>
              <Image
                source={assets.banner_2}
                style={{height: 500}}
                resizeMode="contain"
              />
            </Animated.View> */}
          </View>
          <View style={styles.imageBackground}>
            <View
              style={
                {
                  // opacity: imgOpacity_1,
                  // transform: [{translateY: textTranslateY_1}],
                }
              }>
              <StyledText
                color="DEFAULT_WHITE"
                type="contentTitle"
                style={{marginBottom: 20}}>
                까르띠에는 고객에게 최상의 서비스를 제공할 것을 약속합니다.
              </StyledText>
            </View>
          </View>
        </View>
      </Section>
    </ScrollView>
  );
};

export default Home;
