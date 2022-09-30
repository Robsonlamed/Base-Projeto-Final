import axios from 'axios'
import { ApiServiceW3 } from '../config'

export type GetProdutoProps = {
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

export const GetProduto = async (
  query: string,
  page: number,
  classificacao?: 'EM_ALTA' | 'EM_BAIXA'
): Promise<GetProdutoProps> => {
  try {
    const result = await ApiServiceW3.get('/produto', {
      params: {
        query,
        classificacao,
        page,
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

export type GetProdutoClientesProps = {
  quantidade: number
  id: number
  nome: string
  percentual: number
}[]

export const GetProdutoClientesStatus = async (
  id: string,
  classificacao: 'EM_ALTA' | 'EM_BAIXA'
): Promise<GetProdutoClientesProps> => {
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

export type GetProdutoResumoProps = {
  media120Dias: number
  nome: string
  percentualUltimos30Dias: number
  ultimos120Dias: number
  ultimos30Dias: number
  ultimos60Dias: number
  ultimos90Dias: number
}

export const GetProdutoResumo = async (
  id: string
): Promise<GetProdutoResumoProps> => {
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

export type GetProdutoStatusProps = {
  quantidade: number
  id: number
  nome: string
  percentual: number
}[]

export const GetProdutoStatus = async (
  id: string,
  classificacao: 'EM_ALTA' | 'EM_BAIXA'
): Promise<GetProdutoClientesProps> => {
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

export type GetProdutoResumoClientesProps = {
  media120Dias: number
  nome: string
  percentualUltimos30Dias: number
  ultimos120Dias: number
  ultimos30Dias: number
  ultimos60Dias: number
  ultimos90Dias: number
}

export const GetProdutoResumoClientes = async (
  id: string
): Promise<GetProdutoResumoClientesProps> => {
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
