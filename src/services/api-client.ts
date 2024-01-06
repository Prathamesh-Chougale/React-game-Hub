import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "36cef8bead6a4af2b282db344889fe36",
  },
});

export default apiClient;
