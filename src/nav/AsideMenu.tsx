import {DrawerContentComponentProps} from '@react-navigation/drawer';
import React from 'react';
import {ScrollView, View} from 'react-native';

type AsideMenuProps = DrawerContentComponentProps & {};

const AsideMenu = ({}: AsideMenuProps) => {
  return (
    <>
      <View style={{flexDirection: 'row'}}></View>
      <ScrollView></ScrollView>
    </>
  );
};

export default AsideMenu;
