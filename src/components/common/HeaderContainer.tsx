import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import theme from '../../commons/theme';

const HeaderContainer = ({
  children,
  style,
}: {
  children: any;
  style?: StyleProp<ViewStyle>;
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.header,
        style,
        {marginTop: insets.top},
        theme.styles.globalPaddingHorizontal,
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    justifyContent: 'space-between',
    // justifyContent: 'space-between',
    height: 100,
    // backgroundColor: 'pink',
    borderBottomWidth: 3,
    borderBottomColor: theme.colors.MAIN_RED,
  },
});
export default HeaderContainer;
