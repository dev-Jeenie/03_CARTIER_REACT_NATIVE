import React from 'react';
import {Image, StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import assets from '../../../assets';
import theme from '../../commons/theme';

type CloseButtonProps = {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

const CloseButton = ({onPress, style}: CloseButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        {
          position: 'absolute',
          left: 20,
        },
        style,
      ]}
      onPress={onPress}>
      <Image source={assets.icon_close} style={{width: 30, height: 30}} />
    </TouchableOpacity>
  );
};

export default CloseButton;
