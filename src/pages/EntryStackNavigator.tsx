import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import Login from './Login';
import MainDrawerNavigator from './main/MainDrawerNavigator';

export type EntryStackParamList = {
  Login: undefined;
  MainDrawerNavigator: undefined;
};

const AuthStack = () => {
  const Stack = React.useMemo(() => createStackNavigator(), []);

  return (
    <Stack.Navigator
    // screenOptions={{
    //   headerStyle: {backgroundColor: Color[ColorType.DEFAULT_BACKGROUND]},
    //   cardStyle: {backgroundColor: Color[ColorType.DEFAULT_BACKGROUND]},
    //   headerTitleStyle: theme.fonts.PAGE_TITLE,
    //   headerTitleAlign: 'left',
    //   headerLeftContainerStyle: styles.headerLeftContainerStyle,
    //   headerBackImage: () => (
    //     <Image
    //       style={styles.headerBackImage}
    //       source={assets.icon_back}
    //       resizeMode="contain"
    //     />
    //   ),
    //   headerBackTitleVisible: false,
    // }}
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

const EntryStackNavigator = () => {
  // const {principal} = useSelector(selector => selector.auth, shallowEqual);
  const principal = false;

  const Stack = React.useMemo(() => createStackNavigator(), []);

  return (
    // <Stack.Navigator
    //   initialRouteName="MainDrawerNavigator"
    //   screenOptions={{headerShown: false}}>
    //   {principal ? (
    //     <Stack.Screen
    //       name="MainDrawerNavigator"
    //       component={MainDrawerNavigator}
    //     />
    //   ) : (
    //     <Stack.Screen name="Login" component={Login} />
    //   )}
    // </Stack.Navigator>

    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen
        name="MainDrawerNavigator"
        component={MainDrawerNavigator}
      /> */}
      {!principal && <Stack.Screen name="AuthStack" component={AuthStack} />}
    </Stack.Navigator>
  );
};

export default EntryStackNavigator;
