import axios from "axios";

const baseURL = "http://localhost:3001/api/contacts";

function getAll() {
  return axios.get(baseURL);
}

function create(newObject) {
  return axios.post(baseURL, newObject);
}

function deleteContact(id) {
  return axios.delete(`${baseURL}/${id}`);
}

export default { getAll, create, deleteContact };
