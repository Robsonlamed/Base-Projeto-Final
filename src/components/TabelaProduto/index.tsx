import { ReactNode } from 'react'
import { ButtonStatus } from '../ButtonStatus'
import { TituloCardTabela } from '../TituloTabela'
import { ContainerStatus, ContainerTabela, TabelaProdutoStyle } from './styles'
import { FacialCleanser } from '../../assets/icons/FacialCleanser'

type TabelaProdutoProps = {
  children: ReactNode
  headers: string[]
}

export function TabelaProduto({ children, headers }: TabelaProdutoProps) {
  return (
    <ContainerTabela>
      <ContainerStatus>
        <TituloCardTabela icon={<FacialCleanser />} titulo="Produtos" />
        <ButtonStatus emAlta={false} />
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
