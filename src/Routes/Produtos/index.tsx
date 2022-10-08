import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Filter } from '../../assets/icons/Filter'
import { FiltroProduto } from '../../components/FilterProduct'
import { FilterStyle } from '../../components/Input/styles'
import { Logo } from '../../components/Menu/styles'
import { SearchPrediction } from '../../components/Search'
import { TableProduct } from '../../components/TableProduct'
import { Title } from '../../components/Title'
import { ContainerTableStyle } from '../../pages/Dashboard/styles'
import { GetProduct, GetProductProps } from '../../services/GetProduto'
import { colors } from '../../theme'
import { ContainerProductStyle, Status, SubTelaProdutoButton } from './styles'
import load from '../../assets/images/load.svg'

const TitleTabela = ['ID', 'Produto', 'Status', 'Percentual']

export function PageProduct() {
  const [search, setSearch] = useState('')

  const [product, setProduct] = useState<GetProductProps>()

  const [loading, setLoading] = useState(true)

  const [openFilter, setOpenFilter] = useState(false)

  const [filter, setFilter] = useState<'TODOS' | 'EM_ALTA' | 'EM_BAIXA'>(
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
      const classificacao = filter === 'TODOS' ? undefined : filter
      const result = await GetProduct(search, page, classificacao)
      setProduct(result)
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
    <div>
      <ContainerProductStyle>
        <Title
          marginLeft="28px"
          text="Produtos"
          size={24}
          color={colors.grey900}
        />
        <ContainerTableStyle>
          <TableProduct
            totalPagesListed={product?.numberOfElements || 0}
            totalPagesListedInAPI={product?.totalElements || 0}
            currentPage={product?.number || 0}
            numberItenPage={product?.size || 0}
            changePage={pagina => setPage(pagina)}
            title={
              <SearchPrediction
                startSearch={startSearch}
                onChange={event => setSearch(event.currentTarget.value)}
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
            {product &&
              product.content.map(dadosAPI => (
                <tr
                  key={dadosAPI.id}
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
                      {dadosAPI.classificacao === 'EM_ALTA'
                        ? 'Em alta'
                        : 'Em baixa'}
                    </Status>
                  </td>
                  <td>{String(dadosAPI.percentual).replace('.', ',')}%</td>
                </tr>
              ))}
          </TableProduct>

          {openFilter ? (
            <FiltroProduto
              totalProduct={product?.totalElements}
              onClickToApply={startSearch}
              setOpenFilter={setOpenFilter}
              filter={filter}
              setFilter={setFilter}
            />
          ) : null}
        </ContainerTableStyle>
      </ContainerProductStyle>
    </div>
  )
}
