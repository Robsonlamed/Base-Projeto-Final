import {
  ContainerValorCardDashbord,
  PorcentagemCardDashboardStyle,
  ValorCardDashboardStyle,
} from './styles'

type ValorCardDashboar = {
  total: number
  porcentagem: string
  backgroundColor: string
  color: string
}

export function ValorCardDashboard({
  total,
  porcentagem,
  backgroundColor,
  color,
}: ValorCardDashboar) {
  return (
    <ContainerValorCardDashbord>
      <div>
        <ValorCardDashboardStyle color={color}>{total}</ValorCardDashboardStyle>
      </div>
      <PorcentagemCardDashboardStyle backgroundColor={backgroundColor}>
        {porcentagem}
      </PorcentagemCardDashboardStyle>
    </ContainerValorCardDashbord>
  )
}
