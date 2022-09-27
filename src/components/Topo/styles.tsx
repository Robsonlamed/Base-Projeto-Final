import styled from 'styled-components'
import { colors } from '../../theme'

export const TopoStyles = styled.div`
  position: fixed;
  padding: 0 22px;
  right: 0;
  width: 84.8vw;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.white};
  z-index: 1;

  div {
    margin-right: 10px;
  }
  p {
    font-size: 16px;
    color: ${colors.grey900};
  }
  span {
    font-size: 12px;
    color: ${colors.grey600};
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
  background-color: ${colors.azul1};
  border-radius: 100%;
  width: 40px;
  height: 40px;
  padding: 7px 0px 0px 8px;
  margin-right: 10px;
`
export const UserStyle = styled.div`
  p {
    font-size: 16px;
    font-weight: 600;
    color: ${colors.grey900};
    margin-bottom: -5px;
  }

  span {
    font-size: 12px;
    font-weight: 400;
    color: ${colors.grey600};
  }
`
