import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyA_tMAhcfwT4Ysv1C0yth1AsxtzWRPk4yM",
  },
});

export default request;
