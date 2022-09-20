import styled from 'styled-components'
import { colors } from '../../theme'

export const TopoStyles = styled.div`
  position: fixed;
  padding: 0 22px;
  right: 0;
  width: 84.9vw;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  z-index: 1;

  div {
    margin-right: 15px;
    cursor: pointer;
  }
  p {
    font-size: 16px;
    color: #212121;
  }
  span {
    font-size: 12px;
    color: #757575;
  }

  .sanduiche {
    cursor: pointer;
  }

  button {
    background-color: ${colors.white};
    border: none;
    cursor: pointer;
  }
`
export const Logado = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`

export const IconeUser = styled.div`
  background-color: #001c98;
  border-radius: 100%;
  width: 56px;
  height: 56px;
  padding: 10px 0px 0px 12px;
  margin-right: 10px;
`
