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
import LikeButton from '../../components/common/LikeButton';
import ShareButton from '../../components/common/ShareButton';
import {HomeStackParamList} from '../../nav/AppContainer';
import RNPickerSelect from 'react-native-picker-select';
import SimpleToast from 'react-native-simple-toast';
import {useCartContext} from '../../contexts/CartProvider';
import PickerSelect from '../../components/PickerSelect';

export type ProductDetailRouteProp = RouteProp<
  HomeStackParamList,
  'ProductDetail'
>;

const ProductDetail = () => {
  const [data, setData] = React.useState<detailProps>();
  const route = useRoute<ProductDetailRouteProp>();
  const {width} = useWindowDimensions();
  const [tab, setTab] = React.useState(0);
  const [size, setSize] = React.useState<string>('55');

  const {cartInfo} = useCartContext();
  console.log('cartInfo ::::::', cartInfo);

  React.useEffect(() => {
    initData();
  }, []);

  const initData = async () => {
    const res = await onGetProductDetail(route.params.id);
    console.log('route.params.id =======', route.params.id);
    setData(res);
  };

  const onAddToCart = () => {
    console.log(size);
    if (size === 'none') {
      SimpleToast.show('사이즈를 선택해주세요');
    } else {
      SimpleToast.show('쇼핑백에 추가하였습니다');
      // 장바구니 Context 호출
    }
  };

  const _renderTabBody = (tab: number, data: any) => {
    console.log('data ========', data);
    if (tab === 0)
      return (
        <>
          <StyledText type="contentTitle">{data?.en_name || '--'}</StyledText>
          <StyledText type="contentTitle">{data?.name || '--'}</StyledText>
          <StyledText>제품번호 {route.params.id || '--'}</StyledText>
          <StyledText>수입자 ㈜ 리치몬트 코리아</StyledText>
          <StyledText>까르띠에 보증서 동봉</StyledText>
          <StyledText>
            품질보증기준 : 관련 법 및 소비자 분쟁해결 규정에 따름
          </StyledText>
          <StyledText type="contentTitle">제품 설명</StyledText>
          <StyledText>{data?.info || '--'}</StyledText>
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
          return (
            <Image source={item} style={{width: width}} resizeMode="contain" />
          );
        }}
      />
      <View style={styles.mainWrapper}>
        <View style={styles.texts}>
          <StyledText type="pageTitle">{data?.en_name || '--'}</StyledText>
          <StyledText type="pageTitle">{data?.name || '--'}</StyledText>
          <StyledText color="GRAY_100">{data?.des || '--'}</StyledText>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <StyledText style={{marginRight: 10}}>사이즈</StyledText>
            {/* <RNPickerSelect */}
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

            <View style={{flexDirection: 'row', marginLeft: 20}}>
              <LikeButton id={route.params.id} style={{marginRight: 15}} />
              <ShareButton
                id={route.params.id}
                data={{
                  url: 'https://brave-case-c88.notion.site/Jeenie-e2d2fa1944c3449bb58349b1e2b1b871',
                }}
              />
            </View>
          </View>
          <StyledText type="pageTitle">
            {data?.price?.toLocaleString() || '--'} 원
          </StyledText>
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
            onPress={onAddToCart}
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
      <View>
        <StyledText>관련상품</StyledText>
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
            return (
              <Image
                source={item}
                style={{width: width}}
                resizeMode="contain"
              />
            );
          }}
        />
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
    marginVertical: 30,
  },
  btnWrapper: {},
  tabWrapper: {
    // paddingHorizontal: 20,
    marginTop: 30,
  },
  tabs: {
    flexDirection: 'row',
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    height: 50,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.GRAY_200,
  },
  tabBody: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: theme.colors.GRAY_300,
    borderColor: theme.colors.MAIN_RED,
  },
});
