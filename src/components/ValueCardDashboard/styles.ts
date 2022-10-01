import styled from 'styled-components'
import { colors } from '../../theme'

export const ValueCardDashboardStyle = styled.h1<{ color: string }>`
  font-weight: 600;
  font-size: 26px;
  color: ${({ color }) => `${color}`};
  margin-left: 5px;
`

export const PercentagemCardDashboardStyle = styled.div<{
  backgroundColor: string
}>`
  width: 45px;
  height: 17px;
  background: ${({ backgroundColor }) => `${backgroundColor}`};
  border-radius: 100px;
  font-weight: 300;
  font-size: 12px;
  color: ${colors.white};
  margin-left: 16px;
  margin-top: 9px;
  text-align: center;
`

export const ContainerValueCardDashboard = styled.div`
  display: flex;
`
