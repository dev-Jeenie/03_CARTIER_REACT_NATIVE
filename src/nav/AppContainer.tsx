import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  DefaultTheme,
  DrawerActions,
  NavigationContainer,
  NavigationContainerRef,
  useNavigation,
} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import axios, {AxiosError} from 'axios';
import React from 'react';
import {
  Alert,
  Dimensions,
  Image,
  Platform,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import Config from 'react-native-config';
import EncryptedStorage from 'react-native-encrypted-storage';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SimpleToast from 'react-native-simple-toast';
import {Provider, shallowEqual, useSelector} from 'react-redux';
import assets from '../../assets';
import StyledText from '../commons/StyledText';
import theme from '../commons/theme';
import BackButton from '../components/common/BackButton';
import CartButton from '../components/common/CartButton';
import {collectionType} from '../components/common/collectionMap';
import HeaderContainer from '../components/common/HeaderContainer';
import MenuButton from '../components/common/MenuButton';
import MypageButton from '../components/common/MypageButton';
import {CartProvider} from '../contexts/CartProvider';
import Cart from '../pages/cart/Cart';
import CollectionDetail from '../pages/collection/CollectionDetail';
import EntryStackNavigator, {
  EntryStackParamList,
} from '../pages/EntryStackNavigator';
import Home from '../pages/home/Home';
import Login from '../pages/Login';
import SignUp from '../pages/login/SignUp';
import SignUpComplete from '../pages/login/SignUpComplete';
import SubmitIdPassword from '../pages/login/SubmitIdPassword';
import UserInfo from '../pages/login/UserInfo';
import Collections from '../pages/main/Collections';
import Mypage from '../pages/mypage/Mypage';
import ProductDetail from '../pages/product/ProductDetail';
import Purchase from '../pages/purchase/Purchase';
import PurchaseComplete from '../pages/purchase/PurchaseComplete';
import userSlice from '../slices/user';
import store, {useAppDispatch} from '../store';
import {Rootstate} from '../store/reducer';
import AsideMenu from './AsideMenu';
import {LogBox} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
// import MainDrawerNavigator from '../pages/main/MainDrawerNavigator';

const {width} = Dimensions.get('window');

export type HomeStackParamList = {
  Home: undefined;
  Collections: undefined;
  CollectionDetail: {
    collection_id: collectionType;
    // title: 'juste' | 'panthere' | 'love' | 'trinity' | 'ecrou';
  };
  Mypage: undefined;
  Cart: undefined;
  Purchase: undefined;
  PurchaseComplete: undefined;
  ProductDetail: {id: string};
};

const HomeStackNavigator = () => {
  const navigation = useNavigation();
  const Stack = React.useMemo(
    () => createStackNavigator<HomeStackParamList>(),
    [],
  );
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // headerTitleAlign: 'left',
        // headerTitleStyle: theme.fonts.pageTitle,
      }}
      // screenOptions={
      //   {
      // headerTitleStyle: {
      //   color: theme.colors.grayScale1000,
      //   fontSize: 16,
      //   fontWeight: '500',
      //   fontStyle: 'normal',
      //   letterSpacing: 0,
      //   maxWidth: 220,
      // },
      // headerStyle: {
      //   backgroundColor: theme.colors.defaultBackground,
      //   shadowColor: 'transparent',
      // },
      // headerTitleAlign: 'center',
      // // headerBackTitleVisible: false,
      // headerBackImage: () => (
      //   <View
      //     style={{
      //       paddingHorizontal: Platform.OS === 'ios' ? 20 : 10,
      //     }}>
      //     <Image
      //       style={{width: 24, height: 24}}
      //       source={assets.icon_ChevronLeft}
      //     />
      //   </View>
      // ),
      // }
      // }
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerBackImage: () => {
            return <BackButton onPress={() => navigation.goBack()} />;
          },
        }}
      />
      <Stack.Screen name="Purchase" component={Purchase} />
      <Stack.Screen
        name="PurchaseComplete"
        component={PurchaseComplete}
        // options={{
        //   headerBackImage: () => {
        //     return <BackButton onPress={() => navigation.goBack()} />;
        //   },
        // }}
      />

      <Stack.Screen
        name="Collections"
        component={Collections}
        // options={{
        //   header: () => {
        //     return (
        //       <HeaderContainer
        //         style={{borderBottomWidth: 0, backgroundColor: 'pink'}}>
        //         <BackButton onPress={() => navigation.goBack()} />
        //         <Image
        //           source={assets.logo_w}
        //           style={{
        //             width: 140,
        //             position: 'absolute',
        //             left: width / 2 - 70,
        //           }}
        //           resizeMode={'contain'}
        //         />

        //         <View
        //           style={{
        //             flexDirection: 'row',
        //           }}>
        //           {/* <View
        //             style={{
        //               backgroundColor: theme.colors.DEFAULT_WHITE,
        //               width: 25,
        //               height: 25,
        //               marginLeft: 10,
        //             }}
        //           /> */}
        //           <MypageButton onPress={() => navigation.navigate('Mypage')} />
        //           <View
        //             style={{
        //               backgroundColor: theme.colors.DEFAULT_WHITE,
        //               width: 25,
        //               height: 25,
        //               marginLeft: 10,
        //             }}
        //           />
        //         </View>
        //       </HeaderContainer>
        //     );
        //   },
        // }}
      />
      <Stack.Screen
        name="CollectionDetail"
        component={CollectionDetail}
        options={{}}
      />
      <Stack.Screen name="Mypage" component={Mypage} options={{}} />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{}}
      />
    </Stack.Navigator>
  );
};

