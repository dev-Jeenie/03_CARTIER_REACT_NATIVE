import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, StyleSheet, useWindowDimensions} from 'react-native';
import assets from '../../../assets';
import {detailProps, onGetProductDetail} from '../../apis/main';
import StyledText from '../../commons/StyledText';
import {HomeStackParamList} from '../../nav/AppContainer';

export type ProductDetailRouteProp = RouteProp<
  HomeStackParamList,
  'ProductDetail'
>;
const ProductDetail = () => {
  const [data, setData] = React.useState<detailProps>();
  const route = useRoute<ProductDetailRouteProp>();
  const {width} = useWindowDimensions();

  React.useEffect(() => {
    initData();
  }, []);

  const initData = async () => {
    const res = await onGetProductDetail(route.params.id);
    setData(res);
  };

  console.log(data);

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: 'pink',
      }}>
      <Image source={assets.juste_r_yg} style={{width: width}} />
      <StyledText>{data?.en_name}</StyledText>
      <StyledText>{data?.name}</StyledText>
      <StyledText>{data?.sub}</StyledText>
    </ScrollView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
