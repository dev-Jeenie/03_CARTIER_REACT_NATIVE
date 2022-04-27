import {combineReducers} from 'redux';
import {auth} from '../reducer/auth/reducer';
// import {code} from '../reducer/code/reducer';

const AppReducer = combineReducers({
  auth,
  // code,
});

export default AppReducer;