type MainDrawerParamList = {
  HomeStackNavigator: undefined;
  Mypage: undefined;
  Cart: undefined;
};

const MainDrawerNavigator = () => {
  const navigation = useNavigation<StackNavigationProp<MainDrawerParamList>>();

  const MainDrawer = React.useMemo(
    () => createDrawerNavigator<MainDrawerParamList>(),
    [],
  );
  return (
    // <CartProvider>
    // </CartProvider>
    <MainDrawer.Navigator
      screenOptions={{
        drawerType: 'front',
        drawerStyle: {
          width: '100%',
        },
        headerTransparent: true,
        // headerTitleStyle: {color: theme.colors.DEFAULT_WHITE},
        header: () => {
          return (
            <HeaderContainer>
              <MenuButton
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                style={{
                  position: 'absolute',
                  left: 20,
                }}
              />
              <TouchableOpacity
              // onPress={() => navigation.navigate('HomeStackNavigator')}
              >
                <Image
                  source={assets.logo_r}
                  style={{
                    width: 130,
                  }}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>

              <View
                style={{
                  flexDirection: 'row',
                  position: 'absolute',
                  right: 20,
                }}>
                <MypageButton onPress={() => navigation.navigate('Mypage')} />
                <CartButton
                  onPress={() => navigation.navigate('Cart')}
                  style={{marginLeft: 10}}
                />
              </View>
            </HeaderContainer>
          );
        },
      }}
      drawerContent={prop => <AsideMenu {...prop} />}>
      <MainDrawer.Screen
        name="HomeStackNavigator"
        component={HomeStackNavigator}
        options={{
          // headerShown: false,
          headerTransparent: false,
        }}
      />
    </MainDrawer.Navigator>
  );
};

export type AuthStackParamList = {
  Login: undefined;
  SubmitIdPassword: undefined;
  SignUp: undefined;
  UserInfo: undefined;
  SignUpComplete: undefined;
  MainDrawerNavigator: undefined;
};
export type AuthStackNavigationProp = StackNavigationProp<AuthStackParamList>;

