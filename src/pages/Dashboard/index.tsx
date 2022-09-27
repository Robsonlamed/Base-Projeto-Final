import { useEffect, useState } from 'react'
import { CalendarioDashboard } from '../../components/CalendarioDashboard'
import { CardDashboard } from '../../components/CardDashboard'
import {
  ContainerCardsDashboard,
  ContainerdDashboardStyle,
  DashboardStyle,
} from '../../components/CardDashboard/styles'
import { RadialBar } from '../../components/GraficoDashbord'
import { Title } from '../../components/Title'
import {
  getDashBoardResumo,
  GetDashBoardResumoProps,
} from '../../services/GetDashboardResumo'
import { colors } from '../../theme'
// import { dateHelper } from '../../utils'
import { ContainerTituloDashboard } from './styles'

type CalendarioProps = {
  data: number
  data30: number
  data60: number
  data90: number
  data120: number
  // onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

export function DashBoard({
  data,
  data30,
  data60,
  data90,
  data120,
}: // onChange,
CalendarioProps) {
  const [resumo, setResumo] = useState<GetDashBoardResumoProps>()
  const [loading, setLoading] = useState(true)

  // const [date] = useState(dateHelper.thisMonth)

  useEffect(() => {
    ;(async () => {
      try {
        const result = await getDashBoardResumo('25/09/2022', '10/09/2022')
        setResumo(result)
        setLoading(false)
      } catch (error) {
        alert((error as any).message)
      }
    })()
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
    <ContainerdDashboardStyle>
      <DashboardStyle>
        <ContainerTituloDashboard>
          <h1>Dashboard</h1>
          <CalendarioDashboard
            data={data}
            data30={data30}
            data60={data60}
            data90={data90}
            data120={data120}
            // onChange={onChange}
          />
        </ContainerTituloDashboard>
        <ContainerCardsDashboard>
          <CardDashboard
            text="Total"
            colorTitle={colors.white}
            radialBar={
              <RadialBar series={resumo?.percentualTotalProdutosAlta || 0} />
            }
            tipo="produtos"
            status="em alta"
            valor={resumo?.quantidadeProdutosAlta || 0}
            porcentagem={resumo?.percentualVariacaoProdutosAlta || 0}
            backgroundColor={colors.success}
            backgroundCard={colors.azulCard}
            color={colors.white}
            width="250px"
          />
          <CardDashboard
            text="Total"
            colorTitle={colors.white}
            radialBar={
              <RadialBar series={resumo?.percentualTotalProdutosBaixa || 0} />
            }
            tipo="produtos"
            status="em baixa"
            valor={resumo?.quantidadeProdutosBaixa || 0}
            porcentagem={resumo?.percentualVariacaoProdutosBaixa || 0}
            backgroundColor={colors.error}
            backgroundCard={colors.azulCard}
            color={colors.white}
            width="250px"
          />
          <CardDashboard
            text="Total"
            colorTitle={colors.white}
            radialBar={
              <RadialBar series={resumo?.percentualTotalClientesAlta || 0} />
            }
            tipo="produtos"
            status="em alta"
            valor={resumo?.quantidadeClientesAlta || 0}
            porcentagem={resumo?.percentualVariacaoClientesAlta || 0}
            backgroundColor={colors.success}
            backgroundCard={colors.azulCard}
            color={colors.white}
            width="250px"
          />
          <CardDashboard
            text="Total"
            colorTitle={colors.white}
            radialBar={
              <RadialBar series={resumo?.percentualTotalClientesBaixa || 0} />
            }
            tipo="produtos"
            status="em baixa"
            valor={resumo?.quantidadeClientesBaixa || 0}
            porcentagem={resumo?.percentualVariacaoClientesBaixa || 0}
            backgroundColor={colors.error}
            backgroundCard={colors.azulCard}
            color={colors.white}
            width="250px"
          />
        </ContainerCardsDashboard>
      </DashboardStyle>
    </ContainerdDashboardStyle>
  )
}
