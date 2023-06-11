import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:9000/v1/app",
});

export default instance;
