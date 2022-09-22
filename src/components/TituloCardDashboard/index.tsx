import { ReactNode } from 'react'
import { TituloCardDashboardStyle } from './styles'

type TituloCardDashboardProps = {
  children: ReactNode
  color: string
}

export function TituloCardDashboard({
  children,
  color,
}: TituloCardDashboardProps) {
  return (
    <TituloCardDashboardStyle color={color}>
      {' '}
      {children}{' '}
    </TituloCardDashboardStyle>
  )
}
