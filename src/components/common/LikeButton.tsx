import React from 'react';
import {Image, StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import SimpleToast from 'react-native-simple-toast';
import assets from '../../../assets';

const LikeButton = ({
  id,
  isCoverImage,
  style,
}: {
  id: string;
  isCoverImage?: boolean;
  style?: StyleProp<ViewStyle>;
}) => {
  const [isSelected, setIsSeletcted] = React.useState(false);

  const onPressLike = (id: string) => {
    // 좋아요 전송 API 호출 코드
    setIsSeletcted(!isSelected);
    SimpleToast.show(
      isSelected
        ? `${id} 상품을 찜한 목록에 삭제했습니다.`
        : `${id} 상품을 찜한 목록에 추가했습니다.`,
    );
  };
  if (isCoverImage)
    return (
      <TouchableOpacity onPress={() => onPressLike(id)} style={style}>
        <Image
          source={isSelected ? assets.icon_HeartFill : assets.icon_HeartStroke}
          style={{
            width: 20,
            height: 20,
            position: 'absolute',
            right: 5,
            bottom: 5,
          }}
        />
      </TouchableOpacity>
    );
  return (
    <TouchableOpacity onPress={() => onPressLike(id)} style={style}>
      <Image
        source={isSelected ? assets.icon_HeartFill : assets.icon_HeartStroke}
        style={{
          width: 20,
          height: 20,
        }}
      />
    </TouchableOpacity>
  );
};

export default LikeButton;
