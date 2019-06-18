import { GET_TAGLIST, GET_LISTVIEW, GET_FEED } from "../Constants/index";
import { Service } from "../Services";
import { userConstants } from "../Constants/index";
import {  CREATE_EDIT_ARTICLE } from "../Constants/index";
import { alertActions } from "../actions/alert.actions";
import { history } from './../Helpers/history';

export const getTagList = () => {
  return dispatch => {
    Service.getAllTags().then(tag => {
      const { tags } = tag.data;
      dispatch({ type: GET_TAGLIST, tags });
    });
  };
};

export const getListView = (offset, limit, byTag) => async dispatch => {
  const response = await Service.getListView(offset, limit, byTag);
  dispatch({
    type: GET_LISTVIEW,
    payload: response.data
  });
};

export const getFeed = (offset, limit) => async dispatch => {
  const response = await Service.getFeed(offset,limit);
  dispatch({
    type: GET_FEED,
    payload: response.data
  })
}
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
        dispatch(alertActions.clear());
        history.push('/');
      },
      error => {
        const { errors } = error.response.data;
        dispatch(failure(errors));
        dispatch(alertActions.error(errors));
      }
    );
  };
};
export const logout = () => {
  Service.logout();
  history.push('/');
  return { type: userConstants.LOGOUT };
};

export const clearMessege = () => {
  return dispatch => {
      dispatch(alertActions.clear());
  };
};
export const createArticle = (article) => {
  return dispatch => {
    Service.createArticle(article).then(
      newArticle => {
        dispatch({ type: CREATE_EDIT_ARTICLE.CREATE, newArticle });
        dispatch(alertActions.clear());
        history.push('/');
      },
      error => {
        const { errors } = error.response.data;
        dispatch(alertActions.error(errors));
      }
    );
  };
};