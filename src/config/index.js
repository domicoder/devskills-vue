import axios from "axios";

const authLS = localStorage.getItem("auth");

let auth;

if (authLS) {
  auth = JSON.parse(authLS);
}
if (auth) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + auth.accessToken;
}

window.axios = axios;

export default axios;
