import { COMNNENT } from "../Constants/index";

const comments = [];
export default (state = comments, action) => {
  switch (action.type) {
    case COMNNENT.CREATE:
      return action.comments;
    default:
      return state;
  }
};
