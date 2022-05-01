import React from 'react';
import {Provider} from 'react-redux';
import {LikedProvider} from './contexts/LikedProvider';
import {OrderProvider} from './contexts/OrderProvider';
import AppContainer from './nav/AppContainer';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <LikedProvider>
        <OrderProvider>
          <AppContainer />
        </OrderProvider>
      </LikedProvider>
    </Provider>
  );
};

export default App;
