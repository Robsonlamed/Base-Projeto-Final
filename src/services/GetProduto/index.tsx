import axios from 'axios'
import { ApiServiceW3 } from '../config'

export type GetProductProps = {
  content: {
    classificacao: 'EM_ALTA' | 'EM_BAIXA'
    id: number
    nome: string
    percentual: number
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

export const GetProduct = async (
  query: string,
  page: number,
  classificacao?: 'EM_ALTA' | 'EM_BAIXA'
): Promise<GetProductProps> => {
  try {
    const result = await ApiServiceW3.get('/produto', {
      params: {
        query,
        classificacao,
        page: page - 1,
        size: 7,
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

export type GetProductClientProps = {
  quantidade: number
  id: number
  nome: string
  percentual: number
}[]

export const GetProductClientStatus = async (
  id: string,
  classificacao: 'EM_ALTA' | 'EM_BAIXA'
): Promise<GetProductClientProps> => {
  try {
    const result = await ApiServiceW3.get(`/produto/${id}/clientes`, {
      params: {
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

export type GetProductSummaryProps = {
  media120Dias: number
  nome: string
  percentualUltimos30Dias: number
  ultimos120Dias: number
  ultimos30Dias: number
  ultimos60Dias: number
  ultimos90Dias: number
}

export const GetProductSummary = async (
  id: string
): Promise<GetProductSummaryProps> => {
  try {
    const result = await ApiServiceW3.get(`/produto/${id}/resumo`)

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

export type GetProductStatusProps = {
  quantidade: number
  id: number
  nome: string
  percentual: number
}[]

export const GetProductStatus = async (
  id: string,
  classificacao: 'EM_ALTA' | 'EM_BAIXA'
): Promise<GetProductStatusProps> => {
  try {
    const result = await ApiServiceW3.get(`/cliente/${id}/produtos`, {
      params: {
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

export type GetProductSummaryClientProps = {
  media120Dias: number
  nome: string
  percentualUltimos30Dias: number
  ultimos120Dias: number
  ultimos30Dias: number
  ultimos60Dias: number
  ultimos90Dias: number
}

export const GetProductSummaryClient = async (
  id: string
): Promise<GetProductSummaryClientProps> => {
  try {
    const result = await ApiServiceW3.get(`/cliente/${id}/resumo`)

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
