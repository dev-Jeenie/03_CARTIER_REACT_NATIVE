import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
  ViewStyle,
} from 'react-native';
import assets from '../../assets';
import StyledText from '../commons/StyledText';
import theme from '../commons/theme';
import CloseButton from '../components/common/CloseButton';
import HeaderContainer from '../components/common/HeaderContainer';
import {HomeStackParamList} from './AppContainer';

type AsideMenuProps = DrawerContentComponentProps & {};

type MenuListProps = {
  style?: StyleProp<ViewStyle>;
  title: string;
  subTitles?: string[];
  onPressTitle?: () => void;
  onPressSubTitle?: () => void;
  children: JSX.Element | Array<JSX.Element>;
};

const MenuList = ({title, children}: MenuListProps) => {
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
        {isOpen && children}
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
  const {navigate, dispatch} =
    useNavigation<StackNavigationProp<HomeStackParamList>>();
  const {width} = useWindowDimensions();

  return (
    <>
      <HeaderContainer>
        <CloseButton
          onPress={() => dispatch(DrawerActions.closeDrawer())}
          style={{position: 'absolute', left: 20}}
        />
        <Image
          source={assets.logo_r}
          style={{width: 130}}
          resizeMode={'contain'}
        />
      </HeaderContainer>

      <ScrollView>
        <TouchableOpacity
          style={[
            {
              paddingVertical: 20,
              borderBottomColor: theme.colors.GRAY_300,
              borderBottomWidth: 1,
            },
            theme.styles.globalPaddingLeft,
          ]}
          onPress={() => {}}>
          <StyledText type="listTitle">Collections</StyledText>
        </TouchableOpacity>
        <MenuList title="주얼리">
          <View style={{paddingLeft: 20, marginTop: 20}}>
            <TouchableOpacity style={{paddingVertical: 10}}>
              <StyledText type="normal" color="GRAY_200">
                모두보기
              </StyledText>
            </TouchableOpacity>
            <TouchableOpacity style={{paddingVertical: 10}}>
              <StyledText type="normal" color="GRAY_200">
                팔찌
              </StyledText>
            </TouchableOpacity>
            <TouchableOpacity style={{paddingVertical: 10}}>
              <StyledText type="normal" color="GRAY_200">
                반지
              </StyledText>
            </TouchableOpacity>
            <TouchableOpacity style={{paddingVertical: 10}}>
              <StyledText type="normal" color="GRAY_200">
                목걸이/귀걸이
              </StyledText>
            </TouchableOpacity>
            <TouchableOpacity style={{paddingVertical: 10}}>
              <StyledText type="normal" color="GRAY_200">
                하이주얼리
              </StyledText>
            </TouchableOpacity>
          </View>
        </MenuList>
        <TouchableOpacity
          style={[
            {
              paddingVertical: 20,
              borderBottomColor: theme.colors.GRAY_300,
              borderBottomWidth: 1,
            },
            theme.styles.globalPaddingLeft,
          ]}
          onPress={() => navigate('Mypage')}>
          <StyledText type="listTitle">워치</StyledText>
        </TouchableOpacity>
        <MenuList title={`웨딩 ${'&'} 다이아몬드`}>
          <View style={{paddingLeft: 20, marginTop: 20}}>
            <TouchableOpacity style={{paddingVertical: 10}}>
              <StyledText type="normal" color="GRAY_200">
                ENGAGEMENT RINGS
              </StyledText>
            </TouchableOpacity>
            <TouchableOpacity style={{paddingVertical: 10}}>
              <StyledText type="normal" color="GRAY_200">
                WEDDING RINGS
              </StyledText>
            </TouchableOpacity>
          </View>
        </MenuList>
        <TouchableOpacity
          style={[
            {
              paddingVertical: 20,
              borderBottomColor: theme.colors.GRAY_300,
              borderBottomWidth: 1,
            },
            theme.styles.globalPaddingLeft,
          ]}
          onPress={() => navigate('Mypage')}>
          <StyledText type="listTitle">서비스</StyledText>
        </TouchableOpacity>
        <View
          style={[
            theme.styles.globalPaddingLeft,
            theme.styles.globalPaddingVertical,
            {backgroundColor: theme.colors.MAIN_RED},
          ]}>
          <BottomList text="나의 계정" onPress={() => navigate('Mypage')} />
          <BottomList text="쇼핑백" onPress={() => navigate('Cart')} />
          <BottomList text="Contact us" onPress={() => navigate('Mypage')} />
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
