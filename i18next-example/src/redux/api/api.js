import axios from "axios";
import { store } from "../store/store";

export const baseUrl = {
  URL: "http://localhost:3204",
};

const Api = () => {
  const defaultOptions = {
    baseURL: baseUrl.URL,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    timeout: 100000,
  };

  let instance = axios.create(defaultOptions);

  instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["x-auth-token"] = token;
    }
    return config;
  });

  const { dispatch } = store;

  instance.interceptors.response.use(
    (response) => response,
    (err) => {
      const { status, message } = err.response.data;
      alert(message);
      if (status == 420) {
        dispatch({ type: "LOGOUT" });
      }
      return Promise.reject(err);
    }
  );

  return instance;
};

export default Api();