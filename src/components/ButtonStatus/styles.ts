import styled from 'styled-components'
import { colors } from '../../theme'

export const ButtonStatusStyle = styled.button`
  width: 90px;
  height: 32px;
  border-radius: 8px;
  color: ${colors.white};
  border: none;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
`
export const ContainerButtonStatus = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: whitesmoke;
  border: 0.8px solid #e0e0e0;
  border-radius: 8px;
  width: 200px;
  /* height: 40px; */
  padding: 8px 7px 6px 7px;
`
