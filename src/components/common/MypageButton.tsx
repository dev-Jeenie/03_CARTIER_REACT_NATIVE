import React from 'react';
import {Image, StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import assets from '../../../assets';

type MypageButtonProps = {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

const MypageButton = ({onPress, style}: MypageButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Image source={assets.icon_Mypage} style={{width: 30, height: 30}} />
    </TouchableOpacity>
  );
};

export default MypageButton;
