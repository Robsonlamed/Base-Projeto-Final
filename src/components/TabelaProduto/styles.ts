import styled from 'styled-components'
import { colors } from '../../theme'

export const TabelaProdutoStyle = styled.table`
  width: calc(100%);
  border-spacing: 0;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
  margin-top: 32px;

  thead {
    font-size: 14px;
    color: ${colors.azul4};
    font-weight: 600;
    text-align: center;
    background-color: ${colors.primary};

    tr {
      th:nth-child(2) {
        text-align: left;
      }
    }
  }

  tbody {
    font-size: 14px;
    color: ${colors.grey900};
    background-color: ${colors.grey50};
    font-weight: 400;
    text-align: center;

    .arrow {
      padding-right: 20px;
    }

    .coluna3,
    .coluna1 {
      text-align: center;
    }

    .coluna2 {
      text-align: left;
    }
  }

  td,
  th {
    padding: 16px 0px 16px 27px;
    border-bottom: 8px solid white;
  }

  tbody > tr:nth-child(even),
  th > th:nth-child(even) {
    background-color: ${colors.grey100};
  }
`

export const Cabecalho = styled.div`
  background-color: ${colors.primary};
  border-radius: 16px 16px 0px 0px;
  width: 100%;
  height: 56px;
`

export const ContainerTabela = styled.div`
  background-color: white;
  box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.1);
  width: 48.5%;
  padding: 32px 32px 32px 32px;
  border-radius: 24px;
`

export const ContainerStatus = styled.div`
  display: flex;
  justify-content: space-between;
`
