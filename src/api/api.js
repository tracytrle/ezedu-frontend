import axios from "axios";
import { API_URL } from "./config";

// export const register = (email, password) => {
//   return axios.post(`${API_URL}/auth/register`, { email, password });
// };

// export const login = (email, password) => {
//   return axios.post(`${API_URL}/auth/login`, { email, password });
// };

export const register = (email, phone, password) => {
  return axios.post(`${API_URL}/auth/register`, { email, phone, password });
};

export const login = (email, phone, password) => {
  return axios.post(`${API_URL}/auth/login`, { email, phone, password });
};
