import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SimpleToast from 'react-native-simple-toast';
import StyledText from '../../commons/StyledText';
import theme from '../../commons/theme';

const AddCartButton = ({id}: {id: string}) => {
  const [isSelected, setIsSeletcted] = React.useState(false);

  const addCart = (id: string) => {
    // 장바구니 추가 API 호출 코드
    setIsSeletcted(true);
    SimpleToast.show(
      isSelected
        ? `${id} 이미 추가된 상품입니다.`
        : `${id} 상품을 장바구니에 추가했습니다.`,
    );
  };

  return (
    <TouchableOpacity
      style={{
        backgroundColor: theme.colors.MAIN_RED,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={() => addCart(id)}>
      <StyledText color="DEFAULT_WHITE" isBold>
        쇼핑백에 추가하기
      </StyledText>
    </TouchableOpacity>
  );
};

export default AddCartButton;
