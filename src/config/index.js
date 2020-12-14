import axios from 'axios'

//Criando a url padrão para todas as requisições
const api = axios.create({
  baseURL: "https://corebiz-test.herokuapp.com/api/v1/",
});

export default api;