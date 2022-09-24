import { useNavigate } from 'react-router-dom'
import { ChevronRight } from '../../assets/icons/ChevronRight'
import { EveryUser } from '../../assets/icons/EveryUser'
import { FacialCleanser } from '../../assets/icons/FacialCleanser'
import { ButtonStatus } from '../../components/ButtonStatus'
import { TabelaProduto } from '../../components/TabelaProduto'
import { TitleWithIcon } from '../../components/TitleWithIcon'
import { DashBoard } from '../../pages/Dashboard'
import { ContainerTabelasStyle } from '../../pages/tabelas/styles'
import { colors } from '../../theme'

const TitleTabela = ['ID', 'Produto', 'Percentual', ' ']
const TitleTabela1 = ['ID', 'Cliente', 'Percentual', ' ']

const TabelaDadosAPI = [
  {
    id: '001',
    produto: 'Papel Higiênico',
    percentual: '+72%',
  },
  {
    id: '002',
    produto: 'Sabonete',
    percentual: '+24%',
  },
  {
    id: '003',
    produto: 'Alcool em gel',
    percentual: '+62%',
  },
  {
    id: '004',
    produto: 'Detergente',
    percentual: '+20%',
  },
  {
    id: '005',
    produto: 'Papel Higiênico',
    percentual: '+72%',
  },
  {
    id: '006',
    produto: 'Sabonete',
    percentual: '+24%',
  },
  {
    id: '007',
    produto: 'Alcool em gel',
    percentual: '+62%',
  },
  {
    id: '008',
    produto: 'Detergente',
    percentual: '+20%',
  },
]

export function PageDashboard() {
  const navigate = useNavigate()

  const goToPage = (url: string) => {
    navigate(url)
  }
  return (
    <div>
      <DashBoard />

      <ContainerTabelasStyle margin="14vw">
        <TabelaProduto
          title={
            <TitleWithIcon
              marginLeft="10px"
              fontSize="16px"
              background={colors.azul4}
              color={colors.grey900}
              icon={<FacialCleanser color={colors.primary} />}
              title="Produtos"
            />
          }
          button={<ButtonStatus emAlta={false} />}
          width="49%"
          headers={TitleTabela}
        >
          {TabelaDadosAPI.map(dadosAPI => (
            <tr
              className="onClick"
              onClick={() => goToPage('/informacoesprodutos')}
            >
              <td className="coluna1">{dadosAPI.id}</td>
              <td className="coluna2">{dadosAPI.produto}</td>
              <td className="coluna3">{dadosAPI.percentual}</td>
              <td className="arrow">
                <ChevronRight />
              </td>
            </tr>
          ))}
        </TabelaProduto>
        <TabelaProduto
          title={
            <TitleWithIcon
              marginLeft="10px"
              fontSize="16px"
              background={colors.primary}
              color={colors.grey900}
              icon={<EveryUser />}
              title="Clientes"
            />
          }
          button={<ButtonStatus emAlta={false} />}
          width="49%"
          headers={TitleTabela1}
        >
          {TabelaDadosAPI.map(dadosAPI => (
            <tr>
              <td className="coluna1">{dadosAPI.id}</td>
              <td className="coluna2">{dadosAPI.produto}</td>
              <td className="coluna3">{dadosAPI.percentual}</td>
              <td className="arrow">
                <ChevronRight />
              </td>
            </tr>
          ))}
        </TabelaProduto>
      </ContainerTabelasStyle>
    </div>
  )
}
