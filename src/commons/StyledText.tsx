import React from 'react';
import {StyleProp, Text, TextProps, TextStyle} from 'react-native';
import theme from '../commons/theme';

export type StyledTextProps = {
  type?: keyof typeof theme.fonts;
  color?: keyof typeof theme.colors;
  style?: StyleProp<TextStyle>;
  children?: string;
} & TextProps;

const StyledText = ({type, color, style, children}: StyledTextProps) => {
  return (
    <Text
      style={[
        // theme.fonts[type] ?? theme.fonts.contentTitle,
        // {color: theme.colors[color] ?? theme.colors.GRAY_000},
        style,
      ]}>
      {children}
    </Text>
  );
};

export default StyledText;
