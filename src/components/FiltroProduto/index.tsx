import { colors } from '../../theme'
import { ButtonFaleConosco } from '../ButtonFaleConosco'
import { Lembrar } from '../Lembrar'
import { SubTitle } from '../SubTitle'
import {
  FiltroProdutoContainer,
  FiltroProdutoHr,
  FiltroProdutoSpan,
  FiltroProdutoStyle,
  FiltroProdutoSubTitle,
} from './styles'

export function FiltroProduto() {
  return (
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
        <Lembrar text="Todos" fontSize="12px" />
        <FiltroProdutoSpan>123</FiltroProdutoSpan>
      </FiltroProdutoStyle>
      <FiltroProdutoStyle>
        <Lembrar text="Em alta" fontSize="12px" />
        <FiltroProdutoSpan>123</FiltroProdutoSpan>
      </FiltroProdutoStyle>
      <FiltroProdutoStyle>
        <Lembrar text="Em baixa" fontSize="12px" />
        <FiltroProdutoSpan>123</FiltroProdutoSpan>
      </FiltroProdutoStyle>
      <ButtonFaleConosco text="Aplicar" />
    </FiltroProdutoContainer>
  )
}
