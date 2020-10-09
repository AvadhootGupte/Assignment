import { combineReducers } from 'redux';
import dataReducer from './Reducers';

// Combine all the reducers
const rootReducer = combineReducers({
  dataReducer,
  // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
});

export default rootReducer;
