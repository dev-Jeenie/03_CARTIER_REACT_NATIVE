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
  LogBox,
  TouchableOpacity,
  View,
} from 'react-native';
import Config from 'react-native-config';
import EncryptedStorage from 'react-native-encrypted-storage';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SimpleToast from 'react-native-simple-toast';
import SplashScreen from 'react-native-splash-screen';
import {useSelector} from 'react-redux';
import assets from '../../assets';
import BackButton from '../components/common/BackButton';
import CartButton from '../components/common/CartButton';
import {collectionType} from '../components/common/collectionMap';
import HeaderContainer from '../components/common/HeaderContainer';
import MenuButton from '../components/common/MenuButton';
import MypageButton from '../components/common/MypageButton';
import Cart from '../pages/cart/Cart';
import CollectionDetail from '../pages/collection/CollectionDetail';
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
import {useAppDispatch} from '../store';
import {Rootstate} from '../store/reducer';
import AsideMenu from './AsideMenu';

const {width} = Dimensions.get('window');

export type HomeStackParamList = {
  Home: undefined;
  Collections: undefined;
  CollectionDetail: {
    collection_id: collectionType;
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
      }}>
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
      <Stack.Screen name="PurchaseComplete" component={PurchaseComplete} />

      <Stack.Screen name="Collections" component={Collections} />
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
    <MainDrawer.Navigator
      screenOptions={{
        drawerType: 'front',
        drawerStyle: {
          width: '100%',
        },
        headerTransparent: true,
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
              <TouchableOpacity>
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
    <Stack.Navigator initialRouteName="Login" screenOptions={{}}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTransparent: true,
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
  const navRef = React.useRef(null);
  const Stack = React.useMemo(() => createStackNavigator(), []);
  const isLoggedIn = useSelector((state: Rootstate) => !!state.user.email);
  const dispatch = useAppDispatch();

  const initLogin = () => {
    const getTokenAndRefresh = async () => {
      try {
        const token = await EncryptedStorage.getItem('refreshToken');
        if (!token) {
          SplashScreen.hide();
          return;
        }
        const res = await axios.post(
          `${Config.API_URL}/refreshToken`,
          {},
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          },
        );
        SimpleToast.show('로그인되었습니다.');
        dispatch(
          userSlice.actions.setUser({
            name: res.data.data.name,
            email: res.data.data.email,
            refreshToken: res.data.data.refreshToken,
          }),
        );
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
  }, [dispatch]);

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
