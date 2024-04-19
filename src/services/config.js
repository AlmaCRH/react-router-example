import axios from "axios";

//Creamos nuestra instancia de axios
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default api
