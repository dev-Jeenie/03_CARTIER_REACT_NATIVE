import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, useWindowDimensions, View} from 'react-native';
import assets from '../../../assets';
import theme from '../../commons/theme';
import CloseButton from '../../components/common/CloseButton';
import HeaderContainer from '../../components/common/HeaderContainer';
import MenuButton from '../../components/common/MenuButton';
import AsideMenu from '../../nav/AsideMenu';
import HomeStackNavigator from '../home/HomeStackNavigator';
import Icon from 'react-native-vector-icons';

export type MainDrawerParamList = {
  HomeStackNavigator: undefined;
};

const MainDrawerNavigator = () => {
  const navigation = useNavigation();

  const MainDrawer = React.useMemo(
    () => createDrawerNavigator<MainDrawerParamList>(),
    [],
  );
  const {width} = useWindowDimensions();
  return (
    <>
      <MainDrawer.Navigator
        screenOptions={{
          drawerType: 'front',
          drawerStyle: {
            width: '100%',
          },
          headerTransparent: true,
          headerTitleStyle: {color: theme.colors.DEFAULT_WHITE},
          header: () => {
            return (
              <HeaderContainer>
                <MenuButton
                  onPress={() =>
                    navigation.dispatch(DrawerActions.openDrawer())
                  }
                />
                <Image
                  source={assets.logo_w}
                  style={{
                    width: 140,
                    position: 'absolute',
                    left: width / 2 - 70,
                  }}
                  resizeMode={'contain'}
                />

                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      backgroundColor: theme.colors.DEFAULT_WHITE,
                      width: 25,
                      height: 25,
                      marginLeft: 10,
                    }}
                  />
                  <View
                    style={{
                      backgroundColor: theme.colors.DEFAULT_WHITE,
                      width: 25,
                      height: 25,
                      marginLeft: 10,
                    }}
                  />
                </View>
              </HeaderContainer>
            );
          },
        }}
        drawerContent={prop => <AsideMenu {...prop} />}>
        <MainDrawer.Screen
          name="HomeStackNavigator"
          component={HomeStackNavigator}
        />
      </MainDrawer.Navigator>
    </>
  );
};

export default MainDrawerNavigator;
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
});
