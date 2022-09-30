import styled from 'styled-components'
import { colors } from '../../theme'

export const FiltroProdutoStyle = styled.div`
  display: flex;
  justify-content: space-between;
`
export const FiltroProdutoSpan = styled.span`
  font-size: 13px;
  color: ${colors.grey600};
  font-weight: 400;
`

export const FiltroProdutoSubTitle = styled.div`
  padding-bottom: 10px;
`
export const FiltroProdutoHr = styled.hr`
  margin: 8px 0px;
`
export const FiltroProdutoContainer = styled.div`
  position: fixed;
  top: 0;
  margin-top: 100px;
  margin-left: 490px;
  width: 200px;
  background-color: ${colors.white};
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.2);
`
export const FiltroProdutoContainerMascara = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
`
