import React from 'react';
import {Image} from 'react-native';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import assets from '../../../assets';
import {detailProps} from '../../apis/main';
import StyledText from '../../commons/StyledText';
import theme from '../../commons/theme';
import {useLikedContext} from '../../contexts/LikedProvider';
import {useOrderContext} from '../../contexts/OrderProvider';
import {getStorage} from '../../libs/AsyncStorageManager';
import {cartDataType, CART_DATA} from '../cart/Cart';
import {ListItem} from '../collection/CollectionDetail';
import {DetailItem} from '../purchase/Purchase';

type orderInfo = {
  orderInfo: [{id: string}, {id: string}, {id: string}];
  liked: [{id: string}, {id: string}, {id: string}];
};

type liked = {id: string};

export const LIKE_DATA = 'liked_data';

const Mypage = () => {
  const {orderInfo, setOrderInfo} = useOrderContext();
  const {LikedInfo, setLikedInfo} = useLikedContext();
  // const [orderData, setOrderData] = React.useState<orderInfo | undefined>([]);
  // const [orderData, setOrderData] = React.useState<any>(orderInfo);
  // const [likedData, setLikedData] = React.useState<any>(LikedInfo);
  const [data, setData] = React.useState<{
    userInfo: {name: string};
    orderInfo: {id: string}[];
    likedInfo: {id: string}[];
  }>({
    userInfo: {name: '유저이름'},
    orderInfo: [{id: '주문한 아이디'}],
    likedInfo: [{id: '찜한 아이디'}],
  });
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  const [isOpenLiked, setIsOpenLiked] = React.useState<boolean>(true);
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
    console.log('주문한 목록 :::', typeof orderInfo);
    console.log('주문한 목록 :::', orderInfo);
    // setData(prev => ({...prev}));
    // setData(prev => ({
    //   userInfo: {name: prev.userInfo.name},
    //   orderInfo: [...prev.orderInfo],
    //   likedInfo: [...prev.likedInfo, {id: '새로운 좋아요'}],
    // }));
    // setLikedData(LikedInfo);
    // setOrderData(orderInfo);
  };

  // console.log(likedData);

  React.useEffect(() => {
    initData();
  }, [orderInfo]);

  console.log('orderInfo :::', orderInfo);

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
          {orderInfo?.length < 1 ? (
            <View style={[styles.contents]}>
              <StyledText>아직 주문내역이 없습니다</StyledText>
            </View>
          ) : (
            isOpen && (
              <View style={[styles.contents]}>
                {orderInfo?.map((item: detailProps) => (
                  <DetailItem key={item?.id} {...item} />
                ))}
              </View>
            )
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
                  // justifyContent: 'center',
                  // backgroundColor: 'pink',
                  alignItems: 'center',
                },
              ]}>
              {LikedInfo?.length < 1 ? (
                <View style={[styles.contents]}>
                  <StyledText>아직 주문내역이 없습니다</StyledText>
                </View>
              ) : (
                LikedInfo?.map((item: detailProps) => (
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
};;

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
});
