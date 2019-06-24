import {GET_PROFILE} from '../Constants';

export default (state = null, action) => {
  switch(action.type) {
    case GET_PROFILE:
      return action.payload;
    default:
      return state
  }
}