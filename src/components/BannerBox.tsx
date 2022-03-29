import * as React from 'react';
import assets from '../../assets';
import theme from '../commons/theme';
import MVText from 'components/common/MVText';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
  Animated,
} from 'react-native';
import {BannerBoxType} from '#types/banner';
import {getFileAPI} from '#apis/index';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modalbox';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BackBtn from 'components/common/BackBtn';
import Loading from 'components/Loading';

const {width} = Dimensions.get('window');

type BannerBoxProps = {
  style?: any;
  isDetail?: boolean;
  isKorea?: boolean;
  data?: BannerBoxType[];
  detail_imgs?: number[];
  onPress?: any;
};
const BannerBox: React.FC<BannerBoxProps> = ({
  style,
  isDetail = false,
  isKorea = false,
  data = [],
  detail_imgs,
  onPress,
}) => {
  const inset = useSafeAreaInsets();
  const navigation = useNavigation<any>();
  const [bannerIndex, setBannerIndex] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState<any>(false);
  const [isLoading, setisLoading] = React.useState(true);

  const scrollViewRefX = React.useRef<any>();

  const onChangeSwiper = (nativeEvent: any) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if ((detail_imgs?.length - 1 ?? 0) === bannerIndex) {
      } else {
        setBannerIndex(slide);
      }
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        scrollViewRefX.current?.scrollTo({
          x: width * bannerIndex,
          useNativeDriver: true,
        });
      }, 500);
      setTimeout(() => {
        setisLoading(false);
      }, 1000);
    } else {
      setTimeout(() => {
        setisLoading(true);
      }, 1000);
    }
  }, [isOpen]);

  if (isKorea) {
    return data?.map((v: BannerBoxType, i: number) => {
      if (i > 0) return;
      return (
        <TouchableOpacity onPress={onPress}>
          <Image
            style={styles.eventBox}
            source={{uri: getFileAPI() + v?.imgs?.[0]}}
          />
        </TouchableOpacity>
      );
    });
  }

  if (isDetail) {
    return (
      <View style={[styles.eventBannerBox, style]}>
        {detail_imgs?.length === 0 ? (
          <TouchableOpacity style={[styles.eventBannerImage]}>
            <Image
              style={styles.eventBannerImage}
              source={assets.img_default}
            />
          </TouchableOpacity>
        ) : (
          <>
            <SwiperFlatList
              style={[styles.eventBannerBox, style]}
              onMomentumScrollEnd={(index: any, event: any) => {
                setBannerIndex(index.index);
              }}
              index={0}
              showPagination={false}
              paginationStyleItemInactive={{backgroundColor: '#fff'}}
              paginationStyleItemActive={{backgroundColor: '#474341'}}>
              {detail_imgs?.map((v: number, i: number) => {
                return (
                  <TouchableOpacity style={[styles.eventBannerImage]}>
                    <Image
                      style={styles.eventBannerImage}
                      source={{uri: getFileAPI() + v}}
                    />
                  </TouchableOpacity>
                );
              })}
            </SwiperFlatList>
            <TouchableOpacity
              onPress={() => setIsOpen(!isOpen)}
              style={[
                styles.slideCount,
                {
                  left: 279,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              ]}>
              <MVText type="BODY_3_MEDIUM" color="defaultBackground">
                {bannerIndex + 1}/{data?.length} +
              </MVText>
            </TouchableOpacity>
          </>
        )}
        <Modal
          style={styles.modalStyles}
          position="bottom"
          swipeArea={60}
          coverScreen={true}
          isOpen={isOpen}>
          {isLoading && (
            <Loading
              boxStyles={{
                backgroundColor: theme.colors.defaultBackground,
                position: 'absolute',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 10000,
              }}
            />
          )}
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              zIndex: 1,
              top: inset.top + 20,
              left: 20,
            }}>
            <BackBtn
              style={{
                backgroundColor: theme.colors.grayScale100,
              }}
              isCloseBtn
              onPress={() => {
                setIsOpen(false);
              }}
            />
          </View>
          <Animated.ScrollView
            ref={scrollViewRefX}
            contentContainerStyle={{flexGrow: 1}}
            onScroll={({nativeEvent}: any) => onChangeSwiper(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal>
            {detail_imgs?.map((v, i) => {
              return (
                <TouchableOpacity
                  style={{
                    width,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Animated.Image
                    source={{uri: getFileAPI() + v}}
                    style={[styles.eventBannerImage, {width}]}
                  />
                </TouchableOpacity>
              );
            })}
          </Animated.ScrollView>
        </Modal>
      </View>
    );
  }
  return (
    <>
      <View style={[styles.eventBannerBox, style]}>
        <SwiperFlatList
          style={[styles.eventBannerBox, style]}
          onMomentumScrollEnd={(index: any, event: any) => {
            setBannerIndex(index.index);
          }}
          index={0}
          showPagination={false}
          paginationStyleItemInactive={{backgroundColor: '#fff'}}
          paginationStyleItemActive={{backgroundColor: '#474341'}}>
          {data?.map((v: BannerBoxType, i: number) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('WebView', {
                    uri: v?.url_link,
                  });
                }}
                style={[styles.eventBannerImage]}>
                <Image
                  style={styles.eventBannerImage}
                  source={{uri: getFileAPI() + v?.imgs?.[0]}}
                />
              </TouchableOpacity>
            );
          })}
        </SwiperFlatList>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MoreViewList', {
              type: 'banner',
              // position: ''
            });
          }}
          style={styles.slideCount}>
          <MVText type="BODY_3_MEDIUM" color="defaultBackground">
            {bannerIndex + 1}/{data?.length} +
          </MVText>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default BannerBox;

const styles = StyleSheet.create({
  eventBannerBox: {
    borderRadius: 12,
    overflow: 'hidden',
    height: 200,
    width: width - 40,
  },
  eventBannerImage: {
    height: 200,
    width: width - 40,
  },
  detailBannerBox: {
    backgroundColor: theme.colors.grayScale400,
    paddingLeft: 24,
    paddingTop: 32,
    paddingBottom: 20,
    position: 'relative',
    borderRadius: 12,
    height: 201,
  },
  eventBoxText: {
    zIndex: 1,
  },
  eventBoxImage: {
    position: 'absolute',
    bottom: -10,
    right: 10,
    width: 164,
    height: 213,
  },
  eventBox: {
    backgroundColor: theme.colors.grayScale300,
    marginHorizontal: 20,
    height: 125,
    marginTop: 40,
    borderRadius: 12,
  },
  slideCount: {
    flexDirection: 'row',
    position: 'absolute',
    left: 24,
    top: 150,
    backgroundColor: '#0001',
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  modalStyles: {
    alignItems: 'center',
    height: '100%',
  },
});
