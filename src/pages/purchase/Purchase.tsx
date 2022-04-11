import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import assets from '../../../assets';
import StyledText from '../../commons/StyledText';
import BigButton from '../../components/common/BigButton';
import {useOrderContext} from '../../contexts/OrderProvider';

const Purchase = () => {
  const [data, setData] = React.useState([]);
  const orderInfo = useOrderContext();
  console.log('orderInfo', orderInfo);
  const user_name = 'Jeenie';
  return (
    <ScrollView contentContainerStyle={{}}>
      <View>
        <StyledText>{user_name}님,</StyledText>
        <StyledText>구매해주셔서 감사합니다.</StyledText>
        <StyledText>
          고객님의 주문 12335이 성공적으로 완료 되었으며, 현재 배송을 위해
          주문이 처리 중에 있습니다. 귀하의 주문 관련 상세 내역은 아래를
          참조하여 주십시오.
        </StyledText>
        <StyledText>
          배송이 시작되면 발송확인 이메일을 통해 한번 더 안내드릴 예정임,
          고객님의 MY CARTIER 계정에서 배송 추적이 가능합니다.
        </StyledText>
        <BigButton text="주문내역 확인하기" onPress={() => {}} />
        <View style={styles.infoWrapper}>
          <View style={styles.infoHeader}>
            <StyledText>주문번호 No.12424234</StyledText>
            <StyledText>날짜 01/01</StyledText>
          </View>
          <View style={styles.infoBody}>
            <DetailItem />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Purchase;

const styles = StyleSheet.create({
  infoWrapper: {},
  infoHeader: {},
  infoBody: {},
});

export const DetailItem = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image source={assets.juste_r_wg} style={{width: 130, height: 130}} />
      <View>
        <StyledText>탱크 머스트 워치</StyledText>
        <StyledText>125,000,000 원</StyledText>
        <StyledText>X 1</StyledText>
      </View>
    </View>
  );
};
