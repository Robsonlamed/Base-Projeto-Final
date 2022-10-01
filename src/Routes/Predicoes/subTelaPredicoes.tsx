import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ArrowBack } from '../../assets/icons/ArrowBack'
import { CheckOne } from '../../assets/icons/CheckOne'
import { FacialCleanser } from '../../assets/icons/FacialCleanser'
import { TimeHistory } from '../../assets/icons/History'
import { ContainerSubScreen } from '../../components/CelEmail/styles'
import { InformacoesClientes } from '../../components/InformacoesClientes'
import { LinkMenu } from '../../components/ItensMenu/styles'
import { TabelaProduto } from '../../components/TabelaProduto'
import { Title } from '../../components/Title'
import { TitleWithIcon } from '../../components/TitleWithIcon'
import { ContainerTabelasStyle } from '../../pages/tabelas/styles'
import {
  GetPredicoesBaixaProduto,
  GetPredicoesDadosClientes,
  GetPredicoesDadosClientesProps,
  GetPredicoesEsgotando,
  GetPredicoesEsgotandoProps,
  GetPredicoesHistorico,
  GetPredicoesHistoricoProps,
} from '../../services/GetPredicao/getPredicoes'
import { colors } from '../../theme'
import { CheckOneStyle } from '../../components/CardPrediction/styles'

const TitleTabela = ['ID', 'Produto', 'Última compra', 'Qtd.', 'Dar baixa']
const TitleTabelaItenEsgotado = [
  'ID',
  'Produto',
  'Última compra',
  'Próx. compra',
  'Qtd.',
  'Dar baixa',
]

export function SubTelaPredicoes() {
  const [historico, setHistorico] = useState<GetPredicoesHistoricoProps>([])

  const [esgotando, setEsgotando] = useState<GetPredicoesEsgotandoProps>([])

  const [dadosClientes, setDadosClientes] =
    useState<GetPredicoesDadosClientesProps>()

  const [loading, setLoading] = useState(true)

  const { id } = useParams()

  const darBaixa = async (produtoId: number) => {
    const result = await GetPredicoesBaixaProduto(id!, produtoId)
    if (result.baixa) {
      alert('Produto baixado')
    }
  }

  useEffect(() => {
    ;(async () => {
      try {
        const result = await GetPredicoesHistorico(id!)
        setHistorico(result)
        setLoading(false)
      } catch (error) {
        alert((error as any).message)
      }
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      try {
        const result = await GetPredicoesEsgotando(id!)
        setEsgotando(result)
        setLoading(false)
      } catch (error) {
        alert((error as any).message)
      }
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      try {
        const resultDadosClientes = await GetPredicoesDadosClientes(id!)
        setDadosClientes(resultDadosClientes)
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
    <ContainerSubScreen>
      <ContainerTabelasStyle>
        <LinkMenu marginLeft="0px" color={colors.grey900} to="/predicoes">
          <TitleWithIcon
            marginLeft="10px"
            fontSize="16px"
            icon={<ArrowBack />}
            title="Predições"
            color={colors.grey900}
            background={colors.grey200}
            borderRadius="100px"
          />
        </LinkMenu>
      </ContainerTabelasStyle>
      <ContainerTabelasStyle>
        <InformacoesClientes
          name={dadosClientes?.nome || ''}
          phone={dadosClientes?.telefone || ''}
          email={dadosClientes?.email || ''}
        />
      </ContainerTabelasStyle>
      <ContainerTabelasStyle>
        <TabelaProduto
          button=""
          width="45%"
          headers={TitleTabela}
          title={
            <TitleWithIcon
              marginLeft="10px"
              fontSize="16px"
              background={colors.grey200}
              color={colors.grey900}
              icon={<TimeHistory />}
              title="Histórico"
            />
          }
        >
          {historico.map(dadosAPI => (
            <tr>
              <td className="coluna1">{dadosAPI.id}</td>
              <td className="coluna2">{dadosAPI.nome}</td>
              <td>{dadosAPI.ultimaCompra}</td>
              <td>{dadosAPI.quantidade}</td>
              <td className="arrow">
                <CheckOneStyle
                  onClick={() => darBaixa(dadosAPI.id)}
                  type="button"
                >
                  <CheckOne />
                </CheckOneStyle>
              </td>
            </tr>
          ))}
        </TabelaProduto>
        <TabelaProduto
          button=""
          width="53%"
          headers={TitleTabelaItenEsgotado}
          title={
            <TitleWithIcon
              marginLeft="10px"
              fontSize="16px"
              background={colors.lightRed}
              color={colors.error}
              icon={<FacialCleanser color={colors.error} />}
              title="Produtos esgotando"
            />
          }
        >
          {esgotando.map(dadosAPI => (
            <tr>
              <td className="coluna1">{dadosAPI.id}</td>
              <td className="coluna2">{dadosAPI.nome}</td>
              <td className="coluna3">{dadosAPI.ultimaCompra}</td>
              <td>{dadosAPI.proximaCompra}</td>
              <td>{dadosAPI.quantidade}</td>
              <td className="arrow">
                <CheckOneStyle
                  onClick={() => darBaixa(dadosAPI.id)}
                  type="button"
                >
                  <CheckOne />
                </CheckOneStyle>
              </td>
            </tr>
          ))}
        </TabelaProduto>
      </ContainerTabelasStyle>
    </ContainerSubScreen>
  )
}
