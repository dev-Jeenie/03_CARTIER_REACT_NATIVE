import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import assets from '../../../assets';

type CartButtonProps = {
  onPress: () => void;
};

const CartButton = ({onPress}: CartButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={assets.icon_cart} style={{width: 20, height: 20}} />
    </TouchableOpacity>
  );
};

export default CartButton;
