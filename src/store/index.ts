import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import rootReducer from './reducer';

const store = configureStore({
  // store는 configureStore로 만들 수 있고,
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    if (__DEV__) {
      const createDebugger = require('redux-flipper').default;
      return getDefaultMiddleware().concat(createDebugger());
    }
    return getDefaultMiddleware();
  },
  // redux-flipper와 연결하기위해 middleware를 사용한다
});

export default store;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
// 기존함수를 새로운 함수로 만든다 = 랩핑한다 (타입스크립트 때문)

// slice들이 모여서 reducer가 되고
// reducer들이 모여서 store가 된다
