import { GET_TAGLIST, GET_LISTVIEW } from "../Constants/index";
import { Service } from "../Services";
import { userConstants } from "../Constants/index";

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
  });
};
function success(user) {
  return { type: userConstants.LOGIN_REGISTER_SUCCESS, user };
}
function failure(error) {
  return { type: userConstants.LOGIN_REGISTER_FAILURE, error };
}
export const loginRegister = (User, infor) => {
  return dispatch => {
    Service.loginRegister(User, infor).then(
      user => {
        dispatch(success(user));
      },
      error => {
        dispatch(failure(error));
      }
    );
  };
};
