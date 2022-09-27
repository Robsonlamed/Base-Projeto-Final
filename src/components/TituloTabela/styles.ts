import styled from 'styled-components'
import { colors } from '../../theme'

export const TituloTabelaStyle = styled.div`
  background-color: ${colors.azul1};
  border-radius: 8px;
  width: 40px;
  height: 40px;
  padding: 11px 17px 15px 11px;
  margin-right: 12px;

  label {
    font-size: 20px;
    color: ${colors.grey900};
    font-weight: 600;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
`
