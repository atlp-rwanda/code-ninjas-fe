import axios from 'axios';

const headers = {};
if (localStorage.token) {
  headers.token = `${localStorage.token}`;
}
export default axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers,
});
