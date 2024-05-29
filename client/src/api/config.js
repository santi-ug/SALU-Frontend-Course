import axios from 'axios';
import { useToast } from 'vue-toastification';
axios.defaults.withCredentials = true;

const baseURL = 'http://localhost:8080/api/v1'; // Base URL for API

const API = axios.create({
  baseURL: baseURL,
});

API.interceptors.request.use((request) => {
  // add token from cookie to request headers
  const token = localStorage.getItem('token');
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
})

API.interceptors.response.use((response) => {

  console.log(response.data);
  if (response.data.error) {
    const toast = useToast();
    toast.error(response.data.error);
  } else if (response.data.message) {
    const toast = useToast();
    toast.success(response.data.message);
  }
  return response;
})

export { API, baseURL }; // Export the baseURL variable

