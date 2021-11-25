import { combineReducers } from 'redux';

import appReducer from './appReducer';
import userReducer from './playerReducer';
import organizationReducer from './organizationsReducer';
import vehicleReducer from './vehicleReducer';
import weatherReducer from './weatherReducer';

const rootReducer = combineReducers({
  app: appReducer,
  authenication: userReducer,
  organization: organizationReducer,
  vehicle: vehicleReducer,
  weather: weatherReducer,
});

export default rootReducer;
