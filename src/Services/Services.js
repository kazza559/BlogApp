import { authHeader } from "../Helpers/authHeader";
import { API_ENDPOINTS } from "../Constants/index";
import axios from "axios";

export const Service = {
  login,
  logout,
  getAllTags,
  getListView
};

function login(username, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  };

  return fetch(API_ENDPOINTS.LOGIN.path, requestOptions)
    .then(handleResponse)
    .then(user => {
      localStorage.setItem("user", JSON.stringify(user));

      return user;
    });
}

function logout() {
  localStorage.removeItem("user");
}

function getAllTags() {
  return axios
    .get(API_ENDPOINTS.GET_TAGS_LIST.path, authHeader())
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err);
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
