import styled from 'styled-components'

export const TabelaProdutoStyle = styled.table`
  width: calc(100%);
  border-spacing: 0;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
  margin-top: 32px;

  thead {
    font-size: 16px;
    color: #c5cfff;
    font-weight: 600;
    text-align: center;
  }

  tbody {
    font-size: 16px;
    color: #212121;
    background-color: #fafafa;
    font-weight: 400;
    text-align: center;
  }

  td,
  th {
    text-align: left;
    padding: 16px 0px 16px 27px;
    border-bottom: 8px solid white;
  }

  thead > tr:nth-child(odd),
  th > th:nth-child(odd) {
    background-color: #001c98;
  }

  tbody > tr:nth-child(even),
  th > th:nth-child(even) {
    background-color: #f5f5f5;
  }
  .iconTabela {
    padding-right: 30px;
  }
`

export const Cabecalho = styled.div`
  background-color: #001c98;
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
