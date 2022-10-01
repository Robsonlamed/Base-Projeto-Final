import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { CalendarDashboard } from '../../components/CalendarDashboard'
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
  date: { end: string; start: string }
  setDate: Dispatch<SetStateAction<{ end: string; start: string }>>
}

export function DashBoard({ date, setDate }: CalendarioProps) {
  const [resumo, setResumo] = useState<GetDashBoardResumoProps>()
  const [loading, setLoading] = useState(true)

  // const [date] = useState(dateHelper.thisMonth)

  useEffect(() => {
    ;(async () => {
      try {
        const result = await getDashBoardResumo(date.end, date.start)
        setResumo(result)
        setLoading(false)
      } catch (error) {
        alert((error as any).message)
      }
    })()
  }, [date])

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
          <CalendarDashboard setDate={setDate} />
        </ContainerTituloDashboard>
        <ContainerCardsDashboard>
          <CardDashboard
            text="Total"
            colorTitle={colors.white}
            radialBar={
              <RadialBar series={resumo?.percentualTotalProdutosAlta || 0} />
            }
            type="produtos"
            status="em alta"
            value={resumo?.quantidadeProdutosAlta || 0}
            percentage={resumo?.percentualVariacaoProdutosAlta || 0}
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
            type="produtos"
            status="em baixa"
            value={resumo?.quantidadeProdutosBaixa || 0}
            percentage={resumo?.percentualVariacaoProdutosBaixa || 0}
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
            type="produtos"
            status="em alta"
            value={resumo?.quantidadeClientesAlta || 0}
            percentage={resumo?.percentualVariacaoClientesAlta || 0}
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
            type="produtos"
            status="em baixa"
            value={resumo?.quantidadeClientesBaixa || 0}
            percentage={resumo?.percentualVariacaoClientesBaixa || 0}
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
