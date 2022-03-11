import {
  DefaultTheme,
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import StyledText from '../commons/StyledText';
import EntryStackNavigator, {
  EntryStackParamList,
} from '../pages/EntryStackNavigator';

const AppContainer = () => {
  const navRef =
    React.useRef<NavigationContainerRef<EntryStackParamList>>(null);

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
      <EntryStackNavigator />
    </NavigationContainer>
  );
};

export default AppContainer;
