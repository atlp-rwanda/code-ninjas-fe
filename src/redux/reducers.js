import { combineReducers } from 'redux';
import backgroundColorReducer from './features/color/colorSlice';
import visibilitySliceReducer from './features/visibility/visibilitySlice';
import loginReducer from './features/auth/loginSlice';
import isLoggedReducer from './features/auth/isLoggedSlice';
import getProfileReducer from './features/profile/profileSlice';

export default combineReducers({
  backgroundColor: backgroundColorReducer,
  visibility: visibilitySliceReducer,
  login: loginReducer,
  isLogged: isLoggedReducer,
  getProfile: getProfileReducer,
});
