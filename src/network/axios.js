import axios from "axios";

//baseUrl to make request with database
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
