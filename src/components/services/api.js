import axios from "axios";

export function post(apiBaseURL, location, body) {
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios
    .post(`${apiBaseURL}${location}`, body, config)
    .then((response) => {
      return { error: null, response };
    })
    .catch((error) => {
      if (error.response) {
        return { error: error.response };
      }
    });
}

export function put(apiBaseURL, location, body) {
  return axios
    .put(`${apiBaseURL}${location}`, body)
    .then((response) => {
      return { error: null, response };
    })
    .catch((error) => {
      if (error.response) {
        return { error: error.response };
      }
    });
}

export function get(apiBaseURL, location) {
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const url = `${apiBaseURL}${location}`;
  return axios
    .get(`${url}`, config)
    .then((response) => {
      return { error: null, response };
    })
    .catch((error) => {
      if (error.response) {
        return { error: error.response };
      }
      return error;
    });
}
