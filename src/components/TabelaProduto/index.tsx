import { ReactNode } from 'react'
import { ContainerStatus, ContainerTabela, TabelaProdutoStyle } from './styles'

type TabelaProdutoProps = {
  children: ReactNode
  headers: string[]
  width: string
  button: ReactNode
  title: ReactNode
}

export function TabelaProduto({
  children,
  headers,
  width,
  button,
  title,
}: TabelaProdutoProps) {
  return (
    <ContainerTabela width={width}>
      <ContainerStatus>
        <span>{title}</span>
        <span>{button}</span>
      </ContainerStatus>
      <TabelaProdutoStyle>
        <thead>
          <tr>
            {/* <th>ID</th>
            <th>Produto</th>
            <th>Percentual</th>
            <th> </th> */}
            {headers.map(titulo => (
              <th>{titulo}</th>
            ))}
          </tr>
        </thead>
        {/* </div> */}
        <tbody>
          {/* {TabelaDadosAPI.map(dadosAPI => (
            <tr>
              <td className="coluna1">{dadosAPI.id}</td>
              <td className="coluna2">{dadosAPI.produto}</td>
              <td className="coluna3">{dadosAPI.percentual}</td>
              <td className="arrow">{icon}</td>
            </tr>
          ))} */}
          {children}
        </tbody>
      </TabelaProdutoStyle>
    </ContainerTabela>
  )
}
