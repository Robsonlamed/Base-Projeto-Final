import { ReactNode } from 'react'
import { Paginacao } from '../Pagination'
import { ContainerStatus, ContainerTable, TableProductStyle } from './styles'

type TableProductProps = {
  children: ReactNode
  headers: string[]
  width: string
  button: ReactNode
  title: ReactNode
  totalPagesListed?: number
  totalPagesListedInAPI?: number
  currentPage?: number
  numberItenPage?: number
  changePage?: (page: number) => void
}

export function TableProduct({
  children,
  headers,
  width,
  button,
  title,
  totalPagesListed,
  totalPagesListedInAPI,
  currentPage,
  numberItenPage,
  changePage,
}: TableProductProps) {
  return (
    <ContainerTable width={width}>
      <ContainerStatus>
        <span>{title}</span>
        <span>{button}</span>
      </ContainerStatus>
      <TableProductStyle>
        <thead>
          <tr>
            {headers.map(titulo => (
              <th key={titulo}>{titulo}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </TableProductStyle>
      {!!changePage && (
        <Paginacao
          totalPagesListed={totalPagesListed || 0}
          totalPagesListedInAPI={totalPagesListedInAPI || 0}
          currentPage={currentPage || 0}
          numberItenPage={numberItenPage || 0}
          changePage={pagina => changePage(pagina)}
        />
      )}
    </ContainerTable>
  )
}
