import axios from 'axios';
import regeneratorRuntime, { async } from 'regenerator-runtime'; //eslint-disable-line

const api = axios.create({
  baseURL: `http://localhost:7000/api`,
});
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg2MWQ3YzlkLWE4YTgtNDMwOC1iY2U4LTJjNmM2YTY2Yzg0MSIsImVtYWlsIjoibWFuYWdlcjFAY29kLmJlIiwiaWF0IjoxNjUzMjQ3NjU0LCJleHAiOjE2NTMyNTEyNTR9.d74go7tO2t_lZvJ_P3gCr-LI9kqdcOth24qDwtlYIYE';
export const getTrip = (id) => {
  return new Promise(async (resolve, reject) => { //eslint-disable-line
    try {
      const tripRes = await api.get(`v1/trip/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      resolve(tripRes.data);
    } catch (error) {
      if (error.response) {
        reject(error.response.data);
      }
      reject(error.message);
    }
  });
};
export const getProfile = (userId) => {
  return new Promise(async (resolve, reject) => { //eslint-disable-line
    try {
      const profileRes = await api.get(`v1/user/profile/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      resolve(profileRes.data);
    } catch (error) {
      if (error.response) {
        reject(error.response.data);
      }
      reject(error.message);
    }
  });
};