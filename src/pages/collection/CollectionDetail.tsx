import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
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
import StyledText from '../../commons/StyledText';
import theme from '../../commons/theme';
import CollectionCard from '../../components/CollectionCard';
import AddCartButton from '../../components/common/AddCartButton';
import LikeButton from '../../components/common/LikeButton';
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

const ListItem = ({
  id,
  name,
  thumbnail,
  sub,
  price,
}: {
  id: string;
  name: string;
  thumbnail: ImageSourcePropType;
  sub: string;
  price: string;
}) => {
  const {width} = useWindowDimensions();
  const {navigate} = useNavigation();

  return (
    <View
      style={{
        // flex: 1,
        marginHorizontal: 10,
      }}>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          // backgroundColor: 'pink',
        }}
        onPress={() => {
          navigate('ProductDetail', {id: id});
        }}>
        <View style={{position: 'relative'}}>
          <Image
            source={thumbnail}
            style={{
              width: width / 2 - 40,
              height: width / 2 - 40,
            }}
          />
          <LikeButton id={id} />
        </View>
        <View style={styles.textWrapper}>
          <StyledText type="contentTitle">{name}</StyledText>
          <StyledText color="GRAY_200" style={{marginTop: 5}}>
            {sub}
          </StyledText>
          <StyledText type="contentTitle" style={{marginTop: 15}}>
            {price}원
          </StyledText>
        </View>
      </TouchableOpacity>
      <AddCartButton id={id} />
    </View>
  );
};

const _renderBody = (tab: number) => {
  const data =
    tab === 0
      ? juste_br_data
      : tab === 1
      ? juste_er_data
      : tab === 2
      ? juste_r_data
      : tab === 3
      ? juste_nk_data
      : [];
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
      {data?.map(item => (
        <ListItem {...item} />
      ))}
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

  // route.params.title
  const title =
    route.params.title === 'juste'
      ? 'JUSTE UN CLU'
      : route.params.title === 'panthere'
      ? 'PHANTHERE DE CARTIER'
      : route.params.title === 'love'
      ? 'LOVE'
      : route.params.title === 'trinity'
      ? 'TRINITY'
      : route.params.title === 'ecrou'
      ? 'ECORU DE CARTIER'
      : '';

  const image =
    route.params.title === 'juste'
      ? assets.collection_juste
      : route.params.title === 'panthere'
      ? assets.collection_panthere
      : route.params.title === 'love'
      ? assets.collection_love
      : route.params.title === 'trinity'
      ? assets.collection_trinity
      : route.params.title === 'ecrou'
      ? assets.collection_ecrou
      : '';

  return (
    <ScrollView contentContainerStyle={{paddingBottom: 100}}>
      <StyledText>상세</StyledText>
      <CollectionCard
        title={title}
        thumbnail={image}
        contents={
          '못으로부터 영감을 받은 주얼리. 1970년대 뉴욕에서 처음 선보였던 못 브레이슬릿은 자유롭고 즐거움을 추구한 당시의 분위기를 반영했습니다. 대담하면서도 모던한 선구자적 스타일을 추구했던 저스트 앵 끌루는 일상적인 오브제의 놀라운 변신을 보여 줍니다. 평범함을 초월하여 사물을 더욱 가치 있는 것으로 만들어주는, 남녀 모두를 위한 세련된 주얼리 컬렉션입니다.'
        }
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
      <View style={styles.body}>{_renderBody(tab)}</View>
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
