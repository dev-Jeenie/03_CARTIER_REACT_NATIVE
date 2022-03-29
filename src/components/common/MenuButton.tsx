import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import theme from '../../commons/theme';

type MenuButtonProps = {
  onPress: () => void;
};

const MenuButton = ({onPress}: MenuButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        height: 30,
        width: 35,
        left: 20,
        justifyContent: 'space-between',
      }}
      onPress={onPress}>
      <View
        style={{
          width: '100%',
          height: 5,
          backgroundColor: theme.colors.DEFAULT_WHITE,
          borderRadius: 5,
        }}
      />
      <View
        style={{
          width: '100%',
          height: 5,
          backgroundColor: theme.colors.DEFAULT_WHITE,
          borderRadius: 5,
        }}
      />
      <View
        style={{
          width: '100%',
          height: 5,
          backgroundColor: theme.colors.DEFAULT_WHITE,
          borderRadius: 5,
        }}
      />
    </TouchableOpacity>
  );
};

export default MenuButton;
