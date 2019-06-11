import { authHeader } from "../Helpers/authHeader";
import { API_ENDPOINTS } from "../Constants/index";
import axios from "axios";

export const Service = {
  login,
  logout,
  getAllTags,
  getListView,
  register
};

function login(inforUser) {
  return axios
    .post(API_ENDPOINTS.LOGIN.path, inforUser, authHeader())
    .then(user => {
      localStorage.setItem("user", JSON.stringify(user.data));
      return user.data;
    });
}
function register(user) {
  return axios
    .post(API_ENDPOINTS.CREATE_USERS.path, user, authHeader())
    .then(res => {
      localStorage.setItem("user", JSON.stringify(res.data));
      return res.data;
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
    });
}

function getListView(offset = 0, limit = 10) {
  return axios.get(API_ENDPOINTS.GET_LIST_ARTICLE.path, {
    params: {
      offset: offset,
      limit: limit
    }
  });
}
