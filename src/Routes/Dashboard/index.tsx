import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronRight } from '../../assets/icons/ChevronRight'
import { EveryUser } from '../../assets/icons/EveryUser'
import { FacialCleanser } from '../../assets/icons/FacialCleanser'
import { ButtonStatus } from '../../components/ButtonStatus'
import { TabelaProduto } from '../../components/TabelaProduto'
import { Title } from '../../components/Title'
import { TitleWithIcon } from '../../components/TitleWithIcon'
import { DashBoard } from '../../pages/Dashboard'
import { ContainerTabelasStyle } from '../../pages/tabelas/styles'
import {
  getDashBoardTabelaCliente,
  getDashBoardTabelaProduto,
  GetDashBoardTabelaProps,
} from '../../services/GetDashboardResumo/getDashboardTabela'
import { colors } from '../../theme'
// import { dateHelper } from '../../utils'

const TitleTabela = ['ID', 'Produto', 'Percentual', ' ']
const TitleTabela1 = ['ID', 'Cliente', 'Percentual', ' ']

// const TabelaDadosAPI = [
//   {
//     id: '001',
//     produto: 'Papel Higiênico',
//     percentual: '+72%',
//   },
//   {
//     id: '002',
//     produto: 'Sabonete',
//     percentual: '+24%',
//   },
//   {
//     id: '003',
//     produto: 'Alcool em gel',
//     percentual: '+62%',
//   },
//   {
//     id: '004',
//     produto: 'Detergente',
//     percentual: '+20%',
//   },
//   {
//     id: '005',
//     produto: 'Papel Higiênico',
//     percentual: '+72%',
//   },
//   {
//     id: '006',
//     produto: 'Sabonete',
//     percentual: '+24%',
//   },
//   {
//     id: '007',
//     produto: 'Alcool em gel',
//     percentual: '+62%',
//   },
//   {
//     id: '008',
//     produto: 'Detergente',
//     percentual: '+20%',
//   },
// ]

export function PageDashboard() {
  const [emAltaProduto, setEmAltaProduto] = useState(false)
  const [emAltaCliente, setEmAltaCliente] = useState(false)

  // const [date, setDate] = useState(dateHelper.thisMonth)

  const statusProdutos = () => setEmAltaProduto(!emAltaProduto)
  const statusClientes = () => setEmAltaCliente(!emAltaCliente)

  const [tabelaProduto, setTabelaProduto] = useState<GetDashBoardTabelaProps>(
    []
  )
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      try {
        const result = await getDashBoardTabelaProduto(
          '25/09/2022',
          '10/09/2022',
          emAltaProduto ? 'EM_BAIXA' : 'EM_ALTA'
        )
        setTabelaProduto(result)
        setLoading(false)
      } catch (error) {
        alert((error as any).message)
      }
    })()
  }, [emAltaProduto])

  const [tabelaClientes, setTabelaClientes] = useState<GetDashBoardTabelaProps>(
    []
  )

  useEffect(() => {
    ;(async () => {
      try {
        const result = await getDashBoardTabelaCliente(
          '25/09/2022',
          '10/09/2022',
          emAltaCliente ? 'EM_BAIXA' : 'EM_ALTA'
        )
        setTabelaClientes(result)
        setLoading(false)
      } catch (error) {
        alert((error as any).message)
      }
    })()
  }, [emAltaCliente])

  const navigate = useNavigate()

  const goToPage = (url: string) => {
    navigate(url)
  }

  // const changeDate = (event: ChangeEvent<HTMLSelectElement>) => {
  //   const { value } = event.currentTarget
  //   if (value === '0') {
  //     setDate(dateHelper.thisMonth())
  //   } else {
  //     setDate(dateHelper.lastDays(Number(value)))
  //   }
  // }

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
      <DashBoard
        data={0}
        data30={30}
        data60={60}
        data90={90}
        data120={120}
        // onChange={changeDate}
      />

      <ContainerTabelasStyle margin="14vw">
        <TabelaProduto
          title={
            <TitleWithIcon
              marginLeft="10px"
              fontSize="16px"
              background={colors.azul4}
              color={colors.grey900}
              icon={<FacialCleanser color={colors.azul1} />}
              title="Produtos"
            />
          }
          button={
            <ButtonStatus emAlta={emAltaProduto} trocaStatus={statusProdutos} />
          }
          width="49%"
          headers={TitleTabela}
        >
          {tabelaProduto.map(dadosAPI => (
            <tr
              className="onClick"
              onClick={() => goToPage('/informacoesprodutos')}
            >
              <td className="coluna1">{dadosAPI.id}</td>
              <td className="coluna2">{dadosAPI.nome}</td>
              <td className="coluna3">{dadosAPI.percentual}</td>
              <td className="arrow">
                <ChevronRight />
              </td>
            </tr>
          ))}
        </TabelaProduto>
        <TabelaProduto
          title={
            <TitleWithIcon
              marginLeft="10px"
              fontSize="16px"
              background={colors.azul1}
              color={colors.grey900}
              icon={<EveryUser />}
              title="Clientes"
            />
          }
          button={
            <ButtonStatus emAlta={emAltaCliente} trocaStatus={statusClientes} />
          }
          width="49%"
          headers={TitleTabela1}
        >
          {tabelaClientes.map(dadosAPI => (
            <tr>
              <td className="coluna1">{dadosAPI.id}</td>
              <td className="coluna2">{dadosAPI.nome}</td>
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
