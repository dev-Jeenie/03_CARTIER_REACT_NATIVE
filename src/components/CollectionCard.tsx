import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import StyledText from '../commons/StyledText';

const CollectionCard = ({
  title,
  thumbnail,
  contents,
  onPress,
  isBanner,
}: {
  title: string;
  thumbnail: ImageSourcePropType;
  contents: string;
  onPress?: () => void;
  isBanner?: boolean;
}) => {
  return (
    <View style={{marginVertical: 30}}>
      <Image source={thumbnail} style={{height: 500, width: '100%'}} />
      <View style={styles.body}>
        <StyledText type="collectionTitle">{title}</StyledText>
        <StyledText style={styles.contents}>{contents}</StyledText>
        {isBanner ? (
          <></>
        ) : (
          <TouchableOpacity onPress={onPress} style={{flexDirection: 'row'}}>
            <StyledText>컬렉션 보기</StyledText>
            <StyledText>{'>'}</StyledText>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CollectionCard;

const styles = StyleSheet.create({
  body: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  contents: {
    marginVertical: 20,
  },
});
