import { ReactNode } from 'react'

type TituloCardDashboardProps = {
  children: ReactNode
}

export function TituloCardClientes({ children }: TituloCardDashboardProps) {
  return <div> {children} </div>
}
