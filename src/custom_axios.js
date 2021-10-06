import axios from "axios";

const instance = axios.create({
    baseURL: "https://vuejs-case-default-rtdb.firebaseio.com",
})

export default instance;

