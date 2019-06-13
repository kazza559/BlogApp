import {GET_FEED} from '../Constants';
const initial = {articles: [], articlesCount: 0}
export default (state = initial, action) => {
  switch (action.type) {
    case GET_FEED:
      return action.payload;
    default:
      return state;
  }
}