import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SimpleToast from 'react-native-simple-toast';
import assets from '../../../assets';
import {detailProps} from '../../apis/main';
import StyledText from '../../commons/StyledText';
import theme from '../../commons/theme';
import BigButton from '../../components/common/BigButton';
import {useOrderContext} from '../../contexts/OrderProvider';
import {getStorage, setStorage} from '../../libs/AsyncStorageManager';
import {HomeStackParamList} from '../../nav/AppContainer';

type paymentType = 'apple' | 'google' | 'kakao' | 'naver';

const paymentMap: {[key: string]: string} = {
  apple: '애플페이',
  google: '구글페이',
  kakao: '카카오페이',
  naver: '네이버페이',
};

const Purchase = () => {
  const [data, setData] = React.useState([]);
  const insets = useSafeAreaInsets();
  const user_name = 'Jeenie';
  const {orderInfo, setOrderInfo} = useOrderContext();
  const {navigate, push} =
    useNavigation<StackNavigationProp<HomeStackParamList>>();
  const [payMethod, setPayMethod] = React.useState<paymentType>('apple');
  const [isLoading, setIsLoading] = React.useState(false);
  // const priceArr = orderInfo?.map(item => item?.price);
  // console.log('가격 배열', priceArr);
  // const totalPrice = orderInfo
  //   ?.reduce((prev, curr) => prev + curr.price, 0)
  //   ?.toLocaleString();
  // console.log('result결과', totalPrice);
  const totalPrice = orderInfo?.products
    ?.reduce((prev, curr) => prev + curr.price, 0)
    ?.toLocaleString();
  console.log('result결과', totalPrice);
  console.log('orderInfo', orderInfo);
  const initData = async () => {};

  React.useEffect(() => {
    initData();
  }, []);

  const onPressToPay = async () => {
    setOrderInfo({
      user_name: user_name,
      payMethod: paymentMap[payMethod],
      totalPrice: totalPrice,
      products: orderInfo?.products,
    });
    await setStorage('order_data', JSON.stringify(orderInfo?.products));
    push('PurchaseComplete'), SimpleToast.show('결제가 완료되었습니다.');
  };
  console.log('adsdsa', orderInfo?.products);

  const PaymentIcon = ({
    icon,
    text,
    isSelected,
    onPress,
  }: {
    icon: ImageSourcePropType;
    text: string;
    isSelected: any;
    onPress: () => void;
  }) => {
    return (
      <>
        <TouchableOpacity
          onPress={onPress}
          style={[
            {
              alignItems: 'center',
              paddingVertical: 10,
              paddingHorizontal: 10,
              borderColor: theme.colors.GRAY_300,
              borderWidth: 1,
              borderRadius: 5,
            },
            isSelected && {borderColor: theme.colors.MAIN_RED},
          ]}>
          <Image source={icon} style={{width: 90, height: 90}} />
          <StyledText>{text}</StyledText>
          {!isSelected && (
            <View
              style={{
                backgroundColor: 'rgba(255,255,255,0.65)',
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              }}
            />
          )}
        </TouchableOpacity>
      </>
    );
  };

  return (
    <ScrollView>
      <View style={styles.infoWrapper}>
        <View style={styles.infoBody}>
          {orderInfo?.products?.map(item => (
            <PurchaseItem {...item} key={item?.id} />
          ))}
        </View>
        <View
          style={{
            paddingHorizontal: 20,
          }}>
          <StyledText type="contentTitle">결제수단을 선택하세요</StyledText>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginVertical: 20,
            }}>
            <PaymentIcon
              icon={assets.apple_pay}
              text="애플페이"
              onPress={() => setPayMethod('apple')}
              isSelected={payMethod === 'apple'}
            />
            <PaymentIcon
              icon={assets.google_pay}
              text="구글페이"
              onPress={() => setPayMethod('google')}
              isSelected={payMethod === 'google'}
            />
            <PaymentIcon
              icon={assets.kakaopay}
              text="카카오페이"
              onPress={() => setPayMethod('kakao')}
              isSelected={payMethod === 'kakao'}
            />
            <PaymentIcon
              icon={assets.naverpay}
              text="네이버페이"
              onPress={() => setPayMethod('naver')}
              isSelected={payMethod === 'naver'}
            />
          </View>
        </View>
      </View>
      {/* <View
        style={{
          backgroundColor: theme.colors.GRAY_300,
          paddingBottom: insets.bottom + 30,
          paddingHorizontal: 20,
          paddingTop: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <StyledText>소계</StyledText>
          <StyledText>125,000,000원</StyledText>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <StyledText>배송비</StyledText>
          <StyledText>0원</StyledText>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <StyledText>총 금액</StyledText>
          <StyledText>125,000,000원</StyledText>
        </View>
        <BigButton text="결제하기" onPress={() => onPressToPay()} />
      </View> */}
      <View style={[styles.totalWrapper]}>
        <StyledText type="h3_BOLD" isBold style={{marginBottom: 20}}>
          주문정보
        </StyledText>
        <View>
          <View style={styles.totalList}>
            <StyledText color="GRAY_100">주문자</StyledText>
            <StyledText type="h4_normal">{user_name || '---'}</StyledText>
          </View>
          <View style={styles.totalList}>
            <StyledText color="GRAY_100">연락처</StyledText>
            <StyledText type="h4_normal">{'010-8866-1109'}</StyledText>
          </View>
          <View style={styles.totalList}>
            <StyledText color="GRAY_100">결제수단</StyledText>
            <StyledText type="h4_normal" isBold>
              {paymentMap?.[payMethod] || '---'}
            </StyledText>
          </View>
          <View style={styles.totalList}>
            <StyledText color="GRAY_100">합계(세금 포함)</StyledText>
            <StyledText type="h4_normal">
              {orderInfo?.products?.length > 0 ? totalPrice : '0'} 원
            </StyledText>
          </View>
          <View style={styles.totalList}>
            <StyledText color="GRAY_100">기타(선물 포장 등)</StyledText>
            <StyledText type="h4_normal">0 원</StyledText>
          </View>
          <View style={styles.totalList}>
            <StyledText color="GRAY_100">총 주문금액</StyledText>
            <StyledText type="h4_normal">
              {orderInfo?.products?.length > 0 ? totalPrice : '0'} 원
            </StyledText>
          </View>
        </View>
        <BigButton text="결제하기" onPress={() => onPressToPay()} />
      </View>
    </ScrollView>
  );
};

