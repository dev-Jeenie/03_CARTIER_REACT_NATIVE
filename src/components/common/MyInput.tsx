import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import theme from '../../commons/theme';

type MyInputProps = {
  style?: StyleProp<ViewStyle>;
  placeholder?: string;
  placeholderTextColor?: string;
  inputStyle?: StyleProp<ViewStyle>;
} & TextInputProps;

const MyInput = ({
  style,
  placeholder,
  placeholderTextColor = theme.colors.GRAY_000,
  inputStyle,
  onFocus,
  onBlur,
  ...props
}: MyInputProps) => {
  const [focused, setFocused] = React.useState(false);

  const handleFocus = () => {};

  const handleBlur = () => {};

  return (
    <View style={[styles.container, style]}>
      <TextInput
        placeholder={placeholder}
        style={[styles.input, inputStyle]}
        placeholderTextColor={placeholderTextColor}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
    </View>
  );
};

export default MyInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.GRAY_000,
    height: 50,
  },
  input: {
    // ...Font[FontType.H3_NORMAL],
    // color: Color[ColorType.BLACK],
    flex: 1,
  },
});
