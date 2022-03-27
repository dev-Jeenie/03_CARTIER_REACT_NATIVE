import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import MainDrawerNavigator from './main/MainDrawerNavigator';

export type EntryStackParamList = {
  Login: undefined;
  MainDrawerNavigator: undefined;
};

const EntryStackNavigator = () => {
  const Stack = React.useMemo(
    () => createStackNavigator<EntryStackParamList>(),
    [],
  );

  const Login = () => {
    return <></>;
  };
  return (
    <Stack.Navigator
      initialRouteName="MainDrawerNavigator"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="MainDrawerNavigator"
        component={MainDrawerNavigator}
      />
    </Stack.Navigator>
  );
};

export default EntryStackNavigator;