export default Purchase;

const styles = StyleSheet.create({
  infoWrapper: {
    // marginVertical: 20,
    // flex: 1,
    // backgroundColor: 'pink',
  },
  infoHeader: {
    // backgroundColor: theme.colors.MAIN_RED,
    alignItems: 'center',
    paddingVertical: 10,
  },
  infoBody: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    // backgroundColor: theme.colors.GRAY_300,
    // borderWidth: 1,
    // borderColor: theme.colors.GRAY_200,
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

type purchaseProp = {style?: StyleProp<ViewStyle>} & detailProps;

export const PurchaseItem = ({
  id,
  name,
  en_name,
  des,
  price,
  thumbnail,
  image,
  images,
  info,
  style,
}: purchaseProp) => {
  console.log(image, images, thumbnail);
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          borderBottomWidth: 1,
          paddingVertical: 10,
          alignItems: 'center',
          borderColor: theme.colors.GRAY_200,
          // backgroundColor: 'pink',
        },
        style,
      ]}>
      <Image
        source={image || images[0]}
        style={{width: 100, height: 100, marginRight: 10}}
      />
      {/* <View> */}
      <View style={{flex: 1}}>
        <View
          style={
            {
              // borderBottomColor: theme.colors.GRAY_200,
              // borderBottomWidth: 1,
              // paddingBottom: 20,
            }
          }>
          <StyledText type="h4_normal" isBold>
            {name || '--'}
          </StyledText>
          <StyledText>상품번호 : {id || '--'} </StyledText>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <StyledText>{price?.toLocaleString() || '--'} 원</StyledText>
            <StyledText>X 1</StyledText>
          </View>
        </View>
      </View>
    </View>
  );
};
