import { useEffect, useState } from 'react'
import { ContainerdDashboardStyle } from '../../components/CardDashboard/styles'
import { CardPrediction } from '../../components/CardPrediction'
import { SerchPredicoes } from '../../components/Search'
import { Title } from '../../components/Title'
import {
  GetPredicoesCard,
  GetPredicoesCardProps,
} from '../../services/GetPredicao/getPredicoes'
import { colors } from '../../theme'
import { ContainerCardsPrediction } from '../../components/CardPrediction/styles'

const tabelaTitulo = ['Produto', 'Próx. compra']

export function PagePredicoes() {
  const [search, setSearch] = useState('')

  const [cardPredicao, setCardPredicao] = useState<GetPredicoesCardProps>()

  const [loading, setLoading] = useState(true)

  const startSearch = async () => {
    try {
      const result = await GetPredicoesCard(search)
      setCardPredicao(result)
      setLoading(false)
    } catch (error) {
      alert((error as any).message)
    }
  }

  useEffect(() => {
    startSearch()
  }, [])

  if (loading) {
    return (
      <Title
        texto="Carregando dados"
        tamanho={24}
        color={colors.grey900}
        marginLeft="15px"
      />
    )
  }

  return (
    <div>
      <ContainerdDashboardStyle>
        <Title
          marginLeft="10px"
          texto="Predições"
          tamanho={24}
          color={colors.grey900}
          marginBotton="30px"
        />
        <SerchPredicoes
          startSearch={startSearch}
          onChange={event => setSearch(event.target.value)}
          value={search}
          icon=""
          boxShadow="0px 7px 30px rgba(0, 0, 0, 0.1)"
          paddinLeft="20px"
          height="100px"
          marginBotton=""
        />
      </ContainerdDashboardStyle>
      <ContainerCardsPrediction>
        {cardPredicao?.content.map(dadosAPI => (
          <CardPrediction
            id={dadosAPI.id}
            name={dadosAPI.nome}
            tableTitle={tabelaTitulo}
            table={dadosAPI.produtos.map(dadosAPIProdutos => (
              <tr>
                <td className="coluna2">{dadosAPIProdutos.nome}</td>
                <td className="coluna3">{dadosAPIProdutos.proximaCompra}</td>
              </tr>
            ))}
          />
        ))}
      </ContainerCardsPrediction>
    </div>
  )
}
