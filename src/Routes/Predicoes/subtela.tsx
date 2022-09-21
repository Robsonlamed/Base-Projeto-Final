import { ArrowBack } from '../../assets/icons/ArrowBack'
import { CheckOne } from '../../assets/icons/CheckOne'
import { InformacoesClientes } from '../../components/InformacoesClientes'
import { TabelaProduto } from '../../components/TabelaProduto'
import { TitleWithIcon } from '../../components/TitleWithIcon'
import { ContainerTabelasStyle } from '../../pages/tabelas/styles'

const TitleTabela = ['ID', 'Produto', 'Última compra', 'Qtd.', 'Dar baixa']
const TitleTabelaItenEsgotado = [
  'ID',
  'Produto',
  'Última compra',
  'Próx. compra',
  'Qtd.',
  'Dar baixa',
]

const TabelaDadosAPI = [
  {
    id: '001',
    produto: 'Papel Higiênico',
    ultimaCompra: '23/08',
    proximaCompra: '05/10',
    quantidade: '03',
  },
  {
    id: '002',
    produto: 'Sabonete',
    ultimaCompra: '23/08',
    proximaCompra: '05/10',
    quantidade: '03',
  },
  {
    id: '003',
    produto: 'Alcool em gel',
    ultimaCompra: '23/08',
    proximaCompra: '05/10',
    quantidade: '03',
  },
  {
    id: '004',
    produto: 'Detergente',
    ultimaCompra: '23/08',
    proximaCompra: '05/10',
    quantidade: '03',
  },
  {
    id: '005',
    produto: 'Papel Higiênico',
    ultimaCompra: '23/08',
    proximaCompra: '05/10',
    quantidade: '03',
  },
  {
    id: '006',
    produto: 'Sabonete',
    ultimaCompra: '23/08',
    proximaCompra: '05/10',
    quantidade: '03',
  },
  {
    id: '007',
    produto: 'Alcool em gel',
    ultimaCompra: '23/08',
    proximaCompra: '05/10',
    quantidade: '03',
  },
  {
    id: '008',
    produto: 'Detergente',
    ultimaCompra: '23/08',
    proximaCompra: '05/10',
    quantidade: '03',
  },
]

export function SubTelaPredicoes() {
  return (
    <div>
      <TitleWithIcon icon={<ArrowBack />} title="Predições" />
      <InformacoesClientes />
      <ContainerTabelasStyle>
        <TabelaProduto headers={TitleTabela}>
          {TabelaDadosAPI.map(dadosAPI => (
            <tr>
              <td className="coluna1">{dadosAPI.id}</td>
              <td className="coluna2">{dadosAPI.produto}</td>
              <td>{dadosAPI.ultimaCompra}</td>
              <td>{dadosAPI.quantidade}</td>
              <td className="arrow">
                <CheckOne />
              </td>
            </tr>
          ))}
        </TabelaProduto>
        <TabelaProduto headers={TitleTabelaItenEsgotado}>
          {TabelaDadosAPI.map(dadosAPI => (
            <tr>
              <td className="coluna1">{dadosAPI.id}</td>
              <td className="coluna2">{dadosAPI.produto}</td>
              <td className="coluna3">{dadosAPI.ultimaCompra}</td>
              <td>{dadosAPI.proximaCompra}</td>
              <td>{dadosAPI.quantidade}</td>
              <td className="arrow">
                <CheckOne />
              </td>
            </tr>
          ))}
        </TabelaProduto>
      </ContainerTabelasStyle>
    </div>
  )
}
