import {GET_FEED} from '../Constants';

export default (state = [], action) => {
  switch (action.type) {
    case GET_FEED:
      return action.payload.articles;
    default:
      return state;
  }
}