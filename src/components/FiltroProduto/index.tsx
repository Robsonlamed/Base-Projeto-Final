import { Dispatch, SetStateAction } from 'react'
import { colors } from '../../theme'
import { ButtonFaleConosco } from '../ButtonFaleConosco'
import { Lembrar } from '../Lembrar'
import { SubTitle } from '../SubTitle'
import {
  FiltroProdutoContainer,
  FiltroProdutoContainerMascara,
  FiltroProdutoHr,
  FiltroProdutoSpan,
  FiltroProdutoStyle,
  FiltroProdutoSubTitle,
} from './styles'

type FiltroProdutoProps = {
  filtro: 'TODOS' | 'EM_ALTA' | 'EM_BAIXA'
  setFiltro: Dispatch<SetStateAction<'TODOS' | 'EM_ALTA' | 'EM_BAIXA'>>
  setOpenFiltro: Dispatch<SetStateAction<boolean>>
  onClickAplicar: () => void
  totalProdutos?: number
  totalProdutosEmAlta?: number
  totalProdutosEmBaixa?: number
}

export function FiltroProduto({
  filtro,
  setFiltro,
  onClickAplicar,
  totalProdutos,
  totalProdutosEmAlta,
  totalProdutosEmBaixa,
  setOpenFiltro,
}: FiltroProdutoProps) {
  return (
    <FiltroProdutoContainerMascara>
      <FiltroProdutoContainer>
        <FiltroProdutoSubTitle>
          <SubTitle
            texto="Filtrar por:"
            tamanho={14}
            color={colors.grey900}
            fontWeight={600}
          />
          <FiltroProdutoHr />
          <SubTitle
            texto="Status"
            tamanho={12}
            color={colors.grey900}
            fontWeight={500}
          />
        </FiltroProdutoSubTitle>
        <FiltroProdutoStyle>
          <Lembrar
            checked={filtro === 'TODOS'}
            onChange={() => setFiltro('TODOS')}
            text="Todos"
            fontSize="12px"
          />
          <FiltroProdutoSpan>{totalProdutos}</FiltroProdutoSpan>
        </FiltroProdutoStyle>

        <FiltroProdutoStyle>
          <Lembrar
            checked={filtro === 'EM_ALTA'}
            onChange={() => setFiltro('EM_ALTA')}
            text="Em alta"
            fontSize="12px"
          />
          <FiltroProdutoSpan>{totalProdutosEmAlta}</FiltroProdutoSpan>
        </FiltroProdutoStyle>

        <FiltroProdutoStyle>
          <Lembrar
            checked={filtro === 'EM_BAIXA'}
            onChange={() => setFiltro('EM_BAIXA')}
            text="Em baixa"
            fontSize="12px"
          />
          <FiltroProdutoSpan>{totalProdutosEmBaixa}</FiltroProdutoSpan>
        </FiltroProdutoStyle>

        <ButtonFaleConosco
          onClick={() => {
            onClickAplicar()
            setOpenFiltro(false)
          }}
          text="Aplicar"
        />
      </FiltroProdutoContainer>
    </FiltroProdutoContainerMascara>
  )
}
