import { ChevronRight } from '../../assets/icons/ChevronRight'
import { UserClient } from '../../assets/icons/UserClient'
import { ContainerdDashboardStyle } from '../../components/CardDashboard/styles'
import { LinkMenu } from '../../components/ItensMenu/styles'
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
        <Title
          marginLeft="10px"
          texto="Predições"
          tamanho={24}
          color={colors.grey900}
        />
        <SerchPredicoes
          icon=""
          boxShadow={'"0px 7px 30px rgba(0, 0, 0, 0.1)"'}
          paddinLeft="20px"
          height="100px"
          marginBotton=""
        />
      </ContainerdDashboardStyle>

      <ContainerCardsPredicoes>
        <LinkMenu color={colors.grey900} to="/informacoesclientes">
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
        </LinkMenu>
      </ContainerCardsPredicoes>
    </div>
  )
}
