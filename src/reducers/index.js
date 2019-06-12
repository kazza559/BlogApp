import {combineReducers} from 'redux';
import authReducer from './authReducer';
import listViewReducer from './listViewReducer';
import tagsReducer from './tagsReducer';
import feedReducer from './feedReducer'

export default combineReducers({
  auth: authReducer,
  listView: listViewReducer,
  tags: tagsReducer,
  feed: feedReducer
})