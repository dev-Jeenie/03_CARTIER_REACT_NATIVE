import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {Dispatch, SetStateAction} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import SimpleToast from 'react-native-simple-toast';
import assets from '../../../assets';
import {detailProps} from '../../apis/main';
import StyledText from '../../commons/StyledText';
import theme from '../../commons/theme';
import BigButton from '../../components/common/BigButton';
import CloseButton from '../../components/common/CloseButton';
import PickerSelect from '../../components/PickerSelect';
import {useOrderContext} from '../../contexts/OrderProvider';
import {getStorage, setStorage} from '../../libs/AsyncStorageManager';
import {HomeStackParamList} from '../../nav/AppContainer';

export type cartDataType = {
  id: string;
  size: string;
} & detailProps;

export const CART_DATA = 'cart_data';

const Cart = () => {
  const [cartData, setCartData] = React.useState<cartDataType[]>([]);
  const {orderInfo, setOrderInfo} = useOrderContext();
  const [totalPrice, setTotalPrice] = React.useState<number>(0);
  const initData = async () => {
    const res = await getStorage(CART_DATA);
    console.log('장바구니의 데이터 res :::::', JSON.parse(res));
    setCartData(JSON.parse(res));
  };
  const {navigate} = useNavigation<StackNavigationProp<HomeStackParamList>>();
  // console.log('cartData :::::', cartData);

  const onDelete = async (id: string) => {
    const arr = cartData?.map((v: any, i: number) => {
      if (v?.id != id) {
        // if (v?.id != ids) {
        return v;
      } else {
        return;
      }
    });
    const newArr = arr.filter((v: any) => v);
    setCartData(newArr);
    await setStorage('cart_data', JSON.stringify(newArr));
    SimpleToast.show(`${id}를 내 쇼핑백에서 삭제했습니다.`);
  };

  // cart_data는 그냥 asyncStorage로 관리할 거고
  // orderInfo는 Context가 들고있는 상태값으로 관리할 것.

  const onPressOrder = () => {
    if (cartData?.length < 1) {
      return SimpleToast.show('장바구니에 담긴 상품이 없습니다.');
    }
    setOrderInfo({
      user_name: undefined,
      payMethod: undefined,
      totalPrice: undefined,
      products: [...cartData],
    }),
      navigate('Purchase');
    // setOrderInfo(cartData), navigate('Purchase');
    // 1. 주문하기 버튼을 누르면
    // 2. setOrderInfo로 현재 cart에 담긴 데이터를 넘겨주고,
    // 3. 결제하기 페이지에서는 orderInfo로 데이터를 불러오고,
    // 4. 마지막에 최종 결제하기 버튼을 누르면
    // 5. purchase 페이지로 넘어가면서 setStorage로 현재의 orderInfo를 넘겨준다
  };;

  const saveStorage = async () => {
    // await setStorage('cart_data', JSON.stringify([cartData]));
    SimpleToast.show(
      '구매하기 Context 안의 스토리지에 갯수, 사이즈 저장 후 결제 페이지로 이동',
    );
    // const result = await getStorage(CART_DATA);
    // console.log(result && 'result ::::', result);
    // result && setCartData(result);
    // if (result) {
    //   const store = JSON.parse(result);
    //   const arr = store?.map((v: cartDataType, i: number) => {
    //     // if (i > 14) return;
    //     if (v?.id != cartData?.id) {
    //       return v;
    //     }
    //   });
    //   const newArr = arr.filter((v: cartDataType) => v);
    //   console.log('arr, newArr ::::', arr, newArr);
    //   await setStorage(CART_DATA, JSON.stringify([cartData, ...newArr]));
    // } else {
    // await setStorage(CART_DATA, JSON.stringify([cartData]));
    // }
    navigate('PurchaseComplete');
  };

  // React.useEffect(() => {
  //   saveStorage();
  // }, [cartData]);

  React.useEffect(() => {
    initData();
  }, []);

  const _renderOrderId = React.useMemo(() => {
    return Date.now();
  }, [cartData]);

  return (
    <ScrollView
      // contentContainerStyle={[theme.styles.globalPaddingVertical30]}
      contentContainerStyle={{
        paddingTop: 30,
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          // backgroundColor: 'pink'
        }}>
        <View style={{alignItems: 'center', marginBottom: 30}}>
          <StyledText type="pageTitle">쇼핑백</StyledText>
        </View>
        <View style={styles.cartBody}>
          {cartData?.length < 1 ? (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 100,
              }}>
              <StyledText type="contentTitle" color="GRAY_200">
                아직 추가된 상품이 없습니다
              </StyledText>
            </View>
          ) : (
            cartData?.map((item: cartDataType, index: number) => {
              return (
                <CartItem
                  key={index}
                  {...item}
                  setTotalPrice={setTotalPrice}
                  onDelete={() => onDelete(item?.id)}

                  // size={size}
                  // setSize={setSize}
                  // count={count}
                  // setCount={setCount}
                  // onCountUp={() => onCountUp()}
                  // onCountDown={() => onCountDown()}
                />
              );
            })
          )}
        </View>
      </View>
      <View style={[styles.totalWrapper]}>
        <StyledText type="h3_BOLD" isBold style={{marginBottom: 20}}>
          주문정보
        </StyledText>
        <View style={styles.totalList}>
          <StyledText color="GRAY_100">주문번호</StyledText>
          <StyledText type="h4_normal">
            {cartData?.length > 0 ? _renderOrderId : 0}
          </StyledText>
        </View>
        <View>
          <View style={styles.totalList}>
            <StyledText color="GRAY_100">합계(세금 포함)</StyledText>
            <StyledText type="h4_normal">
              {cartData?.length > 0 ? totalPrice : '0'} 원
            </StyledText>
          </View>
          <View style={styles.totalList}>
            <StyledText color="GRAY_100">기타(선물 포장 등)</StyledText>
            <StyledText type="h4_normal">0 원</StyledText>
          </View>
          <View style={styles.totalList}>
            <StyledText color="GRAY_100">총 주문금액</StyledText>
            <StyledText type="h4_normal">
              {cartData?.length > 0 ? totalPrice?.toLocaleString() : '0'} 원
            </StyledText>
          </View>
        </View>
        <BigButton text="주문하기" onPress={() => onPressOrder()} />
      </View>
    </ScrollView>
  );
};;

