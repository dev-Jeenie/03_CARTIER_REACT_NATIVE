import React from 'react';
import {Image, Share, TouchableOpacity} from 'react-native';
import SimpleToast from 'react-native-simple-toast';
import assets from '../../../assets';

const ShareButton = ({id, data}: {id: string; data: any}) => {
  const onPressShare = (id: string) => {
    // 공유하기 URL 팝업 호출 코드
    SimpleToast.show(`${'카카오톡'}으로 공유했습니다`);
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Jeenie | 변화를 사랑하는 개발자, ${data.url}`,
        url: data?.url,
      });
      if (result.action === Share.sharedAction) {
        if (
          result.activityType === 'com.apple.UIKit.activity.CopyToPasteboard'
        ) {
          console.log(result.activityType);
          SimpleToast.show('URL을 복사했습니다');
        } else if (
          result.activityType === 'com.apple.UIKit.activity.AddToReadingList'
        ) {
          console.log(result.activityType);
          SimpleToast.show('읽기 목록에 추가했습니다');
        } else {
          console.log(result.activityType);
          SimpleToast.show('공유를 완료했습니다');
        }
      } else if (result.action === Share.dismissedAction) {
        SimpleToast.show('공유를 취소했습니다');
      }
    } catch (error) {
      SimpleToast.show(`${error}`);
    }
  };

  return (
    <TouchableOpacity onPress={() => onShare()}>
      <Image
        source={assets.icon_Share}
        style={{
          width: 20,
          height: 20,
        }}
      />
    </TouchableOpacity>
  );
};

export default ShareButton;

