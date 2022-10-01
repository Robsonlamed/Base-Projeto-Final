import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronRight } from '../../assets/icons/ChevronRight'
import { EveryUser } from '../../assets/icons/EveryUser'
import { FacialCleanser } from '../../assets/icons/FacialCleanser'
import { ButtonStatus } from '../../components/ButtonStatus'
import { TabelaProduto } from '../../components/TabelaProduto'
import { Title } from '../../components/Title'
import { TitleWithIcon } from '../../components/TitleWithIcon'
import { DashBoard } from '../../pages/Dashboard'
import { ContainerTabelasStyle } from '../../pages/tabelas/styles'
import {
  getDashBoardTabelaCliente,
  getDashBoardTabelaProduto,
  GetDashBoardTabelaProps,
} from '../../services/GetDashboardResumo/getDashboardTabela'
import { colors } from '../../theme'
import { dateHelper } from '../../utils'

const TitleTabela = ['ID', 'Produto', 'Percentual', ' ']
const TitleTabela1 = ['ID', 'Cliente', 'Percentual', ' ']

export function PageDashboard() {
  const [emAltaProduto, setEmAltaProduto] = useState(false)
  const [emAltaCliente, setEmAltaCliente] = useState(false)
  const [dates, setDates] = useState(dateHelper.thisMonth())
  const statusProdutos = () => setEmAltaProduto(!emAltaProduto)
  const statusClientes = () => setEmAltaCliente(!emAltaCliente)

  const [tabelaProduto, setTabelaProduto] = useState<GetDashBoardTabelaProps>(
    []
  )
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      try {
        const result = await getDashBoardTabelaProduto(
          dates.end,
          dates.start,
          emAltaProduto ? 'EM_BAIXA' : 'EM_ALTA'
        )
        setTabelaProduto(result)
        setLoading(false)
      } catch (error) {
        alert((error as any).message)
      }
    })()
  }, [emAltaProduto, dates])

  const [tabelaClientes, setTabelaClientes] = useState<GetDashBoardTabelaProps>(
    []
  )

  useEffect(() => {
    ;(async () => {
      try {
        const result = await getDashBoardTabelaCliente(
          dates.end,
          dates.start,
          emAltaCliente ? 'EM_BAIXA' : 'EM_ALTA'
        )
        setTabelaClientes(result)
        setLoading(false)
      } catch (error) {
        alert((error as any).message)
      }
    })()
  }, [emAltaCliente, dates])

  const navigate = useNavigate()

  const goToPage = (url: string) => {
    navigate(url)
  }

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
      <DashBoard setDate={setDates} date={dates} />

      <ContainerTabelasStyle>
        <TabelaProduto
          title={
            <TitleWithIcon
              marginLeft="10px"
              fontSize="16px"
              background={colors.azul4}
              color={colors.grey900}
              icon={<FacialCleanser color={colors.azul1} />}
              title="Produtos"
            />
          }
          button={
            <ButtonStatus
              onHigh={emAltaProduto}
              changeStatus={statusProdutos}
            />
          }
          width="49%"
          headers={TitleTabela}
        >
          {tabelaProduto.map(dadosAPI => (
            <tr
              className="onClick"
              onClick={() => goToPage(`/informacoesprodutos/${dadosAPI.id}`)}
            >
              <td className="coluna1">{dadosAPI.id}</td>
              <td className="coluna2">{dadosAPI.nome}</td>
              <td className="coluna3">{dadosAPI.percentual}%</td>
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
              background={colors.azul1}
              color={colors.grey900}
              icon={<EveryUser />}
              title="Clientes"
            />
          }
          button={
            <ButtonStatus
              onHigh={emAltaCliente}
              changeStatus={statusClientes}
            />
          }
          width="49%"
          headers={TitleTabela1}
        >
          {tabelaClientes.map(dadosAPI => (
            <tr
              className="onClick"
              onClick={() =>
                goToPage(`/informacoesprodutosclientes/${dadosAPI.id}`)
              }
            >
              <td className="coluna1">{dadosAPI.id}</td>
              <td className="coluna2">{dadosAPI.nome}</td>
              <td className="coluna3">{dadosAPI.percentual}%</td>
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
