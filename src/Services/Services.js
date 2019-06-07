import { authHeader } from "../Helpers/authHeader";
import { API_ENDPOINTS } from "../Constants/index";

export const Service = {
    login,
    logout,
    getAllTags
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(API_ENDPOINTS.LOGIN.path, requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

function logout() {
    localStorage.removeItem('user');
}

function getAllTags() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(API_ENDPOINTS.GET_TAGS_LIST.path, requestOptions).then(
        handleResponse
      );
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