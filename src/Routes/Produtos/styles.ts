import styled from 'styled-components'

export const ContainerProdutosStyle = styled.div`
  margin-top: 120px;
  margin-left: 14vw;
`

export const Status = styled.div<{ backgroundColor: string; color: string }>`
  background-color: ${({ backgroundColor }) => `${backgroundColor}`};
  width: 80px;
  height: 30px;
  border-radius: 6px;
  padding-top: 6px;
  color: ${({ color }) => `${color}`};
  margin: 0 auto;
`

export const SubTelaProdutoStyle = styled.span`
  width: 800px;
`
