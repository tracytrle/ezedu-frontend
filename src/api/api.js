import axios from "axios";
import { API_URL } from "./config";

// export const register = (email, phone, password) => {
//   return axios.post(`${API_URL}/auth/register`, { email, phone, password });
// };

export const register = (data) => {
  return axios.post(`${API_URL}/auth/register`, data);
};

export const login = (email, phone, password) => {
  return axios.post(`${API_URL}/auth/login`, { email, phone, password });
};
