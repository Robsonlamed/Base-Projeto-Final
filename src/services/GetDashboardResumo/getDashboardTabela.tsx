import axios from 'axios'
import { ApiServiceW3 } from '../config'

export type GetDashBoardTableProps = {
  id: number
  nome: string
  percentual: number
}[]

export const GetDashBoardTableProduct = async (
  dataInicio: string,
  dataFim: string,
  classificacao: 'EM_ALTA' | 'EM_BAIXA'
): Promise<GetDashBoardTableProps> => {
  try {
    const result = await ApiServiceW3.get('/dashboard/produtos', {
      params: {
        dataFim,
        dataInicio,
        classificacao,
      },
    })

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

export const GetDashBoardTableClient = async (
  dataInicio: string,
  dataFim: string,
  classificacao: 'EM_BAIXA' | 'EM_ALTA'
): Promise<GetDashBoardTableProps> => {
  try {
    const result = await ApiServiceW3.get('/dashboard/clientes', {
      params: {
        dataFim,
        dataInicio,
        classificacao,
      },
    })

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