const AuthStack = () => {
  const Stack = React.useMemo(
    () => createStackNavigator<AuthStackParamList>(),
    [],
  );
  const inset = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={
        {
          // headerTransparent: true,
          // headerTitleStyle: {color: theme.colors.DEFAULT_WHITE},
          // header: () => {
          //   return (
          //     <View
          //       style={{
          //         height: 100,
          //         position: 'absolute',
          //         left: width / 2 - 80,
          //         zIndex: 3,
          //         marginTop: inset.top,
          //         justifyContent: 'center',
          //       }}>
          //       <Image
          //         source={assets.logo_w}
          //         style={{
          //           width: 160,
          //         }}
          //         resizeMode={'contain'}
          //       />
          //     </View>
          //   );
          // },
        }
      }>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTransparent: true,
          // title: '',
          header: () => {
            return (
              <View
                style={{
                  height: 100,
                  position: 'absolute',
                  left: width / 2 - 80,
                  zIndex: 3,
                  marginTop: inset.top,
                  justifyContent: 'center',
                }}>
                <Image
                  source={assets.logo_w}
                  style={{
                    width: 160,
                  }}
                  resizeMode={'contain'}
                />
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        name="SubmitIdPassword"
        component={SubmitIdPassword}
        options={{
          headerShown: false,
          // headerTransparent: false,
          // headerBackgroundContainerStyle: {
          //   backgroundColor: theme.colors.GRAY_300,
          //   height: 50,
          // },
          //   header: () => {
          //     return (
          //       <HeaderContainer style={{borderBottomWidth: 0}}>
          //         <BackButton onPress={() => navigation.goBack()} />
          //         <Image
          //           source={assets.logo_w}
          //           style={{
          //             width: 140,
          //             position: 'absolute',
          //             left: width / 2 - 70,
          //           }}
          //           resizeMode={'contain'}
          //         />
          //         <View
          //           style={{
          //             flexDirection: 'row',
          //           }}>
          //           <View
          //             style={{
          //               backgroundColor: theme.colors.DEFAULT_WHITE,
          //               width: 25,
          //               height: 25,
          //               marginLeft: 10,
          //             }}
          //           />
          //           <View
          //             style={{
          //               backgroundColor: theme.colors.DEFAULT_WHITE,
          //               width: 25,
          //               height: 25,
          //               marginLeft: 10,
          //             }}
          //           />
          //         </View>
          //       </HeaderContainer>
          //     );
          //   },
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UserInfo"
        component={UserInfo}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUpComplete"
        component={SignUpComplete}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MainDrawerNavigator"
        component={MainDrawerNavigator}
        options={{
          header: () => <></>,
        }}
      />
    </Stack.Navigator>
  );
};
LogBox.ignoreAllLogs(); //Ignore all log notifications

const AppContainer = () => {
  const navRef =
    React.useRef<NavigationContainerRef<EntryStackParamList>>(null);
  const Stack = React.useMemo(() => createStackNavigator(), []);
  // const {principal} = useSelector((state: any) => state.auth, shallowEqual);
  // const principal = false;
  const isLoggedIn = useSelector((state: Rootstate) => !!state.user.email);
  const dispatch = useAppDispatch();
  // 전체상태인 rootReducer의 state 안에서 email을 꺼낸 것.
  // 앱을 껐다가 켰을 때 refreshToken이 만료되었을수도 있으니 다시 서버로 보내서 검증을해야함
  // 검증을 통과하면 다시 dispatch해서 accessToken을 재발급 받게하고
  // 만료되어서 검증을 통과하지못했으면 다시 로그인하라고 보내야함

  const initLogin = () => {
    // refreshToken이 있는지없는지 확인하는 사이, 유저는 잠깐동안 로그인화면을 보게된다. 그럼 헷갈릴 수도 있으니 일단 앱을 시작하면 무조건 splash 화면을 띄운다
    // splash가 떠있는 사이에 얼른 로그인되어있는 상태인지 아닌지를 체크한다.
    const getTokenAndRefresh = async () => {
      try {
        SimpleToast.show('로그인 확인 중입니다...');
        // const token = await EncryptedStorage.getItem('refreshToken');
        // if (!token) {
        //   // refreshToken이 만료되었으면
        //   SplashScreen.hide();
        //   return;
        // }
        // const res = await axios.post(
        //   `${Config.API_URL}/refreshToken`,
        //   {},
        //   {
        //     headers: {
        //       authorization: `Bearer ${token}`,
        //     },
        //   },
        // );
        // refreshToken은 token이 올바르다면, 응답에다가 name, email, refreshToken을 보내줌
        SimpleToast.show('로그인되었습니다.');
        // dispatch(
        //   userSlice.actions.setUser({
        //     name: res.data.data.name,
        //     email: res.data.data.email,
        //     refreshToken: res.data.data.refreshToken,
        //   }),
        // );
      } catch (error) {
        console.error(error);
        if ((error as AxiosError).response?.data.code === 'expired') {
          Alert.alert('로그인 만료', '다시 로그인 해주세요');
        }
      } finally {
        SplashScreen.hide();
      }
    };
    getTokenAndRefresh();
  };

  React.useEffect(() => {
    initLogin();
    // useEffect에서 async를 못써서 이렇게 하고 실행시킴
  }, [dispatch]);
  // dispatch는 불변하지만, 이게 불변하다는 걸 esLint가 모르기때문에 넣어줌(navigation도 동일). 사실상 빈배열이라 앱 실행할 때만 한번 실행됨

  return (
    <NavigationContainer
      ref={navRef}
      theme={{
        ...DefaultTheme,
        dark: false,
        colors: {
          ...DefaultTheme.colors,
          background: '#ffffff',
          card: '#ffffff',
        },
      }}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!isLoggedIn ? (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        ) : (
          <Stack.Screen
            name="MainDrawerNavigator"
            component={MainDrawerNavigator}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
