import styled from 'styled-components'

export const TitleStyle = styled.h1<{
  tamanho: number
  color: string
  margin: string
  marginLeft: string
}>`
  font-size: ${({ tamanho }) => `${tamanho}px`};
  color: ${({ color }) => `${color}`};
  font-weight: 600;
  margin-bottom: ${({ margin }) => `${margin}`};
  margin-left: ${({ marginLeft }) => `${marginLeft}`};
`
