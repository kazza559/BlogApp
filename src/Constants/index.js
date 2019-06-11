export const GET_TAGLIST = "GET_TAGLIST";
export const GET_LISTVIEW = 'GET_LISTVIEW';
export const APIURL = 'https://conduit.productionready.io/api';
export const userConstants = {
  LOGIN_REGISTER_SUCCESS: 'USERS_LOGIN_REGISTER_SUCCESS',
  LOGIN_REGISTER_FAILURE: 'USERS_LOGIN_REGISTER_FAILURE',

  LOGOUT: 'USERS_LOGOUT'
}
export const API_ENDPOINTS = {
    GET_LIST_ARTICLE: {
      path: APIURL + '/articles',
      method: 'GET'
    },
    CREATE_ARTICLE: {
      path: APIURL + '/articles',
      method: 'POST'
    },
    GET_ARTICLE: {
      path: APIURL + '/articles/',
      method: 'GET'
    },
    DELETE_ARTICLE: {
      path: APIURL + '/articles/',
      method: 'DELETE'
    },
    GET_TAGS_LIST: {
      path: APIURL + '/tags',
      method: 'GET'
    },
    LOGIN: {
      path: APIURL + '/users/login',
      method: 'POST'
    },
    FOLLOW: {
      path: APIURL + '/profiles/',
      method: 'POST'
    },
    GET_PROFILE: {
      path: APIURL + '/profiles/',
      method: 'GET'
    },
    GET_COMMENTS: {
      path: APIURL + '/articles/',
      method: 'GET'
    },
    POST_COMMENTS: {
      path: APIURL + '/articles/',
      method: 'POST'
    },
    DELETE_COMMENTS: {
      path: APIURL + '/articles/',
      method: 'DELETE'
    },
    GET_MY_FEED: {
      path: APIURL + '/articles/feed',
      method: 'GET'
    },
    EDIT_USER: {
      path: APIURL + '/user',
      method: 'PUT'
    },
    CREATE_USERS: {
      path: APIURL + '/users',
      method: 'POST'
    }
  };
  
