import { combineReducers } from 'redux';
import backgroundColorReducer from './features/color/colorSlice';
import visibilitySliceReducer from './features/visibility/visibilitySlice';

export default combineReducers({
  backgroundColor: backgroundColorReducer,
  visibility: visibilitySliceReducer,
});
