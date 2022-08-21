import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3333/api/v1",
});
instance.interceptors.request.use(
  (config) => {
    /*const player = JSON.parse(localStorage.getItem("player"));
    if (player && player !== undefined && player.personal_token) {
      config.params = {
        authToken: player.personal_token,
      };
    }*/
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
export default instance;
