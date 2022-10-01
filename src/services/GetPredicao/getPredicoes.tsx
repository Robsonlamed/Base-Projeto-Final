import axios from 'axios'
import { ApiServiceW3 } from '../config'

export type GetPredicoesCardProps = {
  content: {
    id: number
    nome: string
    produtos: {
      id: number
      nome: string
      proximaCompra: string
    }[]
  }[]

  empty: true
  first: true
  last: true
  number: number
  numberOfElements: number
  pageable: {
    offset: number
    pageNumber: number
    pageSize: number
    paged: true
    sort: {
      empty: true
      sorted: true
      unsorted: true
    }
    unpaged: true
  }
  size: number
  sort: {
    empty: true
    sorted: true
    unsorted: true
  }
  totalElements: number
  totalPages: number
}

export const GetPredicoesCard = async (
  query: string
): Promise<GetPredicoesCardProps> => {
  try {
    const result = await ApiServiceW3.get('/predicao', {
      params: {
        query,
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

export type GetPredicoesHistoricoProps = {
  id: number
  nome: string
  quantidade: number
  ultimaCompra: string
}[]

export const GetPredicoesHistorico = async (
  id: string
): Promise<GetPredicoesHistoricoProps> => {
  try {
    const result = await ApiServiceW3.get(`/predicao/${id}/historico`)

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

export type GetPredicoesEsgotandoProps = {
  id: number
  nome: string
  quantidade: number
  ultimaCompra: string
  proximaCompra: string
}[]

export const GetPredicoesEsgotando = async (
  id: string
): Promise<GetPredicoesEsgotandoProps> => {
  try {
    const result = await ApiServiceW3.get(`/predicao/${id}/esgotando`)

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

export type GetPredicoesDadosClientesProps = {
  email: string
  nome: string
  telefone: string
}

export const GetPredicoesDadosClientes = async (
  id: string
): Promise<GetPredicoesDadosClientesProps> => {
  try {
    const result = await ApiServiceW3.get(`/cliente/${id}`)

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

export type GetPredicoesBaixaProps = {
  email: string
  nome: string
  telefone: string
}

export const GetPredicoesBaixaProduto = async (
  id: string,
  produtoId: number
) => {
  try {
    const result = await ApiServiceW3.post(`/predicao/${id}/baixa`, {
      produtoId,
    })

    if (result.status === 200) {
      return { baixa: true }
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
