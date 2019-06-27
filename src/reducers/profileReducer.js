import { GET_PROFILE, CLEAR_PROFILE, FOLLOW_UNFOLLOW } from '../Constants';

export default (state = null, action) => {
  switch(action.type) {
    case GET_PROFILE:
      return action.payload;
    case CLEAR_PROFILE:
      return {};
    case FOLLOW_UNFOLLOW:
      const newProfile = {...state };
      newProfile.profile.following = action.following
      return newProfile
    default:
      return state
  }
}