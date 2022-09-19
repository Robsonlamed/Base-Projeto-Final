import styled from 'styled-components'

export const ValorCardDashboardStyle = styled.h1`
  font-weight: 600;
  font-size: 24px;
  color: #ffffff;
  margin-left: 5px;
`

export const PorcentagemCardDashboardStyle = styled.div<{
  backgroundColor: string
}>`
  width: 60px;
  height: 24px;
  background: ${({ backgroundColor }) => `${backgroundColor}`};
  border-radius: 100px;
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
  padding: 2px 0px 0px 13px;
  margin-left: 16px;
  margin-top: 12px;
`

export const ContainerValorCardDashbord = styled.div`
  display: flex;
`
