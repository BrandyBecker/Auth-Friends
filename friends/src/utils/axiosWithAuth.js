import axios from "axios";

export const axiosWithAuth = () => {
  // return new instance of axios
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "http://localhost:5000",
    headers: {
      Authorization: token
    }
  });
  // with create function we can pass in configuration object
};
