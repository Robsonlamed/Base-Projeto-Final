import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ArrowBack } from '../../assets/icons/ArrowBack'
import { TredingDown } from '../../assets/icons/TrendingDown'
import { TrendingUp } from '../../assets/icons/TrendingUp'
import { CardDashboard } from '../../components/CardDashboard'
import { ContainerSubScreen } from '../../components/CelEmail/styles'
import { LinkMenu } from '../../components/ItensMenu/styles'
import { TableProduct } from '../../components/TableProduct'
import { Title } from '../../components/Title'
import { TitleWithIcon } from '../../components/TitleWithIcon'
import { ContainerTableStyle } from '../../pages/Dashboard/styles'
import load from '../../assets/images/load.svg'

import {
  GetProductClientProps,
  GetProductClientStatus,
  GetProductSummary,
  GetProductSummaryProps,
} from '../../services/GetProduto'
import { colors } from '../../theme'
import { Logo } from '../../components/Menu/styles'

const TitleTable = ['ID', 'Produto', 'Percentual', 'Quantidade']

export function SubScreenProduct() {
  const [clientLow, setClientLow] = useState<GetProductClientProps>([])
  const [clientesOnHigh, setClientesOnHigh] = useState<GetProductClientProps>(
    []
  )

  const [summary, setSummary] = useState<GetProductSummaryProps>()

  const [loading, setLoading] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    ;(async () => {
      try {
        const resultEmBaixa = await GetProductClientStatus(id!, 'EM_BAIXA')
        const resultEmAlta = await GetProductClientStatus(id!, 'EM_ALTA')
        setClientLow(resultEmBaixa)
        setClientesOnHigh(resultEmAlta)
        setLoading(false)
      } catch (error) {
        alert((error as any).message)
      }
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      try {
        const resultResumo = await GetProductSummary(id!)
        setSummary(resultResumo)
        setLoading(false)
      } catch (error) {
        alert((error as any).message)
      }
    })()
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
      <ContainerSubScreen>
        <ContainerTableStyle>
          <LinkMenu marginLeft="0px" color={colors.grey900} to="/produtos">
            <TitleWithIcon
              fontSize="16px"
              icon={<ArrowBack />}
              title="Detalhamento"
              color={colors.grey900}
              background={colors.grey200}
              borderRadius="100px"
              marginLeft="10px"
            />
          </LinkMenu>
        </ContainerTableStyle>
        <ContainerTableStyle>
          <Title
            text={summary?.nome || ''}
            size={24}
            color={colors.azul1}
            marginLeft=""
            marginBotton="20px"
          />
        </ContainerTableStyle>
        <ContainerTableStyle>
          <CardDashboard
            boxShadow="0px 7px 30px
          rgba(0, 0, 0, 0.1)"
            colorTitle={colors.white}
            color={colors.white}
            text="Média 120 dias"
            status=""
            type=""
            value={summary?.media120Dias || 0}
            backgroundColor=""
            backgroundCard={colors.azul1}
            width="210px"
            paddingBottom="40px"
          />
          <CardDashboard
            boxShadow="0px 7px 30px
                      rgba(0, 0, 0, 0.1)"
            colorTitle={colors.grey900}
            color={colors.azul1}
            text="Últimos 30 dias"
            status=""
            type=""
            value={summary?.ultimos30Dias || 0}
            percentage={summary?.percentualUltimos30Dias}
            backgroundColor={colors.success}
            backgroundCard={colors.white}
            width="210px"
            paddingBottom="40px"
          />
          <CardDashboard
            boxShadow="0px 7px 30px
                      rgba(0, 0, 0, 0.1)"
            colorTitle={colors.grey900}
            color={colors.azul1}
            text="Últimos 60 dias"
            status=""
            type=""
            value={summary?.ultimos60Dias || 0}
            backgroundColor=""
            backgroundCard={colors.white}
            width="210px"
            paddingBottom="40px"
          />
          <CardDashboard
            boxShadow="0px 7px 30px
                      rgba(0, 0, 0, 0.1)"
            colorTitle={colors.grey900}
            color={colors.azul1}
            text="Últimos 90 dias"
            status=""
            type=""
            value={summary?.ultimos90Dias || 0}
            backgroundColor=""
            backgroundCard={colors.white}
            width="210px"
            paddingBottom="40px"
          />
          <CardDashboard
            boxShadow="0px 7px 30px
                      rgba(0, 0, 0, 0.1)"
            colorTitle={colors.grey900}
            color={colors.azul1}
            text="Últimos 120 dias"
            status=""
            type=""
            value={summary?.ultimos120Dias || 0}
            backgroundColor=""
            backgroundCard={colors.white}
            width="210px"
            paddingBottom="40px"
          />
        </ContainerTableStyle>
      </ContainerSubScreen>
      <ContainerTableStyle>
        <TableProduct
          title={
            <TitleWithIcon
              marginLeft="10px"
              fontSize="16px"
              background={colors.error}
              color={colors.grey900}
              icon={<TredingDown />}
              title="Cliente em baixa"
            />
          }
          button=""
          width="49%"
          headers={TitleTable}
        >
          {clientLow.map(dadosAPI => (
            <tr key={dadosAPI.id}>
              <td className="coluna1">{dadosAPI.id}</td>
              <td className="coluna2">{dadosAPI.nome}</td>
              <td className="coluna3">
                {String(dadosAPI.percentual).replace('.', ',')}%
              </td>
              <td>{dadosAPI.quantidade}</td>
            </tr>
          ))}
        </TableProduct>
        <TableProduct
          title={
            <TitleWithIcon
              marginLeft="10px"
              fontSize="16px"
              background={colors.success}
              color={colors.grey900}
              icon={<TrendingUp />}
              title="Clientes em alta"
            />
          }
          button=""
          width="49%"
          headers={TitleTable}
        >
          {clientesOnHigh.map(dadosAPI => (
            <tr key={dadosAPI.id}>
              <td className="coluna1">{dadosAPI.id}</td>
              <td className="coluna2">{dadosAPI.nome}</td>
              <td className="coluna3">
                {String(dadosAPI.percentual).replace('.', ',')}%
              </td>
              <td>{dadosAPI.quantidade}</td>
            </tr>
          ))}
        </TableProduct>
      </ContainerTableStyle>
    </div>
  )
}
