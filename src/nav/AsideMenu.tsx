import React from 'react';
import {
  Image,
  ScrollView,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import StyledText from '../commons/StyledText';
import theme from '../commons/theme';
import assets from '../../assets';
import CloseButton from '../components/common/CloseButton';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import HeaderContainer from '../components/common/HeaderContainer';
import {useWindowDimensions} from 'react-native';

type AsideMenuProps = DrawerContentComponentProps & {};

type MenuListProps = {
  style?: StyleProp<ViewStyle>;
  title: string;
  subTitle: string[];
  onPressTitle: () => void;
  onPressSubTitle: () => void;
};

type SubMenuProps = {
  list: string[];
};

const SubMenuList = ({list}: SubMenuProps) => {
  return (
    <>
      {list?.map(item => (
        <TouchableOpacity style={{paddingVertical: 10}}>
          <StyledText type="normal" color="GRAY_200">
            {item}
          </StyledText>
        </TouchableOpacity>
      ))}
    </>
  );
};

const MenuList = ({
  style,
  title,
  subTitle,
  onPressTitle,
  onPressSubTitle,
}: MenuListProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <>
      <TouchableOpacity
        style={[
          {
            paddingVertical: 20,
            borderBottomColor: theme.colors.GRAY_300,
            borderBottomWidth: 1,
          },
          theme.styles.globalPaddingLeft,
        ]}
        onPress={() => setIsOpen(!isOpen)}>
        <StyledText type="listTitle">{title}</StyledText>
        {isOpen && (
          <View style={{paddingLeft: 20, marginTop: 20}}>
            <SubMenuList list={subTitle} />
          </View>
        )}
      </TouchableOpacity>
    </>
  );
};

const BottomList = ({text, onPress}: {text: string; onPress: () => void}) => {
  return (
    <TouchableOpacity
      style={{flexDirection: 'row', paddingVertical: 10}}
      onPress={onPress}>
      <StyledText color="DEFAULT_WHITE" type="listTitle">
        {text}
      </StyledText>
    </TouchableOpacity>
  );
};

const AsideMenu = ({}: AsideMenuProps) => {
  const navigation = useNavigation();
  const {width} = useWindowDimensions();

  return (
    <>
      <HeaderContainer>
        <CloseButton
          onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
          style={{position: 'absolute', left: 20}}
        />
        <Image
          source={assets.logo_r}
          style={{width: 130}}
          resizeMode={'contain'}
        />
      </HeaderContainer>

      <ScrollView>
        <MenuList
          title={'Collections'}
          subTitle={['전체 컬렉션']}
          onPressTitle={() => {}}
          onPressSubTitle={() => {}}
        />
        <MenuList
          title={'주얼리'}
          subTitle={[
            '모두보기',
            '팔찌',
            '반지',
            '목걸이 / 귀걸이',
            '하이 주얼리',
          ]}
          onPressTitle={() => {}}
          onPressSubTitle={() => {}}
        />
        <MenuList
          title={'워치'}
          subTitle={['여성', '남성']}
          onPressTitle={() => {}}
          onPressSubTitle={() => {}}
        />
        <MenuList
          title={'웨딩 & 다이아몬드'}
          subTitle={['ENGAGEMENT RINGS', 'WEDDING RINGS']}
          onPressTitle={() => {}}
          onPressSubTitle={() => {}}
        />
        <MenuList
          title={'라이프스타일'}
          subTitle={['가죽제품', '액세서리', '안경']}
          onPressTitle={() => {}}
          onPressSubTitle={() => {}}
        />
        <MenuList
          title={'서비스'}
          subTitle={['']}
          onPressTitle={() => {}}
          onPressSubTitle={() => {}}
        />
        <View
          style={[
            theme.styles.globalPaddingLeft,
            theme.styles.globalPaddingVertical,
            {backgroundColor: theme.colors.MAIN_RED},
          ]}>
          <BottomList text="나의 계정" onPress={() => {}} />
          <BottomList text="쇼핑백" onPress={() => {}} />
          <BottomList text="Contact us" onPress={() => {}} />
        </View>
      </ScrollView>
    </>
  );
};

export default AsideMenu;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
});
