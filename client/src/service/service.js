import axios from "axios";

const appUrl = "http://localhost:8000";

export function getUserInfo() {
  return axios
    .get(`${appUrl}/users`)
    .then((res) => res.data)
    .catch((error) => error);
}

export function getUsersAge(item) {
  return axios
    .get(`${appUrl}/users/age`, { params: { item: item } })
    .then((res) => res.data)
    .catch((error) => error);
}

export function getItems() {
  return axios
    .get(`${appUrl}/users/items`)
    .then((res) => res.data)
    .catch((error) => error);
}
