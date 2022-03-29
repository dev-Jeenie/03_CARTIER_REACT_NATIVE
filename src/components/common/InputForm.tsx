import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import StyledText from '../../commons/StyledText';

type InputFormProps = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  titleStyle?: StyleProp<TextStyle>;
  title?: string;
};

const InputForm = ({
  style,
  children,
  titleStyle = {},
  title = '',
  ...props
}: InputFormProps) => {
  return (
    <View style={[styles.container, style]} {...props}>
      <StyledText color="GRAY_200" style={titleStyle}>
        {title}
      </StyledText>
      {children}
    </View>
  );
};
export default InputForm;

const styles = StyleSheet.create({
  container: {},
});
