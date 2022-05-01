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
    <TouchableOpacity style={style} onPress={onPress}>
      <Image source={assets.icon_menu} style={{width: 30, height: 30}} />
    </TouchableOpacity>
  );
};

export default MenuButton;
