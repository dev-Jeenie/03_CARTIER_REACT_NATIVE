import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import SimpleToast from 'react-native-simple-toast';
import assets from '../../../assets';
import StyledText from '../../commons/StyledText';
import theme from '../../commons/theme';
import BigButton from '../../components/common/BigButton';
import {useOrderContext} from '../../contexts/OrderProvider';
import {getStorage, setStorage} from '../../libs/AsyncStorageManager';
import {HomeStackParamList} from '../../nav/AppContainer';

const Purchase = () => {
  const [data, setData] = React.useState([]);
  const user_name = 'Jeenie';
  const {orderInfo, setOrderInfo} = useOrderContext();
  const {navigate, push} =
    useNavigation<StackNavigationProp<HomeStackParamList>>();

  const initData = async () => {
    // const res = await getStorage('order_data');
    // order_data로 들어있는 데이터 불러오기
    // 아니다 이거 context에서 꺼내와야겠구나 이거 아니고 orderInfo임...
    // 아니 그러면 애초에 React.useEffect를 돌릴 필요가 없네
  };

  React.useEffect(() => {
    initData();
  }, []);

  console.log('구매페이지의 orderInfo', orderInfo);

  const onPressOrderDetail = () => {
    SimpleToast.show('마이페이지의 주문내역 페이지로 이동'), push('Mypage');
  };

  return (
    <ScrollView>
      <View
        style={[
          theme.styles.globalPaddingHorizontal,
          theme.styles.globalPaddingVertical,
        ]}>
        <StyledText>{user_name}님,</StyledText>
        <StyledText>구매해주셔서 감사합니다.</StyledText>
        <StyledText>
          고객님의 주문 12335이 성공적으로 완료 되었으며, 현재 배송을 위해
          주문이 처리 중에 있습니다. 귀하의 주문 관련 상세 내역은 아래를
          참조하여 주십시오.
        </StyledText>
        <StyledText>
          배송이 시작되면 발송확인 이메일을 통해 한번 더 안내드릴 예정입니다.
          고객님의 MY CARTIER 계정에서 배송 추적이 가능합니다.
        </StyledText>
        <BigButton
          text="주문내역 확인하기"
          onPress={() => onPressOrderDetail()}
        />
      </View>
      <View style={styles.infoWrapper}>
        <View style={styles.infoHeader}>
          <StyledText type="h4_normal" color="DEFAULT_WHITE" isBold>
            주문번호 No.12424234
          </StyledText>
          <StyledText type="h4_normal" color="DEFAULT_WHITE" isBold>
            날짜 2022-04-15
          </StyledText>
        </View>
        <View style={styles.infoBody}>
          <DetailItem />
        </View>
      </View>
    </ScrollView>
  );
};

export default Purchase;

const styles = StyleSheet.create({
  infoWrapper: {
    marginVertical: 20,
  },
  infoHeader: {
    backgroundColor: theme.colors.MAIN_RED,
    alignItems: 'center',
    paddingVertical: 10,
  },
  infoBody: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: theme.colors.GRAY_300,
    // borderWidth: 1,
    // borderColor: theme.colors.GRAY_200,
  },
});

export const DetailItem = ({
  style,
  id,
}: {
  style?: StyleProp<ViewStyle>;
  id?: string;
}) => {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderTopWidth: 1,
          paddingVertical: 20,
          borderColor: theme.colors.GRAY_200,
        },
        style,
      ]}>
      <Image
        source={assets.juste_r_wg}
        style={{width: 130, height: 130, marginRight: 10}}
      />
      {/* <View> */}
      <View style={{flex: 1}}>
        <View
          style={{
            borderBottomColor: theme.colors.GRAY_200,
            borderBottomWidth: 1,
            paddingBottom: 20,
          }}>
          <StyledText type="h4_normal" isBold>
            탱크 머스트 워치
          </StyledText>
          <StyledText>상품번호 : {id} </StyledText>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <StyledText>125,000,000 원</StyledText>
            <StyledText>X 1</StyledText>
          </View>
        </View>
        <View style={{marginTop: 20}}>
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
        </View>
      </View>
    </View>
  );
};
