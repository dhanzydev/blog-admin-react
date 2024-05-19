import axios from "axios";
import Cookies from "js-cookie";

const axiosClient = axios.create({
  baseURL: "http://localhost:8800/api/",
});

axiosClient.interceptors.request.use((config) => {
  const tokenUser = Cookies.get("token");
  config.headers.Authorization = `Bearer ${tokenUser}`;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      Cookies.remove("token");
    }
    throw error;
  }
);

export default axiosClient;
