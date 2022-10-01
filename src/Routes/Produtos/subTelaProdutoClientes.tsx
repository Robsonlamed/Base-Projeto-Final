import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ArrowBack } from '../../assets/icons/ArrowBack'
import { TredingDown } from '../../assets/icons/TrendingDown'
import { TrendingUp } from '../../assets/icons/TrendingUp'
import { CardDashboard } from '../../components/CardDashboard'
import { ContainerSubScreen } from '../../components/CelEmail/styles'
import { LinkMenu } from '../../components/ItensMenu/styles'
import { TabelaProduto } from '../../components/TabelaProduto'
import { Title } from '../../components/Title'
import { TitleWithIcon } from '../../components/TitleWithIcon'
import { ContainerTabelasStyle } from '../../pages/tabelas/styles'
import {
  GetProdutoResumoClientes,
  GetProdutoResumoClientesProps,
  GetProdutoStatus,
  GetProdutoStatusProps,
} from '../../services/GetProduto'
import { colors } from '../../theme'

const TitleTabela = ['ID', 'Cliente', 'Percentual', 'Quantidade']

export function SubTelaProdutoClientes() {
  const [produtosEmBaixa, setProdutosEmBaixa] = useState<GetProdutoStatusProps>(
    []
  )
  const [produtosEmAlta, setProdutosEmAlta] = useState<GetProdutoStatusProps>(
    []
  )

  const [resumo, setResumo] = useState<GetProdutoResumoClientesProps>()

  const [loading, setLoading] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    ;(async () => {
      try {
        const resultEmBaixa = await GetProdutoStatus(id!, 'EM_BAIXA')
        const resultEmAlta = await GetProdutoStatus(id!, 'EM_ALTA')
        setProdutosEmBaixa(resultEmBaixa)
        setProdutosEmAlta(resultEmAlta)
        setLoading(false)
      } catch (error) {
        alert((error as any).message)
      }
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      try {
        const resultResumo = await GetProdutoResumoClientes(id!)
        setResumo(resultResumo)
        setLoading(false)
      } catch (error) {
        alert((error as any).message)
      }
    })()
  }, [])

  if (loading) {
    return (
      <Title
        texto="Carregando dados"
        tamanho={24}
        color={colors.grey900}
        marginLeft="15px"
      />
    )
  }

  return (
    <div>
      <ContainerSubScreen>
        <ContainerTabelasStyle>
          <LinkMenu marginLeft="0px" color={colors.grey900} to="/produtos">
            <TitleWithIcon
              fontSize="16px"
              icon={<ArrowBack />}
              title="Detalhamento"
              color={colors.grey900}
              background={colors.grey200}
              borderRadius="100px"
              marginLeft="10px"
            />
          </LinkMenu>
        </ContainerTabelasStyle>
        <ContainerTabelasStyle>
          <Title
            texto={resumo?.nome || ''}
            tamanho={24}
            color={colors.azul1}
            marginLeft=""
            marginBotton="20px"
          />
        </ContainerTabelasStyle>
        <ContainerTabelasStyle>
          <CardDashboard
            boxShadow="0px 7px 30px
          rgba(0, 0, 0, 0.1)"
            colorTitle={colors.white}
            color={colors.white}
            text="Média 120 dias"
            status=""
            type=""
            value={resumo?.media120Dias || 0}
            backgroundColor=""
            backgroundCard={colors.azul1}
            width="210px"
            paddingBottom="40px"
          />
          <CardDashboard
            boxShadow="0px 7px 30px
                      rgba(0, 0, 0, 0.1)"
            colorTitle={colors.grey900}
            color={colors.azul1}
            text="Últimos 30 dias"
            status=""
            type=""
            value={resumo?.ultimos30Dias || 0}
            percentage={resumo?.percentualUltimos30Dias}
            backgroundColor={colors.success}
            backgroundCard={colors.white}
            width="210px"
            paddingBottom="40px"
          />
          <CardDashboard
            boxShadow="0px 7px 30px
                      rgba(0, 0, 0, 0.1)"
            colorTitle={colors.grey900}
            color={colors.azul1}
            text="Últimos 60 dias"
            status=""
            type=""
            value={resumo?.ultimos60Dias || 0}
            backgroundColor=""
            backgroundCard={colors.white}
            width="210px"
            paddingBottom="40px"
          />
          <CardDashboard
            boxShadow="0px 7px 30px
                      rgba(0, 0, 0, 0.1)"
            colorTitle={colors.grey900}
            color={colors.azul1}
            text="Últimos 90 dias"
            status=""
            type=""
            value={resumo?.ultimos90Dias || 0}
            backgroundColor=""
            backgroundCard={colors.white}
            width="210px"
            paddingBottom="40px"
          />
          <CardDashboard
            boxShadow="0px 7px 30px
                      rgba(0, 0, 0, 0.1)"
            colorTitle={colors.grey900}
            color={colors.azul1}
            text="Últimos 120 dias"
            status=""
            type=""
            value={resumo?.ultimos120Dias || 0}
            backgroundColor=""
            backgroundCard={colors.white}
            width="210px"
            paddingBottom="40px"
          />
        </ContainerTabelasStyle>
      </ContainerSubScreen>
      <ContainerTabelasStyle>
        <TabelaProduto
          title={
            <TitleWithIcon
              marginLeft="10px"
              fontSize="16px"
              background={colors.error}
              color={colors.grey900}
              icon={<TredingDown />}
              title="Produtos em baixa"
            />
          }
          button=""
          width="49%"
          headers={TitleTabela}
        >
          {produtosEmBaixa.map(dadosAPI => (
            <tr>
              <td className="coluna1">{dadosAPI.id}</td>
              <td className="coluna2">{dadosAPI.nome}</td>
              <td className="coluna3">{dadosAPI.percentual}%</td>
              <td>{dadosAPI.quantidade}</td>
            </tr>
          ))}
        </TabelaProduto>
        <TabelaProduto
          title={
            <TitleWithIcon
              marginLeft="10px"
              fontSize="16px"
              background={colors.success}
              color={colors.grey900}
              icon={<TrendingUp />}
              title="Produtos em alta"
            />
          }
          button=""
          width="49%"
          headers={TitleTabela}
        >
          {produtosEmAlta.map(dadosAPI => (
            <tr>
              <td className="coluna1">{dadosAPI.id}</td>
              <td className="coluna2">{dadosAPI.nome}</td>
              <td className="coluna3">{dadosAPI.percentual}%</td>
              <td>{dadosAPI.quantidade}</td>
            </tr>
          ))}
        </TabelaProduto>
      </ContainerTabelasStyle>
    </div>
  )
}
