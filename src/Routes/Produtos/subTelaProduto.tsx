import { ArrowBack } from '../../assets/icons/ArrowBack'
import { TredingDown } from '../../assets/icons/TrendingDown'
import { TrendingUp } from '../../assets/icons/TrendingUp'
import { CardDashboard } from '../../components/CardDashboard'
import { ContainerCardsDashboard } from '../../components/CardDashboard/styles'
import { ContainerSubTela } from '../../components/CelEmail/styles'
import { TabelaProduto } from '../../components/TabelaProduto'
import { Title } from '../../components/Title'
import { TitleWithIcon } from '../../components/TitleWithIcon'
import { ContainerTabelasStyle } from '../../pages/tabelas/styles'
import { colors } from '../../theme'

const TitleTabela = ['ID', 'Cliente', 'Percentual', 'Quantidade']

const TabelaDadosAPI = [
  {
    id: '001',
    produto: 'Papel Higiênico',
    percentual: '+72%',
    quantidade: '16',
  },
  {
    id: '002',
    produto: 'Sabonete',
    percentual: '+24%',
    quantidade: '15',
  },
  {
    id: '003',
    produto: 'Alcool em gel',
    percentual: '+62%',
    quantidade: '12',
  },
  {
    id: '004',
    produto: 'Detergente',
    percentual: '+20%',
    quantidade: '10',
  },
  {
    id: '005',
    produto: 'Papel Higiênico',
    percentual: '+72%',
    quantidade: '08',
  },
]

export function SubTelaProduto() {
  return (
    <ContainerSubTela>
      <TitleWithIcon
        icon={<ArrowBack />}
        title="Detalhamento"
        color={colors.grey900}
        background={colors.cinza200}
        borderRadius="100px"
      />
      <Title
        texto="Papel Higiênico"
        tamanho={24}
        color={colors.primary}
        marginLeft=""
      />
      <ContainerCardsDashboard>
        <CardDashboard
          colorTitle={colors.white}
          color={colors.white}
          text="Média 120 dias"
          status=""
          tipo=""
          valor={300}
          porcentagem=""
          backgroundColor=""
          backgroundCard={colors.azul3}
        />
        <CardDashboard
          colorTitle={colors.grey900}
          color={colors.primary}
          text="Últimos 30 dias"
          status=""
          tipo=""
          valor={222}
          porcentagem="+26%"
          backgroundColor={colors.success}
          backgroundCard={colors.white}
        />
        <CardDashboard
          colorTitle={colors.grey900}
          color={colors.primary}
          text="Últimos 60 dias"
          status=""
          tipo=""
          valor={350}
          porcentagem=""
          backgroundColor=""
          backgroundCard={colors.white}
        />
        <CardDashboard
          colorTitle={colors.grey900}
          color={colors.primary}
          text="Últimos 90 dias"
          status=""
          tipo=""
          valor={320}
          porcentagem=""
          backgroundColor=""
          backgroundCard={colors.white}
        />
        <CardDashboard
          colorTitle={colors.grey900}
          color={colors.primary}
          text="Últimos 120 dias"
          status=""
          tipo=""
          valor={280}
          porcentagem=""
          backgroundColor=""
          backgroundCard={colors.white}
        />
      </ContainerCardsDashboard>
      <ContainerTabelasStyle margin="14vw">
        <TabelaProduto
          title={
            <TitleWithIcon
              background={colors.error}
              color={colors.grey900}
              icon={<TredingDown />}
              title="Cliente em baixa"
            />
          }
          button=""
          width="49%"
          headers={TitleTabela}
        >
          {TabelaDadosAPI.map(dadosAPI => (
            <tr>
              <td className="coluna1">{dadosAPI.id}</td>
              <td className="coluna2">{dadosAPI.produto}</td>
              <td className="coluna3">{dadosAPI.percentual}</td>
              <td>{dadosAPI.quantidade}</td>
            </tr>
          ))}
        </TabelaProduto>
        <TabelaProduto
          title={
            <TitleWithIcon
              background={colors.success}
              color={colors.grey900}
              icon={<TrendingUp />}
              title="Clientes em alta"
            />
          }
          button=""
          width="49%"
          headers={TitleTabela}
        >
          {TabelaDadosAPI.map(dadosAPI => (
            <tr>
              <td className="coluna1">{dadosAPI.id}</td>
              <td className="coluna2">{dadosAPI.produto}</td>
              <td className="coluna3">{dadosAPI.percentual}</td>
              <td>{dadosAPI.quantidade}</td>
            </tr>
          ))}
        </TabelaProduto>
      </ContainerTabelasStyle>
    </ContainerSubTela>
  )
}
