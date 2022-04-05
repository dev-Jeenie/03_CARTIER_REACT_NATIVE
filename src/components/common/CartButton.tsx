import React from 'react';
import {Image, StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import assets from '../../../assets';

type CartButtonProps = {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

const CartButton = ({onPress, style}: CartButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Image source={assets.icon_cart} style={{width: 30, height: 30}} />
    </TouchableOpacity>
  );
};

export default CartButton;
