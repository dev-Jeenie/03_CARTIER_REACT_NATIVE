import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import assets from '../../../assets';

type MypageButtonProps = {
  onPress: () => void;
};

const MypageButton = ({onPress}: MypageButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={assets.icon_MypageStroke}
        style={{width: 20, height: 20}}
      />
    </TouchableOpacity>
  );
};

export default MypageButton;
