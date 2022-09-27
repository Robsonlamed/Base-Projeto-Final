import styled from 'styled-components'
import { colors } from '../../theme'

export const CardDashboardStyle = styled.div<{
  backgroundColor: string
  width: string
  paddingBottom?: string
  boxShadow?: string
}>`
  display: flex;
  justify-content: space-start;
  align-items: center;
  background: ${({ backgroundColor }) => `${backgroundColor}`};
  width: ${({ width }) => `${width}`};
  border-radius: 18px;
  height: 90px;
  padding: 18px 8px 8px 8px;
  padding-bottom: ${({ paddingBottom }) => `${paddingBottom}`};
  box-shadow: ${({ boxShadow }) => `${boxShadow}`};
`

export const DashboardStyle = styled.div`
  background: ${colors.azul1};
  border-radius: 24px;
  padding: 30px 30px 30px 30px;
  width: 100%;

  h1 {
    color: ${colors.white};
    font-weight: 400;
    font-size: 24px;
    margin-bottom: 30px;
  }
`
export const ContainerdDashboardStyle = styled.div`
  padding: 22px 22px 0px 22px;
  width: 84.9vw;
  background: ${colors.white};
  margin-top: 90px;
  margin-left: 14vw;
`
export const ContainerCardsDashboard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const RadialBarStyles = styled.div`
  padding-bottom: 50px;
`
