import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:9020/api/v1", //for the localhost
  //baseURL: "https://api.assosa.com.ng/api/v1", // for production
});
