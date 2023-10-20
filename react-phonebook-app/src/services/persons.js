import axios from "axios";

const baseURL = "http://localhost:3001/contacts/";

function getAll() {
  return axios.get(baseURL);
}

function create(newObject) {
  return axios.post(baseURL, newObject);
}

export default { getAll, create };
