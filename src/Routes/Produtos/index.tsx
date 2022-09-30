import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Filter } from '../../assets/icons/Filter'
import { FiltroProduto } from '../../components/FiltroProduto'
import { FilterStyle } from '../../components/Input/styles'
import { SerchPredicoes } from '../../components/Search'
import { TabelaProduto } from '../../components/TabelaProduto'
import { Title } from '../../components/Title'
import { ContainerTabelasStyle } from '../../pages/tabelas/styles'
import { GetProduto, GetProdutoProps } from '../../services/GetProduto'
import { colors } from '../../theme'
import { ContainerProdutosStyle, Status, SubTelaProdutoButton } from './styles'

const TitleTabela = ['ID', 'Produto', 'Status', 'Percentual']

export function PageProdutos() {
  const [search, setSearch] = useState('')

  const [produtos, setProdutos] = useState<GetProdutoProps>()

  const [loading, setLoading] = useState(true)

  const [openFilter, setOpenFilter] = useState(false)

  const [filtro, setFiltro] = useState<'TODOS' | 'EM_ALTA' | 'EM_BAIXA'>(
    'TODOS'
  )

  const [page, setPage] = useState(1)

  const open = () => setOpenFilter(!openFilter)
  const navigate = useNavigate()

  const goToPage = (url: string) => {
    navigate(url)
  }

  const startSearch = async () => {
    try {
      const classificacao = filtro === 'TODOS' ? undefined : filtro
      const result = await GetProduto(search, page, classificacao)
      setProdutos(result)
      setLoading(false)
    } catch (error) {
      alert((error as any).message)
    }
  }

  useEffect(() => {
    startSearch()
  }, [page])

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
      <ContainerProdutosStyle>
        <Title
          marginLeft="28px"
          texto="Produtos"
          tamanho={24}
          color={colors.grey900}
        />
        <ContainerTabelasStyle margin="0px">
          <TabelaProduto
            totalRegistroNaPagina={produtos?.numberOfElements || 0}
            totalRegistrosNaAPI={produtos?.totalElements || 0}
            paginaAtual={produtos?.number || 0}
            quantidadeItenPorPagina={produtos?.size || 0}
            changePage={pagina => setPage(pagina)}
            title={
              <SerchPredicoes
                startSearch={startSearch}
                onChange={event => setSearch(event.target.value)}
                value={search}
                height="0px"
                icon={
                  <FilterStyle>
                    <SubTelaProdutoButton onClick={open} type="button">
                      <Filter />
                    </SubTelaProdutoButton>
                  </FilterStyle>
                }
                boxShadow=""
                paddinLeft="0px"
                marginBotton="30px"
              />
            }
            button=""
            width="100%"
            headers={TitleTabela}
          >
            {produtos &&
              produtos.content.map(dadosAPI => (
                <tr
                  className="onClick"
                  onClick={() =>
                    goToPage(`/informacoesprodutos/${dadosAPI.id}`)
                  }
                >
                  <td className="coluna1">{dadosAPI.id}</td>
                  <td className="coluna2">{dadosAPI.nome}</td>
                  <td>
                    <Status
                      color={
                        dadosAPI.classificacao === 'EM_ALTA'
                          ? `${colors.success}`
                          : `${colors.error}`
                      }
                      backgroundColor={
                        dadosAPI.classificacao === 'EM_ALTA'
                          ? `${colors.lightGreen}`
                          : `${colors.lightRed}`
                      }
                    >
                      {dadosAPI.classificacao}
                    </Status>
                  </td>
                  <td>{dadosAPI.percentual}%</td>
                </tr>
              ))}
          </TabelaProduto>

          {openFilter ? (
            <FiltroProduto
              totalProdutos={produtos?.totalElements}
              // totalProdutosEmAlta={produtos?.totalElements}
              // totalProdutosEmBaixa={produtos?.totalElements}
              onClickAplicar={startSearch}
              setOpenFiltro={setOpenFilter}
              filtro={filtro}
              setFiltro={setFiltro}
            />
          ) : null}
        </ContainerTabelasStyle>
      </ContainerProdutosStyle>
    </div>
  )
}
