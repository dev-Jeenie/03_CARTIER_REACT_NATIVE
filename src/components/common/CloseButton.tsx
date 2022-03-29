import React from 'react';
import {TouchableOpacity} from 'react-native';
import theme from '../../commons/theme';

type CloseButtonProps = {
  onPress: () => void;
};

const CloseButton = ({onPress}: CloseButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        width: 15,
        height: 15,
        backgroundColor: theme.colors.MAIN_RED,
        position: 'absolute',
        left: 20,
      }}
      onPress={onPress}></TouchableOpacity>
  );
};

export default CloseButton;
