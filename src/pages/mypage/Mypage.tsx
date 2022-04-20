import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import StyledText from '../../commons/StyledText';
import theme from '../../commons/theme';

const Mypage = () => {
  return (
    <ScrollView contentContainerStyle={theme.styles.globalPaddingVertical30}>
      <View style={{alignItems: 'center'}}>
        <StyledText type="pageTitle">내 계정</StyledText>
        <StyledText type="contentTitle">주문내역</StyledText>
      </View>
    </ScrollView>
  );
};

export default Mypage;

const styles = StyleSheet.create({});
