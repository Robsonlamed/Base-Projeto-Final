import { ReactNode } from 'react'
import { TitleCardDashboardStyle } from './styles'

type TitleCardDashboardProps = {
  children: ReactNode
  color: string
}

export function TitleCardDashboard({
  children,
  color,
}: TitleCardDashboardProps) {
  return (
    <TitleCardDashboardStyle color={color}>
      {' '}
      {children}{' '}
    </TitleCardDashboardStyle>
  )
}
