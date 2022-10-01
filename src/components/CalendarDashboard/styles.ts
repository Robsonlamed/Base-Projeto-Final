import styled from 'styled-components'
import { colors } from '../../theme'

export const CalendarDashboardStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.white};
  border-radius: 8px;
  width: 175px;
  padding: 8px;

  span {
    font-weight: 400;
    font-size: 12px;
    color: ${colors.grey800};
    margin: 0 3px;
  }

  select {
    font-weight: 600;
    font-size: 13px;
    color: ${colors.azul1};
    border: none;
  }
`
