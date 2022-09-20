import { ReactNode } from 'react'
import { ContainerTabelaCliente, TabelaClienteStyle } from './styles'

type TabelaClienteProps = {
  children: ReactNode
  headers: string[]
}

export function TabelaCliente({ children, headers }: TabelaClienteProps) {
  return (
    <ContainerTabelaCliente>
      <TabelaClienteStyle>
        <thead>
          <tr>
            {headers.map(titulo => (
              <th>{titulo}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </TabelaClienteStyle>
    </ContainerTabelaCliente>
  )
}
