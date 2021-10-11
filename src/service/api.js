import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyBA4GDFYpdkC8EgQEUzx4WfDM7IkZ_NTdM",
  },
});

export default request;
