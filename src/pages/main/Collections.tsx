import {RouteProp, useNavigation} from '@react-navigation/native';
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
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import assets from '../../../assets';
import StyledText from '../../commons/StyledText';
import theme from '../../commons/theme';
import CollectionCard from '../../components/CollectionCard';

const Collections = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <ScrollView contentContainerStyle={theme.styles.globalPaddingVertical30}>
      <View style={{alignItems: 'center'}}>
        <StyledText type="pageTitle">까르띠에 컬렉션</StyledText>
      </View>
      <CollectionCard
        title="JUSTE UN CLU"
        thumbnail={assets.collection_juste}
        contents={
          '못으로부터 영감을 받은 주얼리. 1970년대 뉴욕에서 처음 선보였던 못 브레이슬릿은 자유롭고 즐거움을 추구한 당시의 분위기를 반영했습니다. 대담하면서도 모던한 선구자적 스타일을 추구했던 저스트 앵 끌루는 일상적인 오브제의 놀라운 변신을 보여 줍니다. 평범함을 초월하여 사물을 더욱 가치 있는 것으로 만들어주는, 남녀 모두를 위한 세련된 주얼리 컬렉션입니다.'
        }
        onPress={() =>
          navigation.navigate('CollectionDetail', {title: 'juste'})
        }
      />
      <CollectionCard
        title="PANTHERE DE CARTIER"
        thumbnail={assets.collection_panthere}
        contents={
          '까르띠에가 창조한 시그니처이자 매혹적인 우아함과 열정의 대상, 팬더 드 까르띠에입니다. 팬더 컬렉션의 첫 주인공인 팬더 머리가 장식된 뱅글 브레이슬릿은 놀라운 유연성을 선사합니다. 아이코닉한 팬더 드 까르띠에의 매혹적인 매력과 함께 마치 제2의 피부처럼 부드럽게 손목을 감싸는 주얼리입니다. 자연을 모방하는 것이 아니라, 그에 대한 경의를 담아 모티프에 활기를 더하고 개성을 불어넣는 것이 핵심이라 할 수 있습니다.'
        }
        onPress={() =>
          navigation.navigate('CollectionDetail', {title: 'panthere'})
        }
      />
      <CollectionCard
        title="LOVE"
        thumbnail={assets.collection_love}
        contents={
          '1970년대 뉴욕에서 탄생한 LOVE 브레이슬릿은 주얼리 디자인의 아이콘입니다. 타원형 브레이슬릿은 손목에 부드럽게 밀착되며, 골드 소재의 전용 드라이버로 스크루를 풀어 분리합니다. 열렬한 사랑을 전해주는 브레이슬릿이 연인들의 마음을 변함없이 간직해 줍니다.'
        }
        onPress={() => navigation.navigate('CollectionDetail', {title: 'love'})}
      />
      <CollectionCard
        title="TRINITY"
        thumbnail={assets.collection_trinity}
        contents={
          '트리니티 링은 메종의 주얼러들이 세 개의 평범한 링을 통해 아름다운 형태를 구현하는 까르띠에의 디자인 비전을 보여줍니다. 간결한 라인과 완벽한 비율의 트리니티 링에는 옐로우 골드와 화이트 골드, 핑크 골드 소재의 세 가지 링이 조화롭게 얽혀 있습니다.'
        }
        onPress={() =>
          navigation.navigate('CollectionDetail', {title: 'trinity'})
        }
      />
      <CollectionCard
        title="ECROU DE CARTIER"
        thumbnail={assets.collection_ecrou}
        contents={
          '에크루 드 까르띠에는 평범함을 초월하는 모던하고 대담한 스타일을 표현합니다. 심플한 디자인에 더해진 섬세한 터치가 너트를 화려한 주얼리로 변신시켜 줍니다. 강렬하고 반항적인 코드가 돋보이는 독특한 브레이슬릿이 시선을 사로잡습니다.'
        }
        onPress={() =>
          navigation.navigate('CollectionDetail', {title: 'ecrou'})
        }
      />
    </ScrollView>
  );
};

export default Collections;
