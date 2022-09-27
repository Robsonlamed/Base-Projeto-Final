import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Filter } from '../../assets/icons/Filter'
import { FiltroProduto } from '../../components/FiltroProduto'
import { FilterStyle } from '../../components/Input/styles'
import { SerchPredicoes } from '../../components/Search'
import { TabelaProduto } from '../../components/TabelaProduto'
import { Title } from '../../components/Title'
import { ContainerTabelasStyle } from '../../pages/tabelas/styles'
import { colors } from '../../theme'
import { ContainerProdutosStyle, Status, SubTelaProdutoButton } from './styles'

const TitleTabela = ['ID', 'Produto', 'Status', 'Percentual']

const TabelaDadosAPI = [
  {
    id: '001',
    produto: 'Papel Higiênico',
    ultimaCompra: 'Em alta',
    proximaCompra: 'Em alta',
    quantidade: '+10%',
  },
  {
    id: '002',
    produto: 'Sabonete',
    ultimaCompra: 'Em baixa',
    proximaCompra: '05/10',
    quantidade: '-12%',
  },
  {
    id: '003',
    produto: 'Alcool em gel',
    ultimaCompra: 'Em baixa',
    proximaCompra: '05/10',
    quantidade: '-31%',
  },
  {
    id: '004',
    produto: 'Detergente',
    ultimaCompra: 'Em alta',
    proximaCompra: '05/10',
    quantidade: '+62%',
  },
  {
    id: '005',
    produto: 'Papel Higiênico',
    ultimaCompra: 'Em alta',
    proximaCompra: '05/10',
    quantidade: '+42%',
  },
  {
    id: '006',
    produto: 'Sabonete',
    ultimaCompra: 'Em baixa',
    proximaCompra: '05/10',
    quantidade: '-12%',
  },
  {
    id: '007',
    produto: 'Alcool em gel',
    ultimaCompra: 'Em baixa',
    proximaCompra: '05/10',
    quantidade: '-20%',
  },
]

export function PageProdutos() {
  const navigate = useNavigate()

  const goToPage = (url: string) => {
    navigate(url)
  }

  const [openFilter, setOpenFilter] = useState(false)
  const open = () => setOpenFilter(!openFilter)

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
            title={
              <SerchPredicoes
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
            {TabelaDadosAPI.map(dadosAPI => (
              <tr
                className="onClick"
                onClick={() => goToPage('/informacoesprodutos')}
              >
                <td className="coluna1">{dadosAPI.id}</td>
                <td className="coluna2">{dadosAPI.produto}</td>
                <td>
                  <Status
                    color={
                      dadosAPI.ultimaCompra === 'Em alta'
                        ? `${colors.success}`
                        : `${colors.error}`
                    }
                    backgroundColor={
                      dadosAPI.ultimaCompra === 'Em alta'
                        ? `${colors.lightGreen}`
                        : `${colors.lightRed}`
                    }
                  >
                    {dadosAPI.ultimaCompra}
                  </Status>
                </td>
                <td>{dadosAPI.quantidade}</td>
              </tr>
            ))}
          </TabelaProduto>
          {openFilter ? <FiltroProduto /> : null}
        </ContainerTabelasStyle>
      </ContainerProdutosStyle>
    </div>
  )
}
