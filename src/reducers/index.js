import { loginReducer, usersReducer } from './authReducer';
import listDemoSlice from './listDemoSlice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  listDemoSlice: listDemoSlice,
  loginReducer: loginReducer,
  usersReducer: usersReducer,
});

export default rootReducer;
