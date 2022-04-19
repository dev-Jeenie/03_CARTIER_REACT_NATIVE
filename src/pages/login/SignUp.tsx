import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
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
});

export type AgreeForm = {
  /** 서비스 이용약관 (필수)*/
  isServiceTerms: boolean;
  /** 개인정보 처리방침 (필수)*/
  isPrivacyPolicy: boolean;
  /** 개인정보 수집 및 이용 (필수)*/
  isPrivacyCollection: boolean;
  /** 개인정보 제3자 제공 동의 (선택)*/
  is3rdPartyProviding: boolean;
  /** 마케팅 활용 동의 (선택)*/
  isMarketing: boolean;
};

export type JoinForm = AgreeForm & {
  userId: string;
  email: string;
  name: string;
  password: string;
  passwordConfirm: string;
  phoneNumber: string;
  isVerified: boolean;
  isSent?: boolean;
  verificationNumber: string;
  isVerificationNumber: boolean;
};

const initialJoinForm: JoinForm = {
  is3rdPartyProviding: false,
  isMarketing: false,
  isPrivacyCollection: false,
  isPrivacyPolicy: false,
  isServiceTerms: false,
  userId: '',
  email: '',
  name: '',
  password: '',
  passwordConfirm: '',
  phoneNumber: '',
  isVerified: false,
  isSent: undefined,
  verificationNumber: '',
  isVerificationNumber: false,
};

const Signup = ({}) => {
  const [joinForm, setJoinForm] = React.useState<JoinForm>(initialJoinForm);
  const {navigate} = useNavigation<StackNavigationProp<AuthStackParamList>>();

  const isNextButtonActivated = () => {
    if (
      joinForm.isServiceTerms &&
      joinForm.isPrivacyPolicy &&
      joinForm.isPrivacyCollection
    ) {
      return true;
    }
  };

  const onPressConfirm = async () => {
    const form = {
      userId: joinForm?.userId,
      email: joinForm?.email,
      name: joinForm?.name,
      phone: joinForm?.phoneNumber,
      password: joinForm?.password,
      passwordConfirm: joinForm.passwordConfirm,
      marketingAgreement: joinForm?.isMarketing,
      provideAgreement: joinForm?.is3rdPartyProviding,
    };

    // if (step === 1) {
    //   setStep(prev => prev + 1);
    // } else if (step === 2) {
    //   // setIsLoading(true);
    //   const form = {
    //     userId: joinForm?.userId,
    //     email: joinForm?.email,
    //     name: joinForm?.name,
    //     phone: joinForm?.phoneNumber,
    //     password: joinForm?.password,
    //     passwordConfirm: joinForm.passwordConfirm,
    //     marketingAgreement: joinForm?.isMarketing,
    //     provideAgreement: joinForm?.is3rdPartyProviding,
    //   };
    //   // const isCheckId = await onDuplicateCheckId(joinForm?.userId);

    //   if (isCheckId) {
    //     const res = await onAccountRegist(form);
    //     if (res) {
    //       setStep(prev => prev + 1);
    //     } else {
    //       SimpleToast.show('회원가입에 실패했습니다.');
    //     }
    //   } else {
    //     SimpleToast.show('사용중인 아이디 입니다.');
    //   }

    //   setIsLoading(false);
    // } else if (step === 3) {
    //   navigate('Login');
    // }
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <StyledText style={styles.title}>
        서비스 이용을 위해{'\n'}
        <StyledText isBold>약관에 동의</StyledText>해 주세요
      </StyledText>
      <View style={styles.agreementContainer}>
        <View style={styles.agreementHeader}>
          {/* <Input.CheckBox
            label="전체동의"
            labelStyle={{...Font[FontType.H3_BOLD]}}
          /> */}
        </View>
        <View style={styles.subAgreementContainer}>
          <View style={styles.subAgreement}>
            {/* <Input.CheckBox
              style={styles.subAgreementCheckbox}
              icon={assets.icon_check_main}
              iconContainerStyle={styles.subAgreeIconContainer}
              label="만 14세 이상 확인 (필수)"
            /> */}
            {/* <CheckBox
              checkSize={20}
              style={{backgroundColor: 'pink'}}
              text={'저 이 영화 봤어요!'}
              // checked={isWatched}
              onCheck={isChecked => setIsWatched(isChecked)}
              // callBackApi={() => onHandleWatchLog()}
            /> */}
          </View>
          <View style={styles.subAgreement}>
            {/* <Input.CheckBox
              style={styles.subAgreementCheckbox}
              icon={assets.icon_check_gray}
              iconContainerStyle={styles.subAgreeIconContainer}
              label="홈그릿 이용약관 (필수)"
            /> */}
            <TouchableOpacity onPress={() => {}} activeOpacity={0.75}>
              <Image
                style={styles.agreementArrowIcon}
                source={assets.icon_ChevronLeft2}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.subAgreement}>
            {/* <Input.CheckBox
              style={styles.subAgreementCheckbox}
              icon={assets.icon_check_gray}
              iconContainerStyle={styles.subAgreeIconContainer}
              label="개인정보 수집 및 이용 (필수)"
            /> */}
            <TouchableOpacity onPress={() => {}} activeOpacity={0.75}>
              <Image
                style={styles.agreementArrowIcon}
                source={assets.icon_ChevronLeft2}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.subAgreement}>
            {/* <Input.CheckBox
              style={styles.subAgreementCheckbox}
              icon={assets.icon_check_gray}
              iconContainerStyle={styles.subAgreeIconContainer}
              label="마케팅 활용 동의 (선택)"
            /> */}
            <TouchableOpacity onPress={() => {}} activeOpacity={0.75}>
              <Image
                style={styles.agreementArrowIcon}
                source={assets.icon_ChevronLeft2}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <BigButton
        text="다음"
        onPress={() => onPressConfirm()}
        disabled={!isNextButtonActivated}
      />
    </ScrollView>
  );
};

export default Signup;
