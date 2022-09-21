import styled from 'styled-components'
import { colors } from '../../theme'

export const CardClienteStyle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  h3 {
    font-size: 14px;
    font-weight: 600;
    color: ${colors.grey900};
  }

  li {
    font-size: 12px;
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
  margin-left: 40px;
`

export const ContainerCardCliente = styled.div`
  width: 19vw;
  height: auto;
  padding: 16px;
  border-radius: 20px;
  box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.1);
`
export const ContainerCardsPredicoes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 84.9vw;
  margin-left: 14vw;
  padding: 26px;
`
