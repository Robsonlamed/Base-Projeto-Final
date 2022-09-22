import { TituloCardDashboard } from '../TituloCardDashboard'

type TituloCardProps = {
  tipo: string
  status: string
  text?: string
  color: string
}

export function TituloCard({ tipo, status, text, color }: TituloCardProps) {
  return (
    <TituloCardDashboard color={color}>
      <span>
        {text} <strong>{tipo}</strong> {status}
      </span>
    </TituloCardDashboard>
  )
}
