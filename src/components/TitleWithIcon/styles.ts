import styled from 'styled-components'

export const TitleWithIconStyle = styled.div<{
  color: string
  tamanho: string
}>`
  display: flex;
  align-items: center;
  color: ${({ color }) => `${color}`};
  font-size: ${({ tamanho }) => `${tamanho}`};
  font-weight: 400;
  margin-left: 26px;
  span {
    margin-left: 10px;
  }
`
