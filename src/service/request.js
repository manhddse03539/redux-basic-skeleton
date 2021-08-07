import axios from 'axios';
import queryString from 'query-string';

// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request- config` for the full list of configs
const request = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

request.interceptors.request.use((config) => {
  // Handle token here ...
  return config;
});

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);

export default request;
