import axios from "axios";
const http = (token) => {
  const headers = {};
  if (token) {
    headers.authorization = "Bearer " + token;
  }
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL,
    headers,
    keepAlive: true,
  });
  return instance;
};

export default http;
