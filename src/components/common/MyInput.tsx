import React, {ClassAttributes, Ref} from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import StyledText from '../../commons/StyledText';
import theme from '../../commons/theme';

type MyInputProps = {
  style?: StyleProp<ViewStyle>;
  placeholder?: string;
  placeholderTextColor?: string;
  inputStyle?: StyleProp<ViewStyle>;
  isValidCheck?: boolean;
  state?: boolean;
  validText?: string;
  // } & TextInputProps;
} & TextInputProps &
  ClassAttributes<TextInput>;

const MyInput = ({
  style,
  placeholder,
  placeholderTextColor = theme.colors.GRAY_000,
  inputStyle,
  onFocus,
  onBlur,
  ref,
  isValidCheck,
  state,
  validText,
  ...props
}: MyInputProps) => {
  const [focused, setFocused] = React.useState(false);

  const handleFocus = () => {};

  const handleBlur = () => {};

  return (
    <>
      <View style={[styles.container, style]}>
        <TextInput
          placeholder={placeholder}
          style={[styles.input, inputStyle]}
          placeholderTextColor={placeholderTextColor}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
          {...props}
        />
      </View>
      {isValidCheck && (
        <View style={{marginTop: 10}}>
          <StyledText color={state ? 'SUB_BLUE' : 'MAIN_RED'}>
            {validText || '--'}
          </StyledText>
        </View>
      )}
    </>
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
