import styled from 'styled-components'
import { colors } from '../../theme'

export const MenuStyles = styled.div`
  background-color: ${colors.primary};
  color: ${colors.white};
  font-size: 16px;
  width: 6vw;
  position: fixed;
  top: 0;
  height: 100vh;
`

export const Logo = styled.img`
  margin: 35px 10px 23px 10px;
  width: 60px;
  height: 25px;
`

export const LinkMenu = styled.div`
  display: flex;
  justify-content: center;
  margin: 22px 30px 50px 25px;
`
