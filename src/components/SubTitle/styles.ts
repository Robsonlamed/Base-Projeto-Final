import styled from 'styled-components'

export const SubTitleStyle = styled.h1<{ tamanho: number; color: string }>`
  font-size: ${({ tamanho }) => `${tamanho}px`};
  color: ${({ color }) => `${color}`};
  font-weight: 400;
`
