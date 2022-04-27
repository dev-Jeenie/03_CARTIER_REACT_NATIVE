import {combineReducers} from '@reduxjs/toolkit';
import userSlice from '../slices/user';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  // slice들이 모여서 reducer가 되고
});
export type Rootstate = ReturnType<typeof rootReducer>;
export default rootReducer;
