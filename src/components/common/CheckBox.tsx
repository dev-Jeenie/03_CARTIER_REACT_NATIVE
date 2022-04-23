import React, {useState} from 'react';
import {
  FlexStyle,
  Image,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import assets from '../../../assets';
import StyledText from '../../commons/StyledText';
import theme from '../../commons/theme';

const styles = StyleSheet.create({
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: theme.colors.GRAY_300,
    borderBottomWidth: 1,
    paddingVertical: 12,
  },
  checkIcon: {
    borderRadius: 50,
    // backgroundColor: theme.colors.GRAY_200,
    borderColor: theme.colors.GRAY_200,
    borderWidth: 1,
    width: 20,
    height: 20,
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginRight: 9,
  },
  checkImage: {
    width: 12,
    height: 9,
    alignSelf: 'center',
  },
  checkText: {
    color: theme.colors.GRAY_200,
  },
  checkedBackground: {
    backgroundColor: theme.colors.MAIN_RED,
  },
  borderBottom: {
    borderBottomWidth: 1,
  },
  checkedBorderBottom: {
    borderBottomColor: theme.colors.MAIN_RED,
  },
  checkedTextColor: {
    color: theme.colors.DEFAULT_WHITE,
  },
  hideBorderBottom: {
    borderBottomWidth: 0,
  },
});

type CheckBoxProps = {
  style?: StyleProp<ViewStyle>;
  text: string;
  checked?: boolean;
} & TouchableOpacityProps;

const CheckBox = ({onPress, style, text, checked}: CheckBoxProps) => {
  return (
    <TouchableOpacity
      style={[styles.checkboxWrapper, checked && styles.checkedBorderBottom]}
      onPress={onPress}>
      <View style={[styles.checkIcon, style]}>
        {checked && (
          <Image style={styles.checkImage} source={assets.icon_check_red} />
        )}
      </View>
      <StyledText type="h4_normal" color={checked ? 'DARK_GRAY' : 'GRAY_100'}>
        {text || '--'}
      </StyledText>
    </TouchableOpacity>
  );
};

export default CheckBox;
