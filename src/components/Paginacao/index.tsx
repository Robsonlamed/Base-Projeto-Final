import { ChevronLeft } from '../../assets/icons/ChevronLeft'
import { ChevronRight } from '../../assets/icons/ChevronRight'
import {
  PaginacaoStyle,
  PaginacaoStylePages,
  PaginacaoStylePaginas,
} from './styles'

type PaginacaoProps = {
  totalRegistroNaPagina: number
  totalRegistrosNaAPI: number
  paginaAtual: number
  quantidadeItenPorPagina: number
  changePage: (page: number) => void
}

export function Paginacao({
  totalRegistroNaPagina,
  totalRegistrosNaAPI,
  paginaAtual,
  quantidadeItenPorPagina,
  changePage,
}: PaginacaoProps) {
  const length = Math.ceil(totalRegistrosNaAPI / quantidadeItenPorPagina)
  const pageNumbers = Array.from({ length }, (_, soma) => soma + 1)

  return (
    <PaginacaoStyle>
      <div>
        <p>
          {totalRegistroNaPagina} de {totalRegistrosNaAPI} itens
        </p>
      </div>
      <PaginacaoStylePages>
        {length > 1 && paginaAtual > 1 && (
          <button type="button" onClick={() => changePage(paginaAtual - 1)}>
            <ChevronLeft />
          </button>
        )}

        {pageNumbers.map(iten => (
          <PaginacaoStylePaginas
            className={iten === paginaAtual ? 'active' : ''}
            type="button"
            key={iten}
            onClick={() => changePage(iten)}
          >
            {iten}
          </PaginacaoStylePaginas>
        ))}

        {length > 1 && paginaAtual < length && (
          <button type="button" onClick={() => changePage(paginaAtual + 1)}>
            <ChevronRight />
          </button>
        )}
      </PaginacaoStylePages>
    </PaginacaoStyle>
  )
}
