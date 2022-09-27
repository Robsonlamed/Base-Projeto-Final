import axios from 'axios'
import { ApiServiceW3 } from '../config'

export type GetDashBoardResumoProps = {
  percentualTotalClientesAlta: number
  percentualTotalClientesBaixa: number
  percentualTotalProdutosAlta: number
  percentualTotalProdutosBaixa: number
  percentualVariacaoClientesAlta: number
  percentualVariacaoClientesBaixa: number
  percentualVariacaoProdutosAlta: number
  percentualVariacaoProdutosBaixa: number
  quantidadeClientesAlta: number
  quantidadeClientesBaixa: number
  quantidadeProdutosAlta: number
  quantidadeProdutosBaixa: number
}

export const getDashBoardResumo = async (
  dataInicio: string,
  dataFim: string
): Promise<GetDashBoardResumoProps> => {
  try {
    const result = await ApiServiceW3.get('/dashboard/resumo', {
      params: {
        dataFim,
        dataInicio,
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
