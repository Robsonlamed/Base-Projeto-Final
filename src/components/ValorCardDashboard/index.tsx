import {
  ContainerValorCardDashbord,
  PorcentagemCardDashboardStyle,
  ValorCardDashboardStyle,
} from './styles'

type ValorCardDashboar = {
  total: number
  porcentagem?: number
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
      {!!porcentagem && (
        <PorcentagemCardDashboardStyle backgroundColor={backgroundColor}>
          {porcentagem > 0 && '+'}
          {`${porcentagem}%`}
        </PorcentagemCardDashboardStyle>
      )}
    </ContainerValorCardDashbord>
  )
}
