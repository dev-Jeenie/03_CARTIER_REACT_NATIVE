import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from './Home';

export type HomeStackParamList = {
  Home: undefined;
};

const HomeStackNavigator = () => {
  const Stack = React.useMemo(
    () => createStackNavigator<HomeStackParamList>(),
    [],
  );
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
export default HomeStackNavigator;
