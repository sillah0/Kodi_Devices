import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/';

// Register new user
export const register = (userData) => {
   return axios.post(`${API_URL}signup`, userData);
};

// Login user
export const login = (userData) => {
   return axios.post(`${API_URL}login`, userData);
};

// Get user profile
export const getProfile = (token) => {
   return axios.get(`${API_URL}profile`, {
      headers: { Authorization: `Bearer ${token}` }
   });
};
