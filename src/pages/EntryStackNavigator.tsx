import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

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
  const MainDrawerNavigator = () => {
    return <></>;
  };

  return (
    <Stack.Navigator initialRouteName="MainDrawerNavigator">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="MainDrawerNavigator"
        component={MainDrawerNavigator}
      />
    </Stack.Navigator>
  );
};

export default EntryStackNavigator;
