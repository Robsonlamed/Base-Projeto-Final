import { ChevronRight } from '../assets/icons/ChevronRight'
import { TabelaProduto } from '../components/TabelaProduto'
import { DashBoard } from '../pages/Dashboard'
import { ContainerTabelasStyle } from '../pages/tabelas/styles'

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
    percentual: '+24%',
  },
  {
    id: '003',
    produto: 'Alcool em gel',
    percentual: '+62%',
  },
  {
    id: '004',
    produto: 'Detergente',
    percentual: '+20%',
  },
  {
    id: '005',
    produto: 'Papel Higiênico',
    percentual: '+72%',
  },
  {
    id: '006',
    produto: 'Sabonete',
    percentual: '+24%',
  },
  {
    id: '007',
    produto: 'Alcool em gel',
    percentual: '+62%',
  },
  {
    id: '008',
    produto: 'Detergente',
    percentual: '+20%',
  },
]

export function PageDashboard() {
  return (
    <div>
      <DashBoard />

      <ContainerTabelasStyle>
        <TabelaProduto headers={TitleTabela}>
          {TabelaDadosAPI.map(dadosAPI => (
            <tr>
              <td className="coluna1">{dadosAPI.id}</td>
              <td className="coluna2">{dadosAPI.produto}</td>
              <td className="coluna3">{dadosAPI.percentual}</td>
              <td className="arrow">
                <ChevronRight />
              </td>
            </tr>
          ))}
        </TabelaProduto>
        <TabelaProduto headers={TitleTabela}>
          {TabelaDadosAPI.map(dadosAPI => (
            <tr>
              <td className="coluna1">{dadosAPI.id}</td>
              <td className="coluna2">{dadosAPI.produto}</td>
              <td className="coluna3">{dadosAPI.percentual}</td>
              <td className="arrow">
                <ChevronRight />
              </td>
            </tr>
          ))}
        </TabelaProduto>
      </ContainerTabelasStyle>
    </div>
  )
}
