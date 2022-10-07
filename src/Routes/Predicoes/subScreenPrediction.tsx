import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ArrowBack } from '../../assets/icons/ArrowBack'
import { CheckOne } from '../../assets/icons/CheckOne'
import { FacialCleanser } from '../../assets/icons/FacialCleanser'
import { TimeHistory } from '../../assets/icons/History'
import { ContainerSubScreen } from '../../components/CelEmail/styles'
import { InformationClient } from '../../components/InformationClient'
import { TitleWithIcon } from '../../components/TitleWithIcon'
import {
  GetPredictionDataClientProps,
  GetPredictionEndingProps,
  GetPreditionDataClient,
  GetPreditionEnding,
  GetPreditionHistoric,
  GetPreditionHistoricProps,
  GetPreditionProductLow,
} from '../../services/GetPredicao/getPredicoes'
import load from '../../assets/images/load.svg'

import { colors } from '../../theme'
import { CheckOneStyle } from '../../components/CardPrediction/styles'
import { LinkMenu } from '../../components/ItensMenu/styles'
import { TableProduct } from '../../components/TableProduct'
import { ContainerTableStyle } from '../../pages/Dashboard/styles'
import { Logo } from '../../components/Menu/styles'

const TitleTable = ['ID', 'Produto', 'Última compra', 'Qtd.', 'Dar baixa']
const TitleTableItenEnding = [
  'ID',
  'Produto',
  'Última compra',
  'Próx. compra',
  'Qtd.',
  'Dar baixa',
]

export function SubScreenPrediction() {
  const [historic, setHistoric] = useState<GetPreditionHistoricProps>([])

  const [ending, setEnding] = useState<GetPredictionEndingProps>([])

  const [dataClient, setDataClient] = useState<GetPredictionDataClientProps>()

  const [loading, setLoading] = useState(true)

  const { id } = useParams()

  const getPreditionHistoric = async () => {
    const result = await GetPreditionHistoric(id!)
    setHistoric(result)
    setLoading(false)
  }

  useEffect(() => {
    getPreditionHistoric()
  }, [])

  const dismiss = async (produtoId: number) => {
    const result = await GetPreditionProductLow(id!, produtoId)
    if (result.baixa) {
      getPreditionHistoric()
      alert('Produto baixado')
    }
  }

  const getPreditionEnding = async () => {
    const result = await GetPreditionEnding(id!)
    setEnding(result)
    setLoading(false)
  }

  const dismissEnding = async (produtoId: number) => {
    const result = await GetPreditionProductLow(id!, produtoId)
    if (result.baixa) {
      getPreditionEnding()
      alert('Produto baixado')
    }
  }

  useEffect(() => {
    getPreditionEnding()
  }, [])

  useEffect(() => {
    ;(async () => {
      try {
        const resultDadosClientes = await GetPreditionDataClient(id!)
        setDataClient(resultDadosClientes)
        setLoading(false)
      } catch (error) {
        alert((error as any).message)
      }
    })()
  }, [])

  if (loading) {
    return (
      <Logo
        marginLeft="500px"
        width="200px"
        height="200px"
        src={load}
        alt="load"
      />
    )
  }

  return (
    <ContainerSubScreen>
      <ContainerTableStyle>
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
      </ContainerTableStyle>
      <ContainerTableStyle>
        <InformationClient
          name={dataClient?.nome || ''}
          phone={dataClient?.telefone || ''}
          email={dataClient?.email || ''}
        />
      </ContainerTableStyle>
      <ContainerTableStyle>
        <TableProduct
          button=""
          width="45%"
          headers={TitleTable}
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
          {historic.map(dadosAPI => (
            <tr key={dadosAPI.id}>
              <td className="coluna1">{dadosAPI.id}</td>
              <td className="coluna2">{dadosAPI.nome}</td>
              <td>{dadosAPI.ultimaCompra}</td>
              <td>{dadosAPI.quantidade}</td>
              <td className="arrow">
                <CheckOneStyle
                  onClick={() => dismiss(dadosAPI.id)}
                  type="button"
                >
                  <CheckOne />
                </CheckOneStyle>
              </td>
            </tr>
          ))}
        </TableProduct>
        <TableProduct
          button=""
          width="53%"
          headers={TitleTableItenEnding}
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
          {ending.map(dadosAPI => (
            <tr key={dadosAPI.id}>
              <td className="coluna1">{dadosAPI.id}</td>
              <td className="coluna2">{dadosAPI.nome}</td>
              <td className="coluna3">{dadosAPI.ultimaCompra}</td>
              <td>{dadosAPI.proximaCompra}</td>
              <td>{dadosAPI.quantidade}</td>
              <td className="arrow">
                <CheckOneStyle
                  onClick={() => dismissEnding(dadosAPI.id)}
                  type="button"
                >
                  <CheckOne />
                </CheckOneStyle>
              </td>
            </tr>
          ))}
        </TableProduct>
      </ContainerTableStyle>
    </ContainerSubScreen>
  )
}
