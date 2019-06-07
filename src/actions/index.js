import { GET_TAGLIST } from "../Constants/index";
import { Service } from "../Services";

export const getTagList = () => {
  return dispatch => {
    Service.getAllTags().then(tag => {
      tag = tag.tags;
      dispatch({ type: GET_TAGLIST, tag });
    });
  };
};
