import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import theme from '../../commons/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: theme.colors.black,
  },
});

const LoadingView = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={theme.colors.MAIN_RED} size="large" />
    </View>
  );
};

export default LoadingView;
