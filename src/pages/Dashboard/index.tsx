import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { CalendarDashboard } from '../../components/CalendarDashboard'
import { CardDashboard } from '../../components/CardDashboard'
import {
  ContainerCardsDashboard,
  ContainerdDashboardStyle,
  DashboardStyle,
} from '../../components/CardDashboard/styles'
import { RadialBar } from '../../components/GraficoDashbord'
import { Logo } from '../../components/Menu/styles'
import {
  GetDashBoardSummary,
  GetDashBoardSummaryProps,
} from '../../services/GetDashboardResumo'
import { colors } from '../../theme'
import { ContainerTitleDashboard } from './styles'
import load from '../../assets/images/load.svg'

type CalendarioProps = {
  date: { end: string; start: string }
  setDate: Dispatch<SetStateAction<{ end: string; start: string }>>
}

export function DashBoard({ date, setDate }: CalendarioProps) {
  const [summary, setSummary] = useState<GetDashBoardSummaryProps>()
  const [loading, setLoading] = useState(true)

  // const [date] = useState(dateHelper.thisMonth)

  useEffect(() => {
    ;(async () => {
      try {
        const result = await GetDashBoardSummary(date.end, date.start)
        setSummary(result)
        setLoading(false)
      } catch (error) {
        alert((error as any).message)
      }
    })()
  }, [date])

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
    <ContainerdDashboardStyle>
      <DashboardStyle>
        <ContainerTitleDashboard>
          <h1>Dashboard</h1>
          <CalendarDashboard setDate={setDate} />
        </ContainerTitleDashboard>
        <ContainerCardsDashboard>
          <CardDashboard
            text="Total"
            colorTitle={colors.white}
            radialBar={
              <RadialBar series={summary?.percentualTotalProdutosAlta || 0} />
            }
            type="produtos"
            status="em alta"
            value={summary?.quantidadeProdutosAlta || 0}
            percentage={summary?.percentualVariacaoProdutosAlta || 0}
            backgroundColor={colors.success}
            backgroundCard={colors.azulCard}
            color={colors.white}
            width="250px"
          />
          <CardDashboard
            text="Total"
            colorTitle={colors.white}
            radialBar={
              <RadialBar series={summary?.percentualTotalProdutosBaixa || 0} />
            }
            type="produtos"
            status="em baixa"
            value={summary?.quantidadeProdutosBaixa || 0}
            percentage={summary?.percentualVariacaoProdutosBaixa || 0}
            backgroundColor={colors.error}
            backgroundCard={colors.azulCard}
            color={colors.white}
            width="250px"
          />
          <CardDashboard
            text="Total"
            colorTitle={colors.white}
            radialBar={
              <RadialBar series={summary?.percentualTotalClientesAlta || 0} />
            }
            type="clientes"
            status="em alta"
            value={summary?.quantidadeClientesAlta || 0}
            percentage={summary?.percentualVariacaoClientesAlta || 0}
            backgroundColor={colors.success}
            backgroundCard={colors.azulCard}
            color={colors.white}
            width="250px"
          />
          <CardDashboard
            text="Total"
            colorTitle={colors.white}
            radialBar={
              <RadialBar series={summary?.percentualTotalClientesBaixa || 0} />
            }
            type="clientes"
            status="em baixa"
            value={summary?.quantidadeClientesBaixa || 0}
            percentage={summary?.percentualVariacaoClientesBaixa || 0}
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
