import { ChevronLeft } from '../../assets/icons/ChevronLeft'
import { ChevronRight } from '../../assets/icons/ChevronRight'
import {
  PaginationStyle,
  PaginationStylePages,
  PaginationStylePagesButton,
} from './styles'

type PaginationProps = {
  totalPagesListed: number
  totalPagesListedInAPI: number
  currentPage: number
  numberItenPage: number
  changePage: (page: number) => void
}

export function Paginacao({
  totalPagesListed,
  totalPagesListedInAPI,
  currentPage,
  numberItenPage,
  changePage,
}: PaginationProps) {
  const length = Math.ceil(totalPagesListedInAPI / numberItenPage)
  const pageNumbers = Array.from({ length }, (_, soma) => soma + 1)

  return (
    <PaginationStyle>
      <div>
        <p>
          {totalPagesListed} de {totalPagesListedInAPI} itens
        </p>
      </div>
      <PaginationStylePages>
        {length > 1 && currentPage > 1 && (
          <button type="button" onClick={() => changePage(currentPage - 1)}>
            <ChevronLeft />
          </button>
        )}

        {pageNumbers.map(iten => (
          <PaginationStylePagesButton
            className={iten === currentPage ? 'active' : ''}
            type="button"
            key={iten}
            onClick={() => changePage(iten)}
          >
            {iten}
          </PaginationStylePagesButton>
        ))}

        {length > 1 && currentPage < length && (
          <button type="button" onClick={() => changePage(currentPage + 1)}>
            <ChevronRight />
          </button>
        )}
      </PaginationStylePages>
    </PaginationStyle>
  )
}
