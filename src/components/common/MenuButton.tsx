import React from 'react';
import {
  Image,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import assets from '../../../assets';
import theme from '../../commons/theme';

type MenuButtonProps = {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

const MenuButton = ({onPress, style}: MenuButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        // {
        //   height: 30,
        //   width: 35,
        //   justifyContent: 'space-between',
        // },
        style,
      ]}
      onPress={onPress}>
      {/* <View
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
      /> */}
      <Image source={assets.icon_menu} style={{width: 30, height: 30}} />
    </TouchableOpacity>
  );
};

export default MenuButton;
