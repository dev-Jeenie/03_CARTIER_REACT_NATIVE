import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import assets from '../../../assets';
import StyledText from '../../commons/StyledText';
import theme from '../../commons/theme';
import CloseButton from '../../components/common/CloseButton';
import PickerSelect from '../../components/PickerSelect';
import {getStorage, setStorage} from '../../libs/AsyncStorageManager';

type cartDataType = {
  id: string;
};

const CART_DATA = 'cart_data';
const Cart = () => {
  const [cartData, setCartData] = React.useState<cartDataType[] | undefined>(
    [],
  );
  const [size, setSize] = React.useState<string>('55');
  //   {
  //   id: '123',
  // }

  // const initData = () => {
  //   // const res = await getStorage(id);
  //   setCartData(cartData);
  // };

  // const onClickToAddCart = (key: string) => {
  //   console.log();
  //   setStorage(key, cartData);
  // };

  const saveStorage = async () => {
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
  };

  React.useEffect(() => {
    saveStorage();
  }, [cartData]);

  // React.useEffect(() => {
  //   initData();
  // }, []);

  return (
    <ScrollView contentContainerStyle={[theme.styles.globalPaddingVertical30]}>
      <View style={{alignItems: 'center'}}>
        <StyledText type="pageTitle">쇼핑백</StyledText>
      </View>
      <View style={styles.cartBody}>
        <CartItem id={'0'} size={size} setSize={setSize} />
        {/* {cartData &&
          cartData?.map((item: cartDataType) => {
            return <CartItem id={item?.id} size={size} setSize={setSize} />;
          })} */}
      </View>
      <View style={styles.totalWrapper}></View>
    </ScrollView>
  );
};

export default Cart;

export const CartItem = ({
  id,
  size,
  setSize,
}: {
  id: string;
  size: string;
  setSize: any;
}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        source={assets.juste_r_wg_2}
        style={{width: 130}}
        resizeMode="contain"
      />
      <View style={{backgroundColor: 'pink', flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <StyledText>JUSTE UN CLOU RING</StyledText>
            <StyledText>저스트 앵 끌루 링</StyledText>
          </View>
          <TouchableOpacity style={{}} onPress={() => {}}>
            <Image source={assets.icon_close} style={{width: 15, height: 15}} />
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.list}>
            <StyledText>옵션 : 사이즈 (55)</StyledText>
            <PickerSelect
              onValueChange={value => setSize(value)}
              value={size}
              items={[
                {label: '55', value: '55'},
                {label: '56', value: '56'},
                {label: '57', value: '57'},
                {label: '58', value: '58'},
                {label: '59', value: '59'},
                {label: '60', value: '60'},
                {label: '61', value: '61'},
                {label: '62', value: '62'},
                {label: '전화문의', value: 'inquiry'},
              ]}
            />
          </View>
          <View style={styles.list}>
            <StyledText>수량</StyledText>
            <PickerSelect
              onValueChange={value => setSize(value)}
              value={size}
              items={[
                {label: '55', value: '55'},
                {label: '56', value: '56'},
                {label: '57', value: '57'},
                {label: '58', value: '58'},
                {label: '59', value: '59'},
                {label: '60', value: '60'},
                {label: '61', value: '61'},
                {label: '62', value: '62'},
                {label: '전화문의', value: 'inquiry'},
              ]}
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
    backgroundColor: theme.colors.GRAY_100,
    borderTopColor: theme.colors.MAIN_RED,
    borderTopWidth: 3,
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
    justifyContent: 'space-between',
  },
});

// {
//   id: 'br_02',
//   name: '저스트 앵 끌루 팔찌',
//   des: '화이트골드 등',
//   price: '12500000',
//   image: assets.juste_r_wg_2,
// },
