import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
// import KeyboardAvoidingScrollView from '#components/KeyboardAvoidingScrollView';
import theme from '../../commons/theme';
import StyledText from '../../commons/StyledText';
import assets from '../../../assets';
import CheckBox from '../../components/common/CheckBox';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthStackParamList} from '../../nav/AppContainer';
import SimpleToast from 'react-native-simple-toast';
import BigButton from '../../components/common/BigButton';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import InputForm from '../../components/common/InputForm';
import MyInput from '../../components/common/MyInput';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  contentContainer: {paddingVertical: 28, paddingHorizontal: 20},
  title: {
    ...theme.fonts.pageTitle,
    marginBottom: 50,
  },
  agreementContainer: {},
  agreementHeader: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.GRAY_000,
    marginBottom: 10,
  },
  subAgreementContainer: {},
  subAgreement: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  subAgreementCheckbox: {flex: 1},
  subAgreeIconContainer: {
    backgroundColor: 'transparent',
  },
  agreementArrowIcon: {width: 15, height: 15},
  languageBtnBox: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 5,
    marginRight: 20,
  },
  imageWrap: {
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: '11%',
  },
  slideImage: {
    width: width,
    // width: SLIDE_W,
    // height: width < 390 ? 476 : 550,
    height: '100%',
    marginBottom: 0.4,
  },
  imageBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(41,41,41,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneImage: {
    height: width < 390 ? 660 : 724,
    width: width < 390 ? 335 : 375,
  },
  round: {
    width: 66,
    height: 66,
  },
  shape: {
    width: 73,
    height: 74,
  },
  chevron: {
    width: 16,
    height: 16,
  },
  buttonModalBox: {
    width: '100%',
    height: 100,
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    flexDirection: 'column',
    paddingBottom: 0,
    backgroundColor: theme.colors.MAIN_RED,
    borderColor: theme.colors.MAIN_RED,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  subText: {
    fontSize: 12,
    color: theme.colors.MAIN_RED,
  },
  subTextBorder: {
    borderBottomColor: theme.colors.MAIN_RED,
    borderBottomWidth: 1,
    marginTop: 2,
  },
});

export type AgreeForm = {
  /** ??? 14??? ?????? ?????? (??????)*/
  isOverFourteen: boolean;
  /** ????????? ???????????? (??????)*/
  isServiceTerms: boolean;
  /** ???????????? ?????? ??? ?????? (??????)*/
  isPrivacyCollection: boolean;
  /** ????????? ?????? ?????? (??????)*/
  isMarketing: boolean;
};

// export type agreeForm = AgreeForm & {
// userId: string;
// email: string;
// name: string;
// password: string;
// passwordConfirm: string;
// phoneNumber: string;
// isVerified: boolean;
// isSent?: boolean;
// verificationNumber: string;
// isVerificationNumber: boolean;
// };

const initialAgreeForm: AgreeForm = {
  isOverFourteen: false,
  isMarketing: false,
  isPrivacyCollection: false,
  isServiceTerms: false,
};

// const initialAgreeForm: agreeForm = {
//   isMarketing: false,
//   isPrivacyCollection: false,
//   isServiceTerms: false,
// };

