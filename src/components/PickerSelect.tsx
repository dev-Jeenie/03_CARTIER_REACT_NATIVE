import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import RNPickerSelect, {PickerStyle} from 'react-native-picker-select';
import theme from '../commons/theme';

const PickerSelect = ({
  onValueChange,
  value,
  items,
  isSmall,
}: {
  onValueChange: (value: string) => void;
  value: string | number;
  items: {label: string; value: string}[];
  isSmall?: boolean;
}) => {
  return (
    <RNPickerSelect
      onValueChange={onValueChange}
      value={value}
      placeholder={{label: '선택하세요', value: 'none'}}
      items={items}
      style={{
        placeholder: {color: theme.colors.GRAY_100},
        iconContainer: {},
        inputIOSContainer: {
          flex: 1,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: theme.colors.GRAY_200,
          paddingHorizontal: 10,
          paddingVertical: 5,
          width: isSmall ? 70 : 100,
          alignItems: 'center',
        },
        inputAndroidContainer: {
          backgroundColor: 'pink',
        },
      }}
    />
  );
};

export default PickerSelect;
