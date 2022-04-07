import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import assets from '../../../assets';
import {detailProps, onGetProductDetail} from '../../apis/main';
import StyledText from '../../commons/StyledText';
import theme from '../../commons/theme';
import BigButton from '../../components/common/BigButton';
import {HomeStackParamList} from '../../nav/AppContainer';

export type ProductDetailRouteProp = RouteProp<
  HomeStackParamList,
  'ProductDetail'
>;
const ProductDetail = () => {
  const [data, setData] = React.useState<detailProps>();
  const route = useRoute<ProductDetailRouteProp>();
  const {width} = useWindowDimensions();
  const [tab, setTab] = React.useState(0);

  React.useEffect(() => {
    initData();
  }, []);

  const initData = async () => {
    const res = await onGetProductDetail(route.params.id);
    console.log('route.params.id =======', route.params.id);
    setData(res);
  };

  const _renderTabBody = (tab: number, data: any) => {
    if (tab === 0)
      return (
        <>
          <StyledText type="contentTitle">JUSTE UN CLU RING</StyledText>
          <StyledText type="contentTitle">저스트 앵 끌루 링</StyledText>
          <StyledText>제품번호 B8301446</StyledText>
          <StyledText>수입자 ㈜ 리치몬트 코리아</StyledText>
          <StyledText>까르띠에 보증서 동봉</StyledText>
          <StyledText>
            품질보증기준 : 관련 법 및 소비자 분쟁해결 규정에 따름
          </StyledText>
          <StyledText type="contentTitle">제품 설명</StyledText>
          <StyledText>
            저스트 앵 끌루 링, 18K 화이트 골드, 총 0.59캐럿의 브릴리언트 컷
            다이아몬드 77개 세팅. 폭 : 1.8MM
          </StyledText>
        </>
      );
    return (
      <>
        <StyledText type="contentTitle">무료 배송 및 반품 안내</StyledText>
        <StyledText>
          까르띠에 온라인 부티크에서는 모든 구매건에 대하여 무료 배송 서비스 및
          무료반품 서비스를 제공하고 있습니다. 교환 및 반품의 경우, 판매 약관에
          따라 상품 수령 후 30일 이내에 무료 교환/반품이 가능합니다. 자세한
          사항은 판매약관 및 교환/환불정책 확인 부탁드립니다.
        </StyledText>
        <StyledText type="contentTitle">배송 안내</StyledText>
        <StyledText>
          일반 배송: 5백만원 미만의 구매건의 경우 우체국택배를 통하여 안전하게
          배송되며, 영업일 3~5일 소요됩니다.
        </StyledText>
        <StyledText>
          특별 배송: 5백만원 이상의 구매건의 경우 발렉스를 통하여 약속된 날짜에
          맞춰 안전하게 배송됩니다.
        </StyledText>
      </>
    );
  };

  return (
    <ScrollView contentContainerStyle={theme.styles.globalPaddingVertical}>
      <FlatList
        data={[assets.juste_r_yg, assets.juste_r_yg, assets.juste_r_yg]}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment={'start'}
        snapToInterval={width}
        decelerationRate={'fast'}
        pagingEnabled
        scrollEnabled={true}
        contentContainerStyle={theme.styles.globalPaddingVertical}
        renderItem={({item}) => {
          return <Image source={item} style={{width: width}} />;
        }}
      />
      <View style={styles.mainWrapper}>
        <View style={styles.texts}>
          <StyledText type="pageTitle">{data?.en_name || '--'}</StyledText>
          <StyledText type="pageTitle">{data?.name || '--'}</StyledText>
          <StyledText>{data?.des || '--'}</StyledText>
        </View>
        <View style={styles.btnWrapper}>
          <BigButton
            text="전화 주문 및 문의: 1566-7277"
            onPress={() => {}}
            isWhite
            style={{borderRadius: 0}}
          />
          <BigButton
            text="쇼핑백에 추가하기"
            onPress={() => {}}
            style={{borderRadius: 0}}
          />
        </View>
      </View>

      <View style={styles.tabWrapper}>
        <View style={styles.tabs}>
          <TouchableOpacity
            onPress={() => setTab(0)}
            style={[
              styles.tabButton,
              tab === 0 && {borderBottomColor: theme.colors.MAIN_RED},
            ]}>
            <StyledText isBold={tab === 0}>상세정보</StyledText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTab(1)}
            style={[
              styles.tabButton,
              tab === 1 && {borderBottomColor: theme.colors.MAIN_RED},
            ]}>
            <StyledText isBold={tab === 1}>배송 / 반품</StyledText>
          </TouchableOpacity>
        </View>
        <View style={styles.tabBody}>{_renderTabBody(tab, data)}</View>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  mainWrapper: {
    // paddingHorizontal: 20,
  },
  texts: {
    paddingHorizontal: 20,
  },
  btnWrapper: {},
  tabWrapper: {
    // paddingHorizontal: 20,
  },
  tabs: {
    flexDirection: 'row',
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    height: 50,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: theme.colors.GRAY_200,
  },
  tabBody: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: theme.colors.GRAY_300,
    borderBottomColor: theme.colors.MAIN_RED,
    borderBottomWidth: 3,
  },
});
