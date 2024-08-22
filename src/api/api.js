import axios from "axios";
import { API_URL } from "./config";

export const register = (data) => {
  return axios.post(`${API_URL}/auth/register`, data);
};

export const login = (email, phone, password) => {
  return axios.post(`${API_URL}/auth/login`, { email, phone, password });
};

export const getUser = (userId) => {
  return axios.get(`${API_URL}/auth/user/${userId}`);
};

export const setUserHealthHistory = (data) => {
  return axios.post(`${API_URL}/healthRecord/register`, data);
};

export const getUserHealthRecord = (userId) => {
  return axios.get(`${API_URL}/healthRecord/getRecord/${userId}`);
};

export const updateUserHealthRecord = (userId, data) => {
  return axios.put(`${API_URL}/healthRecord/updateRecord/${userId}`, data);
};

export const getLatestConversation = (userId) => {
  return axios.get(`${API_URL}/conversation/getLatest/${userId}`);
};
