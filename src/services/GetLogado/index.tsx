import axios from 'axios'
import { ApiServiceW3 } from '../config'

export type GetDadosLogadoProps = {
  email: string
  id: number
  nome: string
}

export const GetDadosLogado = async (): Promise<GetDadosLogadoProps> => {
  try {
    const result = await ApiServiceW3.get('/usuario/me')

    if (result.status === 200) {
      return result.data
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        throw new Error('Operação não autorizada')
      }
      if (error.response?.status === 403) {
        throw new Error('Usuário não tem permissão de acesso')
      }
      if (error.response?.status === 404) {
        throw new Error('Página não encontrada')
      }
    }
  }
  throw new Error('Página em manutenção')
}
