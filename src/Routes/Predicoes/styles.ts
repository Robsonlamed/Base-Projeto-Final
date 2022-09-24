import styled from 'styled-components'
import { colors } from '../../theme'

export const CardClienteStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`

export const IconeUserCliente = styled.div`
  background-color: ${colors.azul4};
  border-radius: 100%;
  width: 40px;
  height: 40px;
  padding: 7px 0px 0px 8px;
  margin-right: 15px;
`

export const IconeChevronCliente = styled.div`
  margin-bottom: 12px;
`

export const ContainerCardCliente = styled.div`
  width: 240px;
  height: auto;
  padding: 16px;
  border-radius: 20px;
  box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.1);
`
export const ContainerCardsPredicoes = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 84.9vw;
  margin-left: 14vw;
  padding: 26px;
  height: 400px;
  overflow: auto;
`
