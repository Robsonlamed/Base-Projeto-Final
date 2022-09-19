import { TituloCardDashboard } from '../TituloCardDashboard'

type TituloCardProps = {
  tipo: 'produtos' | 'clientes'
  status: 'em alta' | 'em baixa'
}

export function TituloCard({ tipo, status }: TituloCardProps) {
  return (
    <TituloCardDashboard>
      <span>
        Total <strong>{tipo}</strong> {status}
      </span>
    </TituloCardDashboard>
  )
}
