import {StyleSheet} from 'react-native';

const colors = {
  DEFAULT_WHITE: '#ffffff',
  DARK_GRAY: '#151515',
  GRAY_000: 'rgb(41,41,41)',
  GRAY_100: 'rgb(80,80,80)',
  GRAY_200: 'rgb(153,153,153)',
  GRAY_300: 'rgb(230,230,230)',
  MAIN_RED: '#880B16',
} as const;

const fonts = StyleSheet.create({
  pageTitle: {
    fontSize: 28,
    // fontFamily: 'Noto Serif KR',
  },
  h3_BOLD: {
    fontSize: 20,
    // fontFamily: 'Noto Serif KR',
  },
  collectionTitle: {
    fontSize: 20,
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
  h4_normal: {
    fontSize: 16,
  },
  listTitle: {
    fontSize: 16,
    // fontFamily: 'GFS Didot',
  },
  normal: {
    fontSize: 14,
    // fontFamily: 'GFS Didot',
  },
  slideText: {
    fontSize: 16,
    // fontFamily: 'GFS Didot',
  },
});

const styles = StyleSheet.create({
  globalPaddingLeft: {paddingLeft: 20},
  globalPaddingHorizontal: {paddingHorizontal: 20},
  globalPaddingVertical: {paddingVertical: 20},
  globalPaddingVertical30: {paddingVertical: 30},
});

const theme = {
  colors,
  fonts,
  styles,
} as const;

export default theme;
