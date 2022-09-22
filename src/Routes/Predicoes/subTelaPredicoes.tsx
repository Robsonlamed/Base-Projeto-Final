import { ArrowBack } from '../../assets/icons/ArrowBack'
import { CheckOne } from '../../assets/icons/CheckOne'
import { FacialCleanser } from '../../assets/icons/FacialCleanser'
import { TimeHistory } from '../../assets/icons/History'
import { ContainerSubTela } from '../../components/CelEmail/styles'
import { InformacoesClientes } from '../../components/InformacoesClientes'
import { LinkMenu } from '../../components/ItensMenu/styles'
import { TabelaProduto } from '../../components/TabelaProduto'
import { TitleWithIcon } from '../../components/TitleWithIcon'
import { ContainerTabelasStyle } from '../../pages/tabelas/styles'
import { colors } from '../../theme'

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
    <ContainerSubTela>
      <LinkMenu color={colors.grey900} to="/predicoes">
        <TitleWithIcon
          icon={<ArrowBack />}
          title="Predições"
          color={colors.grey900}
          background={colors.cinza200}
          borderRadius="100px"
        />
      </LinkMenu>
      <InformacoesClientes />
      <ContainerTabelasStyle margin="0px">
        <TabelaProduto
          button=""
          width="44%"
          headers={TitleTabela}
          title={
            <TitleWithIcon
              background={colors.cinza200}
              color={colors.grey900}
              icon={<TimeHistory />}
              title="Clientes"
            />
          }
        >
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
        <TabelaProduto
          button=""
          width="54%"
          headers={TitleTabelaItenEsgotado}
          title={
            <TitleWithIcon
              background={colors.lightRed}
              color={colors.error}
              icon={<FacialCleanser color={colors.error} />}
              title="Clientes"
            />
          }
        >
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
    </ContainerSubTela>
  )
}
