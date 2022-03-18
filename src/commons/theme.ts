import {StyleSheet} from 'react-native';

const colors = {
  DEFAULT_WHITE: '#ffffff',
  DARK_GRAY: '#151515',
  GRAY_000: 'rgb(41,41,41)',
  GRAY_100: 'rgb(58,58,58)',
  GRAY_200: 'rgb(80,80,80)',
  GRAY_300: 'rgb(153,153,153)',
  MAIN_RED: '#880B16',
} as const;

const fonts = StyleSheet.create({
  pageTitle: {
    fontSize: 28,
    // fontFamily: 'Noto Serif KR',
  },
  contentTitle: {
    fontSize: 18,
    // fontFamily: 'Noto Serif KR',
  },
  titleEnglish: {
    fontSize: 18,
    // fontFamily: 'GFS Didot',
  },
});

const styles = StyleSheet.create({});

const theme = {
  colors,
  fonts,
  styles,
} as const;

export default theme;
