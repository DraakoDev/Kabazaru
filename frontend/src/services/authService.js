import axios from "axios";

const API = "http://localhost:3000";

export const loginRequest = async (data) => {
  return await axios.post(`${API}/login`, data, {
    withCredentials: true
  });
};
