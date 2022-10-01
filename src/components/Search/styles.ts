import styled from 'styled-components'
import { colors } from '../../theme'

export const SearchPredictionStyle = styled.div`
  position: absolute;
  right: 20px;
  top: 15px;
  cursor: pointer;
`
export const ContainerSearch = styled.div<{
  paddinLeft: string
  boxShadow: string
  height: string
  marginBotton: string
}>`
  width: 100%;
  background-color: ${colors.white};
  padding: 20px;
  padding-left: ${({ paddinLeft }) => `${paddinLeft}`};
  border-radius: 20px;
  height: ${({ height }) => `${height}`};
  box-shadow: ${({ boxShadow }) => `${boxShadow}`};
  margin-bottom: ${({ marginBotton }) => `${marginBotton}`};
`
