import React from 'react';
import {StyleSheet} from 'react-native';
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

  // Provider 바깥에서는 useSelector를 못쓴다. 그래서 App에서 감싸줌