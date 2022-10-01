import { Dispatch, SetStateAction } from 'react'
import { colors } from '../../theme'
import { ButtonContactUs } from '../ButtonContactUs'
import { Checked } from '../Checked'
import { SubTitle } from '../SubTitle'
import {
  FilterProductContainer,
  FilterProductContainerMask,
  FilterProductHr,
  FilterProductSpan,
  FilterProductStyle,
  FilterProductSubTitle,
} from './styles'

type FilterProductProps = {
  filter: 'TODOS' | 'EM_ALTA' | 'EM_BAIXA'
  setFilter: Dispatch<SetStateAction<'TODOS' | 'EM_ALTA' | 'EM_BAIXA'>>
  setOpenFilter: Dispatch<SetStateAction<boolean>>
  onClickToApply: () => void
  totalProduct?: number
  totalProductOnHigh?: number
  totalProductLow?: number
}

export function FiltroProduto({
  filter,
  setFilter,
  setOpenFilter,
  onClickToApply,
  totalProduct,
  totalProductOnHigh,
  totalProductLow,
}: FilterProductProps) {
  return (
    <FilterProductContainerMask>
      <FilterProductContainer>
        <FilterProductSubTitle>
          <SubTitle
            text="Filtrar por:"
            size={14}
            color={colors.grey900}
            fontWeight={600}
          />
          <FilterProductHr />
          <SubTitle
            text="Status"
            size={12}
            color={colors.grey900}
            fontWeight={500}
          />
        </FilterProductSubTitle>
        <FilterProductStyle>
          <Checked
            checked={filter === 'TODOS'}
            onChange={() => setFilter('TODOS')}
            text="Todos"
            fontSize="12px"
          />
          <FilterProductSpan>{totalProduct}</FilterProductSpan>
        </FilterProductStyle>

        <FilterProductStyle>
          <Checked
            checked={filter === 'EM_ALTA'}
            onChange={() => setFilter('EM_ALTA')}
            text="Em alta"
            fontSize="12px"
          />
          <FilterProductSpan>{totalProductOnHigh}</FilterProductSpan>
        </FilterProductStyle>

        <FilterProductStyle>
          <Checked
            checked={filter === 'EM_BAIXA'}
            onChange={() => setFilter('EM_BAIXA')}
            text="Em baixa"
            fontSize="12px"
          />
          <FilterProductSpan>{totalProductLow}</FilterProductSpan>
        </FilterProductStyle>

        <ButtonContactUs
          onClick={() => {
            onClickToApply()
            setOpenFilter(false)
          }}
          text="Aplicar"
        />
      </FilterProductContainer>
    </FilterProductContainerMask>
  )
}
