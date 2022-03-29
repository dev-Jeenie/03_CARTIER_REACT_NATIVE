import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import StyledText from '../../commons/StyledText';
import theme from '../../commons/theme';

type BackButtonProps = {
  onPress: () => void;
};

const BackButton = ({onPress}: BackButtonProps) => {
  return (
    <TouchableOpacity style={{backgroundColor: 'pink'}} onPress={onPress}>
      <StyledText style={{fontSize: 20}}>뒤로</StyledText>
    </TouchableOpacity>
  );
};

export default BackButton;
