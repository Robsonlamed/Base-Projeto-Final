import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../theme'

export const LinkMenu = styled(Link)`
  cursor: pointer;
  display: flex;
  justify-content: left;
  margin: 22px 30px 50px 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  color: ${colors.white};
`
export const Links = styled.span`
  margin-left: 25px;
`
