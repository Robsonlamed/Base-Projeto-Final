import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LinkMenu = styled(Link)<{ color: string; marginLeft?: string }>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 20px 30px 42px 16px;
  text-decoration: none;
  font-weight: 400;
  font-size: 13px;
  color: ${({ color }) => `${color}`};
  margin-left: ${({ marginLeft }) => `${marginLeft}`};
`
export const Links = styled.span`
  margin-left: 15px;
`
