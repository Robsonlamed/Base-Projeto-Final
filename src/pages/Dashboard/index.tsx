import { CalendarioDashboard } from '../../components/CalendarioDashboard'
import { CardDashboard } from '../../components/CardDashboard'
import {
  ContainerCardsDashboard,
  ContainerdDashboardStyle,
  DashboardStyle,
} from '../../components/CardDashboard/styles'
import { ContainerTituloDashboard } from './styles'

export function DashBoard() {
  return (
    <ContainerdDashboardStyle>
      <DashboardStyle>
        <ContainerTituloDashboard>
          <h1>Dashboard</h1>
          <CalendarioDashboard data="Esse mês" />
        </ContainerTituloDashboard>
        <ContainerCardsDashboard>
          <CardDashboard
            grafico={95}
            tipo="produtos"
            status="em alta"
            valor={114}
            porcentagem="11%"
            backgroundColor="#00c247"
          />
          <CardDashboard
            grafico={50}
            tipo="produtos"
            status="em alta"
            valor={60}
            porcentagem="-27%"
            backgroundColor="#FF3333"
          />
          <CardDashboard
            grafico={70}
            tipo="produtos"
            status="em alta"
            valor={84}
            porcentagem="14%"
            backgroundColor="#00c247"
          />
          <CardDashboard
            grafico={10}
            tipo="produtos"
            status="em alta"
            valor={12}
            porcentagem="-21%"
            backgroundColor="#FF3333"
          />
        </ContainerCardsDashboard>
      </DashboardStyle>
    </ContainerdDashboardStyle>
  )
}
