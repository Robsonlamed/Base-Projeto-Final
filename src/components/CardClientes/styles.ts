import styled from 'styled-components'
import { colors } from '../../theme'

export const CardClienteStyle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  h3 {
    font-size: 16px;
    font-weight: 600;
    color: ${colors.grey900};
  }

  li {
    font-size: 14px;
    font-weight: 400;
    color: ${colors.success};
    margin-left: 20px;
  }
`

export const IconeUserCliente = styled.div`
  background-color: ${colors.azul4};
  border-radius: 100%;
  width: 56px;
  height: 56px;
  padding: 10px 0px 0px 12px;
  margin-right: 15px;
`

export const IconeChevronCliente = styled.div`
  margin-left: 75px;
`

export const ContainerCardCliente = styled.div`
  width: 23vw;
  height: auto;
  padding: 20px;
  border-radius: 20px;
`
