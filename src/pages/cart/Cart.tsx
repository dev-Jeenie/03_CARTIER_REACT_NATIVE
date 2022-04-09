import React from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import assets from '../../../assets';
import StyledText from '../../commons/StyledText';
import CloseButton from '../../components/common/CloseButton';
import {getStorage, setStorage} from '../../libs/AsyncStorageManager';

type cartDataType = {
  id: string;
};

const CART_DATA = 'cart_data';
const Cart = () => {
  const [cartData, setCartData] = React.useState<cartDataType | undefined>();
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
    <ScrollView contentContainerStyle={{backgroundColor: 'pink', flex: 1}}>
      <View>
        {/* {[cartData]?.map(item => (
          <StyledText>{item}</StyledText>
        ))} */}
        <TouchableOpacity
          // onPress={() => onClickToAddCart('id')}
          style={{width: 100, backgroundColor: 'red'}}>
          <StyledText>추가하기</StyledText>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Cart;

export const CartItem = ({id}: {id: string}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image source={assets.juste_r_wg_2} style={{width: 100}} />
      <View style={{backgroundColor: 'red'}}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <StyledText>JUSTE UN CLOU RING</StyledText>
            <StyledText>저스트 앵 끌루 링</StyledText>
          </View>
          <CloseButton onPress={() => {}} />
        </View>
        <View>
          <StyledText>JUSTE UN CLOU RING</StyledText>
          <StyledText>저스트 앵 끌루 링</StyledText>
        </View>
      </View>
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
