import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  DefaultTheme,
  DrawerActions,
  NavigationContainer,
  NavigationContainerRef,
  useNavigation,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Dimensions, Image, useWindowDimensions, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import assets from '../../assets';
import StyledText from '../commons/StyledText';
import theme from '../commons/theme';
import BackButton from '../components/common/BackButton';
import HeaderContainer from '../components/common/HeaderContainer';
import MenuButton from '../components/common/MenuButton';
import EntryStackNavigator, {
  EntryStackParamList,
} from '../pages/EntryStackNavigator';
import Home from '../pages/home/Home';
import Login from '../pages/Login';
import SubmitIdPassword from '../pages/login/SubmitIdPassword';
import AsideMenu from './AsideMenu';
// import MainDrawerNavigator from '../pages/main/MainDrawerNavigator';

const {width} = Dimensions.get('window');

type HomeStackParamList = {
  Home: undefined;
};

const HomeStackNavigator = () => {
  const Stack = React.useMemo(
    () => createStackNavigator<HomeStackParamList>(),
    [],
  );
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

type MainDrawerParamList = {
  HomeStackNavigator: undefined;
};

const MainDrawerNavigator = () => {
  const navigation = useNavigation();

  const MainDrawer = React.useMemo(
    () => createDrawerNavigator<MainDrawerParamList>(),
    [],
  );
  return (
    <>
      <MainDrawer.Navigator
        screenOptions={{
          drawerType: 'front',
          drawerStyle: {
            width: '100%',
          },
          headerTransparent: true,
          headerTitleStyle: {color: theme.colors.DEFAULT_WHITE},
          header: () => {
            return (
              <HeaderContainer>
                <MenuButton
                  onPress={() =>
                    navigation.dispatch(DrawerActions.openDrawer())
                  }
                />
                <Image
                  source={assets.logo_w}
                  style={{
                    width: 140,
                    position: 'absolute',
                    left: width / 2 - 70,
                  }}
                  resizeMode={'contain'}
                />

                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      backgroundColor: theme.colors.DEFAULT_WHITE,
                      width: 25,
                      height: 25,
                      marginLeft: 10,
                    }}
                  />
                  <View
                    style={{
                      backgroundColor: theme.colors.DEFAULT_WHITE,
                      width: 25,
                      height: 25,
                      marginLeft: 10,
                    }}
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
          options={
            {
              // headerTransparent: false,
            }
          }
        />
      </MainDrawer.Navigator>
    </>
  );
};

const AuthStack = () => {
  const Stack = React.useMemo(() => createStackNavigator(), []);
  const inset = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTransparent: true,
        headerTitleStyle: {color: theme.colors.DEFAULT_WHITE},
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
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="SubmitIdPassword"
        component={SubmitIdPassword}
        options={{
          // headerBackgroundContainerStyle: {
          //   backgroundColor: theme.colors.GRAY_300,
          //   height: 50,
          // },
          header: () => {
            return (
              <HeaderContainer style={{borderBottomWidth: 0}}>
                <BackButton onPress={() => navigation.goBack()} />
                <Image
                  source={assets.logo_w}
                  style={{
                    width: 140,
                    position: 'absolute',
                    left: width / 2 - 70,
                  }}
                  resizeMode={'contain'}
                />

                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      backgroundColor: theme.colors.DEFAULT_WHITE,
                      width: 25,
                      height: 25,
                      marginLeft: 10,
                    }}
                  />
                  <View
                    style={{
                      backgroundColor: theme.colors.DEFAULT_WHITE,
                      width: 25,
                      height: 25,
                      marginLeft: 10,
                    }}
                  />
                </View>
              </HeaderContainer>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};

const AppContainer = () => {
  const navRef =
    React.useRef<NavigationContainerRef<EntryStackParamList>>(null);
  const Stack = React.useMemo(() => createStackNavigator(), []);
  // const {principal} = useSelector(selector => selector.auth, shallowEqual);
  const principal = true;

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
      {/* <EntryStackNavigator /> */}
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!principal ? (
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
