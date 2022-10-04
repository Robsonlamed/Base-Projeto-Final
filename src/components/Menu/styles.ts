import styled from 'styled-components'
import { colors } from '../../theme'

export const MenuStyles = styled.div<{ width: string }>`
  background-color: ${colors.azul1};
  color: ${colors.white};
  width: ${({ width }) => `${width}`};
  height: 100vh;
  position: fixed;
  top: 0;
`

export const Logo = styled.img<{
  width: string
  height: string
  marginLeft?: string
}>`
  margin: 35px;
  margin-left: ${({ marginLeft }) => `${marginLeft}`};
  width: ${({ width }) => `${width}`};
  height: ${({ height }) => `${height}`};
  cursor: pointer;
`
