import {
  ContainerValueCardDashboard,
  PercentagemCardDashboardStyle,
  ValueCardDashboardStyle,
} from './styles'

type ValueCardDashboardProps = {
  total: number
  percentagem?: number
  backgroundColor: string
  color: string
}

export function ValueCardDashboard({
  total,
  percentagem,
  backgroundColor,
  color,
}: ValueCardDashboardProps) {
  return (
    <ContainerValueCardDashboard>
      <div>
        <ValueCardDashboardStyle color={color}>
          {total?.toLocaleString('pt-BR')}
        </ValueCardDashboardStyle>
      </div>
      {!!percentagem && (
        <PercentagemCardDashboardStyle backgroundColor={backgroundColor}>
          {percentagem > 0 && '+'}
          {`${percentagem}%`}
        </PercentagemCardDashboardStyle>
      )}
    </ContainerValueCardDashboard>
  )
}
