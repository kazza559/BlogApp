import { GET_TAGLIST } from "../Constants/index";
import { Service } from "../Services";

export const getTagList = () => {
  return dispatch => {
    Service.getAllTags().then(tag => {
      const { tags } = tag.data;
      dispatch({ type: GET_TAGLIST, tags });
    });
  };
};
