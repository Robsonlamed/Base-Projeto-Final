import { ReactNode } from 'react'
import { TituloCardDashboardStyle } from './styles'

type TituloCardDashboardProps = {
  children: ReactNode
}

export function TituloCardDashboard({ children }: TituloCardDashboardProps) {
  return <TituloCardDashboardStyle> {children} </TituloCardDashboardStyle>
}
