import React from 'react';
import {Image, StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import SimpleToast from 'react-native-simple-toast';
import assets from '../../../assets';
import {productType} from '../../apis/collection';
import {setStorage} from '../../libs/AsyncStorageManager';

type likeButtonProp = {
  isCoverImage?: boolean;
  style?: StyleProp<ViewStyle>;
} & productType;

const LikeButton = ({
  id,
  name,
  image,
  des,
  price,
  isCoverImage,
  style,
}: likeButtonProp) => {
  const [isSelected, setIsSeletcted] = React.useState(false);

  const onPressLike = async (id: string) => {
    // 좋아요 전송 API 호출 코드
    setIsSeletcted(!isSelected);
    await setStorage(
      'liked_data',
      JSON.stringify([
        {id: id, size: '55', name: name, image: image, price: price, des: des},
        // ...cartData,
      ]),
    );
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
