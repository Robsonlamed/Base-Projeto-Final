import styled from 'styled-components'

export const PageStyle = styled.div<{ marginLeft: string; width: string }>`
  margin-top: 90px;
  margin-left: ${({ marginLeft }) => `${marginLeft}`};
  width: ${({ width }) => `${width}`};
`
