import axiosClient from "./api";

export const login = async (data, callback) => {
  try {
    const response = await axiosClient.post("login", data);
    callback(true, response.data);
  } catch (error) {
    callback(false, error.message);
  }
};

export const logout = async (callback) => {
  try {
    await axiosClient.post("logout");
    callback(true);
  } catch (error) {
    callback(false, error);
  }
};
