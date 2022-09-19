import { ReactNode } from 'react'
import { ButtonStatus } from '../ButtonStatus'
import { TituloCardTabela } from '../TituloTabela'
import { ContainerStatus, ContainerTabela, TabelaProdutoStyle } from './styles'
import { FacialCleanser } from '../../assets/icons/FacialCleanser'

type IconTabelaProps = {
  icon: ReactNode
}

const TitleTabela = ['ID', 'Produto', 'Percentual', ' ']

const TabelaDadosAPI = [
  {
    id: '001',
    produto: 'Papel Higiênico',
    percentual: '+72%',
  },
  {
    id: '002',
    produto: 'Sabonete',
    percentual: '+72%',
  },
  {
    id: '003',
    produto: 'Alcool em gel',
    percentual: '+72%',
  },
  {
    id: '004',
    produto: 'Detergente',
    percentual: '+72%',
  },
]

export function TabelaProduto({ icon }: IconTabelaProps) {
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
            {TitleTabela.map(titulo => (
              <th>{titulo}</th>
            ))}
          </tr>
        </thead>
        {/* </div> */}
        <tbody>
          {TabelaDadosAPI.map(dadosAPI => (
            <tr>
              <td>{dadosAPI.id}</td>
              <td>{dadosAPI.produto}</td>
              <td>{dadosAPI.percentual}</td>
              <td>{icon}</td>
            </tr>
          ))}
        </tbody>
      </TabelaProdutoStyle>
    </ContainerTabela>
  )
}
