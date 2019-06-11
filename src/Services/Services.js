import { authHeader } from "../Helpers/authHeader";
import { API_ENDPOINTS } from "../Constants/index";
import axios from "axios";

export const Service = {
  login,
  logout,
  getAllTags,
  getListView
};

function login(inforUser) {
  return axios
    .post(API_ENDPOINTS.LOGIN.path, inforUser, authHeader())
    .then(user => {
      localStorage.setItem('user', JSON.stringify(user.data));
      return user.data;
    })
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

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        logout();
        // location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

function getListView(offset=0, limit=10) {
  return axios.get(API_ENDPOINTS.GET_LIST_ARTICLE.path, {params: {
    offset: offset,
    limit: limit
  }})
}