const Signup = ({}) => {
  const [agreeForm, setagreeForm] = React.useState<AgreeForm>(initialAgreeForm);
  const {navigate} = useNavigation<StackNavigationProp<AuthStackParamList>>();

  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();
  const inset = useSafeAreaInsets();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const emailRef = React.useRef<TextInput | null>(null); // generic type
  const passwordRef = React.useRef<TextInput | null>(null);

  const onHandleWatchLog = async () => {
    // try {
    //   const res = await onPostMediaWatchLog();
    //   return res;
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const [isWatched, setIsWatched] = React.useState<boolean>(false);

  // const isNextButtonActivated = () => {
  //   if (
  //     agreeForm.isOverFourteen &&
  //     agreeForm.isMarketing &&
  //     agreeForm.isPrivacyCollection &&
  //     agreeForm.isServiceTerms
  //   ) {
  //     return true;
  //   }
  // };


  const onPressNextButton = () => {
    if (
      agreeForm.isOverFourteen &&
      agreeForm.isMarketing &&
      agreeForm.isPrivacyCollection &&
      agreeForm.isServiceTerms
    ) {
      navigate('UserInfo');
    } else {
      SimpleToast.show('?????? ????????? ??????????????????.');
    }
  };
  // const onPressConfirm = async () => {
  //   const form = {
  //     userId: agreeForm?.userId,
  //     email: agreeForm?.email,
  //     name: agreeForm?.name,
  //     phone: agreeForm?.phoneNumber,
  //     password: agreeForm?.password,
  //     passwordConfirm: agreeForm.passwordConfirm,
  //     marketingAgreement: agreeForm?.isMarketing,
  //     provideAgreement: agreeForm?.is3rdPartyProviding,
  //   };

  // if (step === 1) {
  //   setStep(prev => prev + 1);
  // } else if (step === 2) {
  //   // setIsLoading(true);
  //   const form = {
  //     userId: agreeForm?.userId,
  //     email: agreeForm?.email,
  //     name: agreeForm?.name,
  //     phone: agreeForm?.phoneNumber,
  //     password: agreeForm?.password,
  //     passwordConfirm: agreeForm.passwordConfirm,
  //     marketingAgreement: agreeForm?.isMarketing,
  //     provideAgreement: agreeForm?.is3rdPartyProviding,
  //   };
  //   // const isCheckId = await onDuplicateCheckId(agreeForm?.userId);

  //   if (isCheckId) {
  //     const res = await onAccountRegist(form);
  //     if (res) {
  //       setStep(prev => prev + 1);
  //     } else {
  //       SimpleToast.show('??????????????? ??????????????????.');
  //     }
  //   } else {
  //     SimpleToast.show('???????????? ????????? ?????????.');
  //   }

  //   setIsLoading(false);
  // } else if (step === 3) {
  //   navigate('Login');
  // }

  // const checkIdPw = () => {
  //   const result = email?.length > 0 && password?.length > 0;
  //   if (email?.length < 1) {
  //     SimpleToast.show('???????????? ???????????????');
  //   } else if (password?.length < 1) {
  //     SimpleToast.show('??????????????? ???????????????.');
  //   }
  //   return result;
  // };

  // const onPressLogin = () => {
  //   SimpleToast.show('???????????????');
  //   // setIsLoading(true);
  //   // setIsLoading(false);
  // };
  // const onPressSignUp = () => {
  //   SimpleToast.show('?????????????????? ??????');
  // };
  return (
    // <ScrollView contentContainerStyle={styles.contentContainer}>
    //   <StyledText style={styles.title}>
    //     ????????? ????????? ??????{'\n'}
    //     <StyledText isBold>????????? ??????</StyledText>??? ?????????
    //   </StyledText>
    //   <View style={styles.agreementContainer}>
    //     <View style={styles.agreementHeader}>
    //       {/* <Input.CheckBox
    //         label="????????????"
    //         labelStyle={{...Font[FontType.H3_BOLD]}}
    //       /> */}
    //     </View>
    //     <View style={styles.subAgreementContainer}>
    //       <View style={styles.subAgreement}>
    //         {/* <Input.CheckBox
    //           style={styles.subAgreementCheckbox}
    //           icon={assets.icon_check_main}
    //           iconContainerStyle={styles.subAgreeIconContainer}
    //           label="??? 14??? ?????? ?????? (??????)"
    //         /> */}
    //         {/* <CheckBox
    //           checkSize={20}
    //           style={{backgroundColor: 'pink'}}
    //           text={'??? ??? ?????? ?????????!'}
    //           // checked={isWatched}
    //           onCheck={isChecked => setIsWatched(isChecked)}
    //           // callBackApi={() => onHandleWatchLog()}
    //         /> */}
    //       </View>
    //       <View style={styles.subAgreement}>
    //         {/* <Input.CheckBox
    //           style={styles.subAgreementCheckbox}
    //           icon={assets.icon_check_gray}
    //           iconContainerStyle={styles.subAgreeIconContainer}
    //           label="????????? ???????????? (??????)"
    //         /> */}
    //         <TouchableOpacity onPress={() => {}} activeOpacity={0.75}>
    //           <Image
    //             style={styles.agreementArrowIcon}
    //             source={assets.icon_ChevronLeft2}
    //             resizeMode="contain"
    //           />
    //         </TouchableOpacity>
    //       </View>
    //       <View style={styles.subAgreement}>
    //         {/* <Input.CheckBox
    //           style={styles.subAgreementCheckbox}
    //           icon={assets.icon_check_gray}
    //           iconContainerStyle={styles.subAgreeIconContainer}
    //           label="???????????? ?????? ??? ?????? (??????)"
    //         /> */}
    //         <TouchableOpacity onPress={() => {}} activeOpacity={0.75}>
    //           <Image
    //             style={styles.agreementArrowIcon}
    //             source={assets.icon_ChevronLeft2}
    //             resizeMode="contain"
    //           />
    //         </TouchableOpacity>
    //       </View>
    //       <View style={styles.subAgreement}>
    //         {/* <Input.CheckBox
    //           style={styles.subAgreementCheckbox}
    //           icon={assets.icon_check_gray}
    //           iconContainerStyle={styles.subAgreeIconContainer}
    //           label="????????? ?????? ?????? (??????)"
    //         /> */}
    //         <TouchableOpacity onPress={() => {}} activeOpacity={0.75}>
    //           <Image
    //             style={styles.agreementArrowIcon}
    //             source={assets.icon_ChevronLeft2}
    //             resizeMode="contain"
    //           />
    //         </TouchableOpacity>
    //       </View>
    //     </View>
    //   </View>
    //   <BigButton
    //     text="??????"
    //     onPress={() => onPressConfirm()}
    //     disabled={!isNextButtonActivated}
    //   />
    // </ScrollView>
    <ScrollView
      style={{
        backgroundColor: theme.colors.GRAY_300,
      }}>
      <View
        style={{
          height: 400,
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image style={styles.slideImage} source={assets.clash_thum} />
        <View style={styles.imageBackground}>
          <StyledText
            color="DEFAULT_WHITE"
            type="pageTitle"
            style={{marginBottom: 20}}>
            ????????????
          </StyledText>
          <StyledText color="DEFAULT_WHITE" type="contentTitle">
            ????????? ????????? ?????? ????????? ??????????????????.
          </StyledText>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal:
            theme.styles.globalPaddingHorizontal.paddingHorizontal,
          paddingVertical: theme.styles.globalPaddingVertical.paddingVertical,
          // marginBottom: 100,
        }}>
        <View
          style={{
            marginBottom: 20,
          }}>
          <CheckBox
            // style={styles.checkBoxClear}
            text={'??? 14??? ?????? ?????? (??????)'}
            checked={agreeForm.isOverFourteen}
            onPress={() =>
              setagreeForm(prev => ({
                ...prev,
                isOverFourteen: !prev.isOverFourteen,
              }))
            }
          />
          <CheckBox
            // style={styles.checkBoxClear}
            text={'????????? ???????????? (??????)'}
            checked={agreeForm.isServiceTerms}
            onPress={() =>
              setagreeForm(prev => ({
                ...prev,
                isServiceTerms: !prev.isServiceTerms,
              }))
            }
          />
          <CheckBox
            // style={styles.checkBoxClear}
            text={'???????????? ?????? ??? ?????? (??????)'}
            checked={agreeForm.isPrivacyCollection}
            onPress={() =>
              setagreeForm(prev => ({
                ...prev,
                isPrivacyCollection: !prev.isPrivacyCollection,
              }))
            }
          />
          <CheckBox
            // style={styles.checkBoxClear}
            text={'????????? ?????? ?????? (??????)'}
            checked={agreeForm.isMarketing}
            onPress={() =>
              setagreeForm(prev => ({...prev, isMarketing: !prev.isMarketing}))
            }
          />
        </View>
        <BigButton text="??????" onPress={() => onPressNextButton()} />
      </View>
    </ScrollView>
  );
};;;;

export default Signup;
