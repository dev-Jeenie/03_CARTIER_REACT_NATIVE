import React from 'react';
import {StyleSheet} from 'react-native';
import {LikedProvider} from './contexts/LikedProvider';
import {OrderProvider} from './contexts/OrderProvider';
import AppContainer from './nav/AppContainer';

const App = () => {
  return (
    <LikedProvider>
      <OrderProvider>
        <AppContainer />
      </OrderProvider>
    </LikedProvider>
  );
};

export default App;
