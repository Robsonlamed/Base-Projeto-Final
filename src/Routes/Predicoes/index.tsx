import { useEffect, useState } from 'react'
import { ContainerdDashboardStyle } from '../../components/CardDashboard/styles'
import { CardPrediction } from '../../components/CardPrediction'
import { SearchPrediction } from '../../components/Search'
import { Title } from '../../components/Title'
import load from '../../assets/images/load.svg'

import {
  GetPreditionCard,
  GetPreditionCardProps,
} from '../../services/GetPredicao/getPredicoes'
import { colors } from '../../theme'
import { ContainerCardsPrediction } from '../../components/CardPrediction/styles'
import { Logo } from '../../components/Menu/styles'

const tableTitulo = ['Produto', 'Próx. compra']

export function PagePredicoes() {
  const [search, setSearch] = useState('')

  const [cardPrediction, setCardPrediction] = useState<GetPreditionCardProps>()

  const [loading, setLoading] = useState(true)

  const startSearch = async () => {
    try {
      const result = await GetPreditionCard(search)
      setCardPrediction(result)
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
      <Logo
        marginLeft="500px"
        width="200px"
        height="200px"
        src={load}
        alt="load"
      />
    )
  }

  return (
    <div>
      <ContainerdDashboardStyle>
        <Title
          marginLeft="10px"
          text="Predições"
          size={24}
          color={colors.grey900}
          marginBotton="30px"
        />
        <SearchPrediction
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
        {cardPrediction?.content.map(dadosAPI => (
          <CardPrediction
            key={dadosAPI.id}
            id={dadosAPI.id}
            name={dadosAPI.nome}
            tableTitle={tableTitulo}
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
