import React, {useState} from 'react';
import {
  FlexStyle,
  GestureResponderEvent,
  Image,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import assets from '../../../assets';
import StyledText from '../../commons/StyledText';
import theme from '../../commons/theme';

const styles = StyleSheet.create({
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: theme.colors.GRAY_200,
    borderBottomWidth: 1,
  },
  checkIcon: {
    borderRadius: 50,
    backgroundColor: theme.colors.GRAY_200,
    width: 25,
    height: 25,
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginRight: 9,
  },
  checkImage: {
    width: 12,
    height: 9,
    alignSelf: 'center',
  },
  checkText: {
    color: theme.colors.GRAY_200,
  },
  checkedBackground: {
    backgroundColor: theme.colors.MAIN_RED,
  },
  borderBottom: {
    borderBottomWidth: 1,
  },
  checkedBorderBottom: {
    borderBottomColor: theme.colors.DEFAULT_WHITE,
  },
  checkedTextColor: {
    color: theme.colors.DEFAULT_WHITE,
  },
  hideBorderBottom: {
    borderBottomWidth: 0,
  },
});
interface ICallBack {
  ok: boolean;
  status: number;
}
type CheckBoxProps = {
  checkSize?: FlexStyle['width'];
  style?: StyleProp<ViewStyle>;
  text: string;
  hideBorderBottom?: boolean;
  checked?: boolean;
  onCheck: (isChecked: boolean) => void;
  callBackApi: () => Promise<ICallBack | undefined>;
} & TouchableOpacityProps;

const CheckBox: React.FunctionComponent<CheckBoxProps> = ({
  checkSize,
  onPress,
  callBackApi,
  ...props
}) => {
  const [checked, setChecked] = useState<boolean>(props.checked ?? false);

  React.useEffect(() => {
    setChecked(Boolean(props.checked));
  }, [props.checked]);

  React.useEffect(() => {
    props?.onCheck(checked);
  }, [checked]);

  const handlePress: TouchableOpacityProps['onPress'] = React.useCallback(
    async (event: GestureResponderEvent) => {
      const ok = await callBackApi();
      if (ok) {
        setChecked(prev => !prev);
        onPress?.(event);
      }
    },
    [onPress, callBackApi],
  );

  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.checkboxWrapper,
        checked && styles.checkedBorderBottom,
        props.hideBorderBottom && styles.hideBorderBottom,
        props.style,
      ]}
      onPress={handlePress}>
      <View
        style={[
          styles.checkIcon,
          checked && styles.checkedBackground,
          {width: checkSize ?? 25, height: checkSize ?? 25},
        ]}>
        <Image style={styles.checkImage} source={assets.icon_close} />
      </View>
      <StyledText type="h4_normal">{props.text}</StyledText>
    </TouchableOpacity>
  );
};

export default CheckBox;
