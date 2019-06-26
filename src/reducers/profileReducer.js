import { GET_PROFILE, CLEAR_PROFILE } from '../Constants';

export default (state = null, action) => {
  switch(action.type) {
    case GET_PROFILE:
      return action.payload;
    case CLEAR_PROFILE:
      return {};
    default:
      return state
  }
}