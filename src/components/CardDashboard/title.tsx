import { TitleCardDashboard } from '../TituloCardDashboard'

type TituloCardProps = {
  tipo: string
  status: string
  text?: string
  color: string
}

export function TituloCard({ tipo, status, text, color }: TituloCardProps) {
  return (
    <TitleCardDashboard color={color}>
      <span>
        {text} <strong>{tipo}</strong> {status}
      </span>
    </TitleCardDashboard>
  )
}
