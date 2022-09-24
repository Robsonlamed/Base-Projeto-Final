import axios from 'axios'
import { ApiServiceW3 } from '../config'

export const AuthLogin = async (email: string, senha: string) => {
  try {
    const result = await ApiServiceW3.post('/autenticacao/login', {
      email,
      senha,
    })

    if (result.status === 200) {
      ApiServiceW3.defaults.headers.common.Authorization = `${result.data.type} ${result.data.token}`
      localStorage.setItem('token', JSON.stringify(result.data))
      return { login: true }
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        return { login: false, message: 'Usuário ou senha incorreto' }
      }
      if (error.response?.status === 403) {
        return { login: false, message: 'Operação não autorizada' }
      }
      if (error.response?.status === 404) {
        return { login: false, message: 'Página não encontrada' }
      }
    }
  }
  return { login: false, message: 'Erro' }
}