export default Cart;

export const CartItem = ({
  id,
  images,
  en_name,
  name,
  size,
  price,
  setTotalPrice,
  onDelete,
}: // setSize,
// count,
// setCount,
// onCountUp,
// onCountDown,
{
  id: string;
  size: string;
  setTotalPrice: Dispatch<SetStateAction<number>>;
  onDelete: any;
  // onDelete: (id: string) => void;
  // setSize: Dispatch<SetStateAction<string>>;
  // count: number;
  // setCount: Dispatch<SetStateAction<number>>;
  // onCountUp: () => void;
  // onCountDown: () => void;
} & detailProps) => {
  const [sizeState, setSizeState] = React.useState(size);
  const [count, setCount] = React.useState<number>(1);

  React.useEffect(() => {
    setTotalPrice(prev => count * price);
  }, [count]);

  const onCountUp = () => {
    if (count === 9) {
      return SimpleToast.show('9개까지 주문 가능합니다.');
    } else {
      setCount(prev => prev + 1);
      setTotalPrice(prev => count * price);
    }
  };
  const onCountDown = () => {
    if (count === 1) {
      return SimpleToast.show('최소 주문 수량은 1개입니다.');
    } else {
      setCount(prev => prev - 1);
      setTotalPrice(prev => count * price);
    }
  };

  // console.log('count * price =======', count * price);

  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.GRAY_300,
        paddingVertical: 20,
      }}>
      <Image
        source={images?.length > 0 ? images[0] : assets.juste_r_wg_2}
        style={{
          width: 130,
          height: 130,
          marginRight: 15,
        }}
        resizeMode="contain"
      />
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}>
          <View
            style={{
              flex: 1,
            }}>
            <StyledText
              type="h3_BOLD"
              lineBreakMode="tail"
              numberOfLines={2}
              style={{}}>
              {id || '--'}
              {en_name}
            </StyledText>
            <StyledText type="h3_BOLD">{name}</StyledText>
          </View>
          <TouchableOpacity onPress={onDelete}>
            <Image source={assets.icon_close} style={{width: 15, height: 15}} />
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.list}>
            <StyledText color="GRAY_200">
              옵션 : 사이즈 ({sizeState})
            </StyledText>
            <PickerSelect
              onValueChange={value => setSizeState(value)}
              value={sizeState}
              isSmall
              items={[
                {label: '55', value: '55'},
                {label: '56', value: '56'},
                {label: '57', value: '57'},
                {label: '58', value: '58'},
                {label: '59', value: '59'},
                {label: '60', value: '60'},
                {label: '61', value: '61'},
                {label: '62', value: '62'},
                {label: '전화문의', value: 'A'},
              ]}
            />
          </View>
          <View style={styles.list}>
            <StyledText color="GRAY_200">수량</StyledText>
            <CountBox
              count={count}
              onCountUp={onCountUp}
              onCountDown={onCountDown}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartBody: {
    paddingHorizontal: 20,
  },
  totalWrapper: {
    backgroundColor: theme.colors.GRAY_300,
    borderTopColor: theme.colors.MAIN_RED,
    borderTopWidth: 3,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  totalList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});

export const CountBox = ({
  count,
  onCountUp,
  onCountDown,
}: {
  count: number;
  onCountUp: () => void;
  onCountDown: () => void;
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: theme.colors.GRAY_200,
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: 100,
      }}>
      <TouchableOpacity onPress={onCountDown}>
        <Image
          source={assets.icon_ChevronLeft}
          style={{
            width: 15,
            height: 15,
          }}
        />
      </TouchableOpacity>
      <StyledText>{count}</StyledText>
      <TouchableOpacity onPress={onCountUp}>
        <Image
          source={assets.icon_ChevronLeft}
          style={{
            width: 15,

            height: 15,
            transform: [{rotate: '180deg'}],
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

// {
//   id: 'br_02',
//   name: '저스트 앵 끌루 팔찌',
//   des: '화이트골드 등',
//   price: '12500000',
//   image: assets.juste_r_wg_2,
// },

// name: string;
// en_name: string;
// des: string;
// price: number;
// images: ImageSourcePropType[];
// info: string;
