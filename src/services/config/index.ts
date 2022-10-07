import axios from 'axios'

export const ApiServiceW3 = axios.create({
  baseURL: 'https://api.teste.predicao.w3erp.com.br/',
})
