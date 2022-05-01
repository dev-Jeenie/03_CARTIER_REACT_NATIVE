import React from 'react';
import {StyleProp, Text, TextProps, TextStyle} from 'react-native';
import theme from '../commons/theme';

export type StyledTextProps = {
  type?: keyof typeof theme.fonts;
  color?: keyof typeof theme.colors;
  style?: StyleProp<TextStyle>;
  children?: any;
  isBold?: boolean;
} & TextProps;

const StyledText = ({
  type,
  color,
  style,
  children,
  isBold,
}: StyledTextProps) => {
  const textKey = type ?? 'normal';
  const colorKey = color ?? 'GRAY_000';

  const textStyle = React.useMemo(() => {
    return theme.fonts?.[textKey] || theme.fonts.normal;
  }, [textKey]);

  const colorStyle = React.useMemo(
    () => ({
      color: theme.colors?.[colorKey],
    }),
    [colorKey],
  );
  return (
    <Text
      style={[colorStyle, textStyle, style, isBold && {fontWeight: 'bold'}]}>
      {children}
    </Text>
  );
};

export default StyledText;
