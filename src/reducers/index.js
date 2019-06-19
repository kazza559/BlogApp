import {combineReducers} from 'redux';
import authReducer from './authReducer';
import listViewReducer from './listViewReducer';
import tagsReducer from './tagsReducer'
import alertReducer from './alertReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  auth: authReducer,
  listView: listViewReducer,
  tags: tagsReducer,
  alertErrors : alertReducer,
  profile: profileReducer
})