import React from 'react';
import {StyleSheet} from 'react-native';
import {OrderProvider} from './contexts/OrderProvider';
import AppContainer from './nav/AppContainer';

const App = () => {
  return (
    <OrderProvider>
      <AppContainer />
    </OrderProvider>
  );
};

export default App;
