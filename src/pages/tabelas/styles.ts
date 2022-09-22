import styled from 'styled-components'

export const ContainerTabelasStyle = styled.div<{ margin: string }>`
  display: flex;
  justify-content: space-between;
  width: 84.9vw;
  padding: 0 22px;
  margin-left: ${({ margin }) => `${margin}`};
`
