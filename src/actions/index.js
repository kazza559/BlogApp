import { GET_TAGLIST, GET_LISTVIEW } from "../Constants/index";
import { Service } from "../Services";

export const getTagList = () => {
  return dispatch => {
    Service.getAllTags().then(tag => {
      const { tags } = tag.data;
      dispatch({ type: GET_TAGLIST, tags });
    });
  };
};

export const getListView = (offset, limit) => async dispatch => {
  const response = await Service.getListView(offset, limit);
  dispatch({
    type: GET_LISTVIEW,
    payload: response.data
  })
}
