import styled from 'styled-components'
import { colors } from '../../theme'

export const LebrarStyle = styled.div<{ fontSize: string }>`
  display: flex;
  align-items: center;
  font-size: ${({ fontSize }) => `${fontSize}`};
  color: ${colors.grey900};
  font-weight: 600;
  span {
    margin-left: 10px;
  }
`

export const Checkbox = styled.input`
  min-width: 16px;
  min-height: 16px;
  cursor: pointer;
`
