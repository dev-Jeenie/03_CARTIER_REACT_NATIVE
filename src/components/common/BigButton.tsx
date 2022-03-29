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
}: {
  text: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}) => {
  const {width} = Dimensions.get('window');

  return (
    <TouchableOpacity
      style={[
        {
          width: width - 40,
          alignSelf: 'center',
          backgroundColor: theme.colors.MAIN_RED,
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5,
        },
        style,
      ]}
      onPress={onPress}>
      <StyledText color="DEFAULT_WHITE" type="contentTitle">
        {text}
      </StyledText>
    </TouchableOpacity>
  );
};

export default BigButton;

const styles = StyleSheet.create({});
