import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../theme'

export const LinkMenu = styled(Link)`
  cursor: pointer;
  display: flex;
  justify-content: left;
  margin: 8px 30px 42px 16px;
  text-decoration: none;
  font-weight: 400;
  font-size: 13px;
  color: ${colors.white};
`
export const Links = styled.span`
  margin-left: 15px;
`
