import styled from 'styled-components'
import { colors } from '../../theme'

export const ButtonStatusStyle = styled.button<{
  backgroundColor: string
  color: string
}>`
  width: 90px;
  height: 24px;
  background: ${({ backgroundColor }) => `${backgroundColor}`};
  color: ${({ color }) => `${color}`};
  border-radius: 5px;
  border: none;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;
`
export const ContainerButtonStatus = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.grey50};
  border: 1px solid ${colors.grey300};
  border-radius: 8px;
  width: 200px;
  padding: 7px 7px 6px 7px;
`
