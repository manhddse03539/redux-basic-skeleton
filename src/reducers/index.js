import listDemoSlice from './listDemoSlice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  listDemoSlice: listDemoSlice,
});

export default rootReducer;
