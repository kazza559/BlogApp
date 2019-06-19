import { authHeader } from "../Helpers/authHeader";
import { API_ENDPOINTS, REGISTER, LOGIN } from "../Constants/index";
import axios from "axios";

export const Service = {
  logout,
  getAllTags,
  getListView,
  loginRegister,
  getFeed,
  favoriteArticle,
  unfavoriteArticle,
  createArticle
};

function loginRegister(User, infor) {
  const patch = getPatch(infor);
  return axios.post(patch, User, authHeader()).then(res => {
    localStorage.setItem("user", JSON.stringify(res.data));
    return res.data;
  });
}
function getPatch(infor) {
  if (infor === LOGIN) {
    return API_ENDPOINTS.LOGIN.path;
  }
  if (infor === REGISTER) {
    return API_ENDPOINTS.CREATE_USERS.path;
  }
}

function logout() {
  localStorage.removeItem("user");
}

function getAllTags() {
  return axios
    .get(API_ENDPOINTS.GET_TAGS_LIST.path, authHeader())
    .then(response => {
      return response;
    });
}

function getListView(offset = 0, limit = 10, byTag) {
  return axios.get(API_ENDPOINTS.GET_LIST_ARTICLE.path, {
    params: {
      offset: offset,
      limit: limit,
      tag: byTag
    }
  });
}

function getFeed(offset = 0, limit = 10) {
  return axios.get(API_ENDPOINTS.GET_MY_FEED.path, {
    params: {
      offset: offset,
      limit: limit
    },
    headers: authHeader()
  });
}
function createArticle(article) {
  return axios
    .post(API_ENDPOINTS.CREATE_ARTICLE.path, article, { headers: authHeader() })
    .then(res => {
      return res.data;
    });
}

function favoriteArticle (slug)  {
  return axios.post(`${API_ENDPOINTS.FAVORITE_ARTICLE.path}${slug}/favorite`, null, {
    headers: authHeader()
  })
}

function unfavoriteArticle(slug) {
  return axios.delete(`${API_ENDPOINTS.UNFAVORITE_ARTICLE.path}${slug}/favorite`, {
    headers: authHeader()
  })
}