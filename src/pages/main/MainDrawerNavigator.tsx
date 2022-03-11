import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import AsideMenu from '../../nav/AsideMenu';
import HomeStackNavigator from '../home/HomeStackNavigator';

export type MainDrawerParamList = {
  HomeStackNavigator: undefined;
};

const MainDrawerNavigator = () => {
  const MainDrawer = React.useMemo(
    () => createDrawerNavigator<MainDrawerParamList>(),
    [],
  );

  return (
    <>
      <MainDrawer.Navigator
        screenOptions={{
          drawerType: 'front',
          drawerStyle: {
            width: '100%',
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
