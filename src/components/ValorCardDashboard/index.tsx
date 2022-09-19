import {
  ContainerValorCardDashbord,
  PorcentagemCardDashboardStyle,
  ValorCardDashboardStyle,
} from './styles'

type ValorCardDashboar = {
  total: number
  porcentagem: string
  backgroundColor: string
}

export function ValorCardDashboard({
  total,
  porcentagem,
  backgroundColor,
}: ValorCardDashboar) {
  return (
    <ContainerValorCardDashbord>
      <div>
        <ValorCardDashboardStyle>{total}</ValorCardDashboardStyle>
      </div>
      <PorcentagemCardDashboardStyle backgroundColor={backgroundColor}>
        {porcentagem}
      </PorcentagemCardDashboardStyle>
    </ContainerValorCardDashbord>
  )
}
