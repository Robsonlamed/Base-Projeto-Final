import { ReactNode } from 'react'
import {
  ContainerTableClientPredictionStyle,
  TableClientPredictionStyle,
} from './styles'

type TableClientProps = {
  children: ReactNode
  headers: string[]
}

export function TableClientPrediction({ children, headers }: TableClientProps) {
  return (
    <ContainerTableClientPredictionStyle>
      <TableClientPredictionStyle>
        <thead>
          <tr>
            {headers.map(titulo => (
              <th>{titulo}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </TableClientPredictionStyle>
    </ContainerTableClientPredictionStyle>
  )
}
