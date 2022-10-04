import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronRight } from '../../assets/icons/ChevronRight'
import { EveryUser } from '../../assets/icons/EveryUser'
import { FacialCleanser } from '../../assets/icons/FacialCleanser'
import { ButtonStatus } from '../../components/ButtonStatus'
import { Logo } from '../../components/Menu/styles'
import { TableProduct } from '../../components/TableProduct'
import load from '../../assets/images/load.svg'
import { TitleWithIcon } from '../../components/TitleWithIcon'
import { DashBoard } from '../../pages/Dashboard'
import { ContainerTableStyle } from '../../pages/Dashboard/styles'
import {
  GetDashBoardTableClient,
  GetDashBoardTableProduct,
  GetDashBoardTableProps,
} from '../../services/GetDashboardResumo/getDashboardTabela'
import { colors } from '../../theme'
import { dateHelper } from '../../utils'

const TitleTabela = ['ID', 'Produto', 'Percentual', ' ']
const TitleTabela1 = ['ID', 'Cliente', 'Percentual', ' ']

export function PageDashboard() {
  const [onHighProduct, setOnHighProduct] = useState(false)
  const [onHighClient, setOnHighClient] = useState(false)
  const [dates, setDates] = useState(dateHelper.thisMonth())
  const statusProduct = () => setOnHighProduct(!onHighProduct)
  const statusClient = () => setOnHighClient(!onHighClient)

  const [tableProduct, settableProduct] = useState<GetDashBoardTableProps>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      try {
        const result = await GetDashBoardTableProduct(
          dates.end,
          dates.start,
          onHighProduct ? 'EM_BAIXA' : 'EM_ALTA'
        )
        settableProduct(result)
        setLoading(false)
      } catch (error) {
        alert((error as any).message)
      }
    })()
  }, [onHighProduct, dates])

  const [tableClient, setTableClient] = useState<GetDashBoardTableProps>([])

  useEffect(() => {
    ;(async () => {
      try {
        const result = await GetDashBoardTableClient(
          dates.end,
          dates.start,
          onHighClient ? 'EM_BAIXA' : 'EM_ALTA'
        )
        setTableClient(result)
        setLoading(false)
      } catch (error) {
        alert((error as any).message)
      }
    })()
  }, [onHighClient, dates])

  const navigate = useNavigate()

  const goToPage = (url: string) => {
    navigate(url)
  }

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
      <DashBoard setDate={setDates} date={dates} />

      <ContainerTableStyle>
        <TableProduct
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
            <ButtonStatus onHigh={onHighProduct} changeStatus={statusProduct} />
          }
          width="49%"
          headers={TitleTabela}
        >
          {tableProduct.map(dadosAPI => (
            <tr
              key={dadosAPI.id}
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
        </TableProduct>
        <TableProduct
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
            <ButtonStatus onHigh={onHighClient} changeStatus={statusClient} />
          }
          width="49%"
          headers={TitleTabela1}
        >
          {tableClient.map(dadosAPI => (
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
        </TableProduct>
      </ContainerTableStyle>
    </div>
  )
}
