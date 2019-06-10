import {GET_LISTVIEW} from '../Constants';

export default (state = [], action) => {
  switch (action.type) {
    case GET_LISTVIEW:
      return action.payload.articles;
    default:
      return state;
  }
}