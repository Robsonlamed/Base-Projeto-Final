import styled from 'styled-components'
import { colors } from '../../theme'

export const CardDashboardStyle = styled.div`
  display: flex;
  align-items: center;
  background: ${colors.azul3};
  border-radius: 18px;
  width: 250px;
  height: 90px;
  padding: 18px 8px 8px 8px;
`

export const DashboardStyle = styled.div`
  background: ${colors.primary};
  border-radius: 24px;
  padding: 30px 30px 30px 30px;
  width: 100%;

  h1 {
    color: #ffffff;
    font-weight: 400;
    font-size: 24px;
    margin-bottom: 30px;
  }
`
export const ContainerdDashboardStyle = styled.div`
  padding: 22px 22px 0px 22px;
  width: 84.9vw;
  background: #ffffff;
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
