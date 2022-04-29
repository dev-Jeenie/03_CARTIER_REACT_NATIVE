import axios, {AxiosError} from 'axios';
import React from 'react';
import {Alert, Image} from 'react-native';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import Config from 'react-native-config';
import EncryptedStorage from 'react-native-encrypted-storage';
import SimpleToast from 'react-native-simple-toast';
import {useSelector} from 'react-redux';
import assets from '../../../assets';
import {detailProps} from '../../apis/main';
import StyledText from '../../commons/StyledText';
import theme from '../../commons/theme';
import {useLikedContext} from '../../contexts/LikedProvider';
import {useOrderContext} from '../../contexts/OrderProvider';
import {getStorage, setStorage} from '../../libs/AsyncStorageManager';
import userSlice from '../../slices/user';
import {useAppDispatch} from '../../store';
import {Rootstate} from '../../store/reducer';
import {cartDataType, CART_DATA} from '../cart/Cart';
import {ListItem} from '../collection/CollectionDetail';
import {DetailItem} from '../purchase/PurchaseComplete';

type orderInfo = {
  orderInfo: [{id: string}, {id: string}, {id: string}];
  liked: [{id: string}, {id: string}, {id: string}];
};

type liked = {id: string};

export const LIKE_DATA = 'liked_data';

