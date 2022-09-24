import { ReactNode } from 'react'
import { ValorCardDashboard } from '../ValorCardDashboard'
import { CardDashboardStyle } from './styles'
import { TituloCard } from './titulo'

type CardDashboardProps = {
  radialBar?: ReactNode
  tipo: string
  status: string
  text?: string
  valor: number
  porcentagem: string
  backgroundColor: string
  backgroundCard: string
  color: string
  colorTitle: string
  width: string
  paddingBottom?: string
  boxShadow?: string
}

export function CardDashboard({
  radialBar,
  tipo,
  status,
  text,
  valor,
  porcentagem,
  backgroundColor,
  backgroundCard,
  color,
  colorTitle,
  width,
  paddingBottom,
  boxShadow,
}: CardDashboardProps) {
  return (
    <CardDashboardStyle
      boxShadow={boxShadow}
      paddingBottom={paddingBottom}
      width={width}
      backgroundColor={backgroundCard}
    >
      <div>{radialBar}</div>
      <div>
        <TituloCard
          color={colorTitle}
          text={text}
          tipo={tipo}
          status={status}
        />
        <ValorCardDashboard
          color={color}
          backgroundColor={backgroundColor}
          total={valor}
          porcentagem={porcentagem}
        />
      </div>
    </CardDashboardStyle>
  )
}
