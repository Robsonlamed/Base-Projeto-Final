import styled from 'styled-components'

export const TitleStyle = styled.h1<{ tamanho: number; color: string }>`
  font-size: ${({ tamanho }) => `${tamanho}px`};
  color: ${({ color }) => `${color}`};
  font-weight: 700;
  margin-bottom: 50px;
`