const Mypage = () => {
  const accessToken = useSelector((state: Rootstate) => state.user.accessToken);
  const user_name = useSelector((state: Rootstate) => state.user.name);
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  const [isOpenLiked, setIsOpenLiked] = React.useState<boolean>(true);
  const [orderedData, setOrderedData] = React.useState<detailProps[]>([]);
  const [likedData, setLikedData] = React.useState<detailProps[]>([]);

  const onLogout = React.useCallback(async () => {
    try {
      await axios.post(
        `${Config.API_URL}/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      Alert.alert('알림', '로그아웃 되었습니다.');
      dispatch(
        userSlice.actions.setUser({
          name: '',
          email: '',
          accessToken: '',
        }),
      );
      await EncryptedStorage.removeItem('refreshToken');
    } catch (error) {
      const errorResponse = (error as AxiosError).response;
      console.error(errorResponse);
    }
  }, [accessToken, dispatch]);
  // const scrollY = React.useRef<any>(new Animated.Value(0)).current;

  // const translateY_1 = scrollY.interpolate({
  //   inputRange: [0, 100],
  //   // inputRange: [0, SLIDE_W, SLIDE_W * 2, SLIDE_W * 3],
  //   outputRange: [0, 100],
  //   extrapolate: 'clamp',
  // });

  // const translateY_2 = scrollY.interpolate({
  //   inputRange: [0, 200],
  //   // inputRange: [0, SLIDE_W, SLIDE_W * 2, SLIDE_W * 3],
  //   outputRange: [0, 200],
  //   extrapolate: 'clamp',
  // });
  // const [headerHeight, setHeaderHeight] = React.useState(0);

  // const translateY = scrollY.interpolate({
  //   inputRange: [-220, 0, headerHeight],
  //   outputRange: [220, 0, -headerHeight],
  //   extrapolate: 'clamp',
  // });

  // 주문한 내역은 orderProvider에서 가져올 것

  const initData = async () => {
    // const res = await setTimeout(() => {
    //   return {
    //     orderInfo: [{id: '1'}, {id: '2'}, {id: '3'}],
    //     liked: [{id: '4'}, {id: '5'}, {id: '6'}],
    //   };
    // }, 1000);
    // res && setData(res);
    // const likedRes = await getStorage(LIKE_DATA);
    // const res = await getStorage(LIKE_DATA);
    // console.log('좋아요한 목록 :::', JSON?.parse(likedRes));
    // setData(prev => ({...prev}));
    // setData(prev => ({
    //   userInfo: {name: prev.userInfo.name},
    //   orderInfo: [...prev.orderInfo],
    //   likedInfo: [...prev.likedInfo, {id: '새로운 좋아요'}],
    // }));
    // setLikedData(LikedInfo);
    // setOrderData(orderInfo);
    const res_order = await getStorage('order_data');
    const res_like = await getStorage(LIKE_DATA);
    console.log('초기데이터!!!!!!!!!!!!!', res_like);
    setOrderedData(JSON.parse(res_order));
    setLikedData(JSON.parse(res_like));
  };

  console.log('주문내역', orderedData);
  console.log('좋아요한 내역', likedData);
  React.useEffect(() => {
    initData();
  }, []);

  const onDeleteOrderedData = async () => {
    setOrderedData([]),
      await setStorage('order_data', JSON.stringify([])),
      SimpleToast.show('주문내역을 모두 삭제했습니다.');
  };

  // console.log('orderInfo :::', orderInfo);

  // const onDelete = async (id: string) => {
  //   const arr = cartData?.map((v: any, i: number) => {
  //     if (v?.id != id) {
  //       // if (v?.id != ids) {
  //       return v;
  //     } else {
  //       return;
  //     }
  //   });
  //   const newArr = arr.filter((v: any) => v);
  //   setCartData(newArr);
  //   await setStorage('cart_data', JSON.stringify(newArr));
  //   SimpleToast.show(`${id}를 내 쇼핑백에서 삭제했습니다.`);
  // };

  return (
    <ScrollView contentContainerStyle={[theme.styles.globalPaddingVertical30]}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <StyledText type="pageTitle">내 계정</StyledText>
      </View>
      <View style={styles.bodyWrapper}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <StyledText type="h3_BOLD">
            <StyledText type="h3_BOLD" isBold>
              {user_name || '--'}
            </StyledText>{' '}
            님, 안녕하세요.
          </StyledText>
          <TouchableOpacity onPress={onLogout} style={[styles.grayButton]}>
            <StyledText>로그아웃</StyledText>
          </TouchableOpacity>
        </View>
        <View style={styles.listWrapper}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              // backgroundColor: 'pink',
            }}
            onPress={() => {
              setIsOpen(!isOpen);
            }}>
            <StyledText type="contentTitle" style={{marginVertical: 10}}>
              주문내역
            </StyledText>
            <Image
              source={assets.icon_ChevronDown}
              style={[
                {width: 25, height: 25},
                isOpen && {transform: [{rotate: '180deg'}]},
              ]}
            />
          </TouchableOpacity>
          {orderedData?.length < 1 ? (
            <View style={styles.empty}>
              <StyledText type="contentTitle" color="GRAY_200">
                아직 주문한 상품이 없습니다
              </StyledText>
            </View>
          ) : (
            <>
              {isOpen && (
                <View style={[styles.contents]}>
                  {orderedData?.map((item: detailProps) => (
                    <DetailItem
                      key={item?.id}
                      {...item}
                      images={item?.images}
                    />
                  ))}
                </View>
              )}
              <TouchableOpacity
                onPress={() => onDeleteOrderedData()}
                style={styles.grayButton}>
                <StyledText>주문내역 모두 삭제하기</StyledText>
              </TouchableOpacity>
            </>
          )}
        </View>
        <View style={styles.listWrapper}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              // backgroundColor: 'pink',
            }}
            onPress={() => {
              setIsOpenLiked(!isOpenLiked);
            }}>
            <StyledText type="contentTitle" style={{marginVertical: 10}}>
              찜한 상품
            </StyledText>
            <Image
              source={assets.icon_ChevronDown}
              style={[
                {width: 25, height: 25},
                isOpenLiked && {transform: [{rotate: '180deg'}]},
              ]}
            />
          </TouchableOpacity>
          {isOpenLiked && (
            <View
              style={[
                styles.contents,
                {
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  // justifyContent: 'center',
                },
              ]}>
              {/* {LikedInfo?.length < 1 ? (
                <View style={[styles.contents]}>
                  <StyledText>아직 주문내역이 없습니다</StyledText>
                </View>
              ) : (
                LikedInfo?.map((item: detailProps) => (
                  <ListItem key={item?.id} {...item} />
                ))
              )} */}
              {likedData?.length < 1 ? (
                <View style={styles.empty}>
                  <StyledText type="contentTitle" color="GRAY_200">
                    아직 찜한 내역이 없습니다
                  </StyledText>
                </View>
              ) : (
                likedData?.map((item: detailProps) => (
                  <ListItem key={item?.id} {...item} />
                ))
              )}
            </View>
          )}
          <View>
            {/* {likedData?.map((item: cartDataType, index: number) => {
            return (
              <CartItem
                key={index}
                {...item}
                // onDelete={() => onDelete(item?.id)}

                // size={size}
                // setSize={setSize}
                // count={count}
                // setCount={setCount}
                // onCountUp={() => onCountUp()}
                // onCountDown={() => onCountDown()}
              />
            );
          })} */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Mypage;

const styles = StyleSheet.create({
  contents: {
    alignItems: 'center',
  },
  bodyWrapper: {
    ...theme.styles.globalPaddingVertical,
    ...theme.styles.globalPaddingHorizontal,
    // backgroundColor: 'pink',
  },
  listWrapper: {
    marginBottom: 20,
    // alignItems: 'center',
    // ...theme.styles.globalPaddingHorizontal,
  },
  empty: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  grayButton: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.GRAY_300,
    marginVertical: 10,
    paddingHorizontal: 30,
  },
});
