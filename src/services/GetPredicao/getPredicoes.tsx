import axios from 'axios'
import { ApiServiceW3 } from '../config'

export type GetPreditionCardProps = {
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

export const GetPreditionCard = async (
  query: string
): Promise<GetPreditionCardProps> => {
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

export type GetPreditionHistoricProps = {
  id: number
  nome: string
  quantidade: number
  ultimaCompra: string
}[]

export const GetPreditionHistoric = async (
  id: string
): Promise<GetPreditionHistoricProps> => {
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

export type GetPredictionEndingProps = {
  id: number
  nome: string
  quantidade: number
  ultimaCompra: string
  proximaCompra: string
}[]

export const GetPreditionEnding = async (
  id: string
): Promise<GetPredictionEndingProps> => {
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

export type GetPredictionDataClientProps = {
  email: string
  nome: string
  telefone: string
}

export const GetPreditionDataClient = async (
  id: string
): Promise<GetPredictionDataClientProps> => {
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

export const GetPreditionProductLow = async (id: string, produtoId: number) => {
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
