import {GET_LISTVIEW} from '../Constants';
const initial = {articles: [], articlesCount: 0}
export default (state = initial, action) => {
  switch (action.type) {
    case GET_LISTVIEW:
      return action.payload;
    default:
      return state;
  }
}