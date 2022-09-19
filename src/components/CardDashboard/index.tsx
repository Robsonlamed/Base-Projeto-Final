import { RadialBar } from '../GraficoDashbord'
import { ValorCardDashboard } from '../ValorCardDashboard'
import { CardDashboardStyle } from './styles'
import { TituloCard } from './titulo'

type CardDashboardProps = {
  grafico: number
  tipo: 'produtos' | 'clientes'
  status: 'em alta' | 'em baixa'
  valor: number
  porcentagem: string
  backgroundColor: string
}

export function CardDashboard({
  grafico,
  tipo,
  status,
  valor,
  porcentagem,
  backgroundColor,
}: CardDashboardProps) {
  return (
    <CardDashboardStyle>
      <div>
        <RadialBar series={grafico} />
      </div>
      <div>
        <TituloCard tipo={tipo} status={status} />
        <ValorCardDashboard
          backgroundColor={backgroundColor}
          total={valor}
          porcentagem={porcentagem}
        />
      </div>
    </CardDashboardStyle>
  )
}
