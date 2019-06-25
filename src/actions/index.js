import {
  GET_TAGLIST,
  GET_LISTVIEW,
  GET_FEED,
  GET_ARTICLE,
  CLEAR_ARTICLE,
  FAVORITE_ARTICLE,
  GET_PROFILE
} from "../Constants/index";
import { Service } from "../Services";
import { userConstants } from "../Constants/index";
import { CREATE_EDIT_ARTICLE } from "../Constants/index";
import { alertActions } from "../actions/alert.actions";
import { history } from "./../Helpers/history";

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
  const response = await Service.getFeed(offset, limit);
  dispatch({
    type: GET_FEED,
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
        dispatch(alertActions.clear());
        history.push("/");
      },
      error => {
        const { errors } = error.response.data;
        dispatch(failure(errors));
        dispatch(alertActions.error(errors));
      }
    );
  };
};
export const updateUser = inforEdit => {
  return dispatch => {
    Service.updateUser(inforEdit).then(
      user => {
        dispatch(success(user));
        dispatch(alertActions.clear());
        history.push("/");
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
  history.push("/");
  return { type: userConstants.LOGOUT };
};

export const clearMessege = () => {
  return dispatch => {
    dispatch(alertActions.clear());
  };
};

export const favoriteArticle = slug => async dispatch => {
  const response = await Service.favoriteArticle(slug);
  dispatch({
    type: FAVORITE_ARTICLE,
    payload: response.data
  });
};

export const unfavoriteArticle = slug => async dispatch => {
  const response = await Service.unfavoriteArticle(slug);
  dispatch({
    type: FAVORITE_ARTICLE,
    payload: response.data
  });
};
export const createArticle = article => {
  return dispatch => {
    Service.createArticle(article).then(
      article => {
        dispatch({ type: CREATE_EDIT_ARTICLE.CREATE, article });
        dispatch(alertActions.clear());
        history.push("/");
      },
      error => {
        const { errors } = error.response.data;
        dispatch(alertActions.error(errors));
      }
    );
  };
};

export const getProfile = user => async dispatch => {
  const response = await Service.getProfile(user);
  dispatch({
    type: GET_PROFILE,
    payload: response.data
  });
};
export const getArticle = slug => {
  return dispatch => {
    Service.getArticle(slug).then(
      res => {
        let article = res.article;
        dispatch({ type: GET_ARTICLE, article });
        dispatch(alertActions.clear());
      },
      error => {
        const { errors } = error.response.data;
        dispatch(alertActions.error(errors));
      }
    );
  };
};
export const editArticle = (article, slug) => {
  return dispatch => {
    Service.editArticle(article, slug).then(
      res => {
        let article = res.article;
        history.push(`/article/${article.slug}`);
        dispatch(alertActions.clear());
      },
      error => {
        const { errors } = error.response.data;
        dispatch(alertActions.error(errors));
      }
    );
  };
};
export const deleteArticle = slug => {
  return dispatch => {
    Service.deleteArticle(slug).then(
      res => {
        history.push("/");
        dispatch(alertActions.clear());
      },
      error => {
        const { errors } = error.response.data;
        dispatch(alertActions.error(errors));
      }
    );
  };
};
export const clearArticle = () => {
  return dispatch => {
    dispatch({ type: CLEAR_ARTICLE });
  };
};
