import React, {ReactChild} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import assets from '../../../assets';
import StyledText from '../../commons/StyledText';
import theme from '../../commons/theme';

const Section = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactChild;
}) => {
  return (
    <View
      style={[
        theme.styles.globalPaddingHorizontal,
        {marginVertical: 30, alignItems: 'center'},
      ]}>
      <StyledText type="titleEnglish">{title}</StyledText>
      <StyledText type="contentTitle">{description}</StyledText>
      <View style={styles.body}>{children}</View>
    </View>
  );
};
export default Section;

const styles = StyleSheet.create({
  body: {
    marginVertical: 30,
  },
});
