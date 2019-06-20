import { combineReducers } from "redux";
import authReducer from "./authReducer";
import listViewReducer from "./listViewReducer";
import feedReducer from "./feedReducer";
import tagsReducer from "./tagsReducer";
import alertReducer from "./alertReducer";
import article from "./articleReducer";
import comments from "./commentReducer";

export default combineReducers({
  auth: authReducer,
  listView: listViewReducer,
  tags: tagsReducer,
  feed: feedReducer,
  alertErrors: alertReducer,
  article: article,
  comments:comments
});
