import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import SimpleToast from 'react-native-simple-toast';
import assets from '../../../assets';
import {onGetCollectionDetailDeta, productType} from '../../apis/collection';
import StyledText from '../../commons/StyledText';
import theme from '../../commons/theme';
import CollectionCard from '../../components/CollectionCard';
import AddCartButton from '../../components/common/AddCartButton';
import BigButton from '../../components/common/BigButton';
import {collectionMap} from '../../components/common/collectionMap';
import LikeButton from '../../components/common/LikeButton';
import {setStorage} from '../../libs/AsyncStorageManager';
import {
  collectionDetailType,
  collection_data,
  productsType,
} from '../../mockdata/collectionData';
import {
  juste_br_data,
  juste_er_data,
  juste_r_data,
  juste_nk_data,
} from '../../mockdata/ProductData';
import {HomeStackParamList} from '../../nav/AppContainer';

const ListButton = ({
  title,
  image,
  onPress,
  isSelected,
}: {
  title: string;
  image: ImageSourcePropType;
  onPress: () => void;
  isSelected: boolean;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          flex: 1,
          alignItems: 'center',
          borderBottomColor: 'transparent',
          borderBottomWidth: 3,
          paddingVertical: 20,
        },
        isSelected && {
          borderBottomColor: theme.colors.MAIN_RED,
        },
      ]}>
      <Image source={image} style={{width: 85, height: 85, marginBottom: 10}} />
      <StyledText color={isSelected ? 'GRAY_000' : 'GRAY_200'}>
        {title}
      </StyledText>
    </TouchableOpacity>
  );
};

export const ListItem = ({id, name, image, des, price}: productType) => {
  const {width} = useWindowDimensions();
  const {navigate} = useNavigation<StackNavigationProp<HomeStackParamList>>();

  const onAddToCart = async () => {
    // const res = await getStorage('cart_data');
    // console.log('장바구니의 데이터 res :::::', JSON.parse(cartData));
    // setCartData(JSON.parse(res));

    await setStorage(
      'cart_data',
      JSON.stringify([
        {id: id, size: '55', name: name, image: image, price: price, des: des},
        // ...cartData,
      ]),
    );
    SimpleToast.show('쇼핑백에 추가하였습니다');
  };

  return (
    <View
      style={{
        marginHorizontal: 10,
      }}>
      <TouchableOpacity
        style={{
          alignItems: 'center',
        }}
        onPress={() => {
          navigate('ProductDetail', {id: id});
        }}>
        <View style={{position: 'relative'}}>
          <Image
            source={image}
            style={{
              width: width / 2 - 40,
              height: width / 2 - 40,
            }}
          />
          <LikeButton
            isCoverImage
            id={id}
            name={name}
            image={image}
            des={des}
            price={price}
          />
        </View>
        <View style={[styles.textWrapper, {}]}>
          <StyledText type="contentTitle" numberOfLines={1}>
            {name}
          </StyledText>
          <StyledText color="GRAY_200" style={{marginTop: 5}}>
            {des || '--'}
          </StyledText>
          <StyledText type="contentTitle" style={{marginTop: 15}}>
            {price || '--'}원
          </StyledText>
        </View>
      </TouchableOpacity>
      {/* <AddCartButton id={id} /> */}
      <BigButton
        text="쇼핑백에 추가하기"
        onPress={onAddToCart}
        style={{borderRadius: 0}}
      />
    </View>
  );
};

const _renderBody = (tab: number, data?: productsType) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
      {tab === 0 ? (
        data?.br?.map(item => <ListItem {...item} />)
      ) : tab === 1 ? (
        data?.er?.map(item => <ListItem {...item} />)
      ) : tab === 2 ? (
        data?.r?.map(item => <ListItem {...item} />)
      ) : tab === 3 ? (
        data?.nk?.map(item => <ListItem {...item} />)
      ) : (
        <></>
      )}
    </View>
  );
};

export type CollectionDetailRouteProp = RouteProp<
  HomeStackParamList,
  'CollectionDetail'
>;

const CollectionDeatail = () => {
  const {navigate} = useNavigation<NavigationProp<HomeStackParamList>>();
  const [tab, setTab] = React.useState(0);
  const route = useRoute<CollectionDetailRouteProp>();
  const [data, setData] = React.useState<collectionDetailType | undefined>();

  const initData = async () => {
    const res = await onGetCollectionDetailDeta(route.params.collection_id);
    setData(res);
  };
  React.useEffect(() => {
    initData();
  }, []);

  return (
    <ScrollView contentContainerStyle={theme.styles.globalPaddingVertical30}>
      <View style={{alignItems: 'center'}}>
        <StyledText type="pageTitle">컬렉션 상세</StyledText>
      </View>
      <CollectionCard
        title={data?.title || '--'}
        thumbnail={data?.thumnail}
        contents={data?.des || '--'}
        isBanner
      />
      <View style={styles.tab}>
        <ListButton
          title="Bracelet"
          image={assets.menu_bracelet}
          onPress={() => setTab(0)}
          isSelected={tab === 0}
        />
        <ListButton
          title="Earing"
          image={assets.menu_earing}
          onPress={() => setTab(1)}
          isSelected={tab === 1}
        />
        <ListButton
          title="Ring"
          image={assets.menu_ring}
          onPress={() => setTab(2)}
          isSelected={tab === 2}
        />
        <ListButton
          title="Necklace"
          image={assets.menu_necklace}
          onPress={() => setTab(3)}
          isSelected={tab === 3}
        />
      </View>
      {/* <View style={styles.body}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          {tab === 0 ? (
            data?.products?.br?.map(item => <ListItem {...item} />)
          ) : tab === 1 ? (
            data?.products?.er?.map(item => <ListItem {...item} />)
          ) : tab === 2 ? (
            data?.products?.r?.map(item => <ListItem {...item} />)
          ) : tab === 3 ? (
            data?.products?.nk?.map(item => <ListItem {...item} />)
          ) : (
            <></>
          )}
        </View>
      </View> */}
      <View style={styles.body}>{_renderBody(tab, data?.products)}</View>
    </ScrollView>
  );
};
export default CollectionDeatail;

const styles = StyleSheet.create({
  tab: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    justifyContent: 'space-around',
    backgroundColor: theme.colors.GRAY_300,
  },
  body: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textWrapper: {
    alignItems: 'center',
    marginVertical: 15,
  },
});
