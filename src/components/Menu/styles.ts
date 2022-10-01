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

export const Logo = styled.img`
  margin: 35px;
  width: 126px;
  height: 28px;
  cursor: pointer;
`
