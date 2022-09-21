import { ChevronRight } from '../../assets/icons/ChevronRight'
import { UserClient } from '../../assets/icons/UserClient'
import { ContainerdDashboardStyle } from '../../components/CardDashboard/styles'
import { SerchPredicoes } from '../../components/Search'
import { TabelaCliente } from '../../components/TabelaClientes'
import { Title } from '../../components/Title'
import { colors } from '../../theme'
import {
  CardClienteStyle,
  ContainerCardCliente,
  ContainerCardsPredicoes,
  IconeChevronCliente,
  IconeUserCliente,
} from './styles'
import { SubTelaPredicoes } from './subtela'
import { TituloCardCliente } from './titulo'

const TitleTabela = ['Produto', 'Prox. compra']

const TabelaDadosAPI = [
  {
    produto: 'Papel Higiênico',
    data: '02/10/2022',
  },
  {
    produto: 'Sabonete',
    data: '05/10/2022',
  },
  {
    produto: 'Alcool em gel',
    data: '10/10/2022',
  },
]

export function PagePredicoes() {
  return (
    <div>
      <ContainerdDashboardStyle>
        <Title texto="Predições" tamanho={24} color={colors.grey900} />
        <SerchPredicoes />
        <SubTelaPredicoes />
      </ContainerdDashboardStyle>
      <ContainerCardsPredicoes>
        <ContainerCardCliente>
          <CardClienteStyle>
            <IconeUserCliente>
              <UserClient />
            </IconeUserCliente>
            <TituloCardCliente cliente="MC Donalds" status="Em alta" />
            <IconeChevronCliente>
              <ChevronRight />
            </IconeChevronCliente>
          </CardClienteStyle>
          <TabelaCliente headers={TitleTabela}>
            {TabelaDadosAPI.map(dadosAPI => (
              <tr>
                <td className="coluna2">{dadosAPI.produto}</td>
                <td className="coluna3">{dadosAPI.data}</td>
              </tr>
            ))}
          </TabelaCliente>
        </ContainerCardCliente>
      </ContainerCardsPredicoes>
    </div>
  )
}
