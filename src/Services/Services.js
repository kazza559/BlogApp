import { authHeader } from "../Helpers/authHeader";
import { API_ENDPOINTS } from "../Constants/index";
import axios from "axios";

export const Service = {
  login,
  logout,
  getAllTags
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
