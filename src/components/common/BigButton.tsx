import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import StyledText from '../../commons/StyledText';
import theme from '../../commons/theme';

const BigButton = ({
  text,
  onPress,
  style,
  isWhite,
  disabled,
}: {
  text: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  isWhite?: boolean;
  disabled?: boolean;
}) => {
  const {width} = Dimensions.get('window');

  return (
    <TouchableOpacity
      style={[
        {
          width: '100%',
          // width: width - 40,
          alignSelf: 'center',
          backgroundColor: theme.colors.MAIN_RED,
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5,
        },
        style,
        isWhite && {
          backgroundColor: theme.colors.DEFAULT_WHITE,
          borderColor: theme.colors.GRAY_200,
          borderWidth: 1,
        },
      ]}
      onPress={onPress}>
      <StyledText
        color={!isWhite ? 'DEFAULT_WHITE' : 'DARK_GRAY'}
        type="contentTitle">
        {text}
      </StyledText>
    </TouchableOpacity>
  );
};

export default BigButton;

const styles = StyleSheet.create({});
