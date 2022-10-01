import { ChangeEvent, ReactNode } from 'react'
import { Search } from '../../assets/icons/Search'
import { ContainerSearch, SearchPredictionStyle } from './styles'
import { colors } from '../../theme'
import { ContainerInput, InputStyle } from '../Input/styles'

type FilterProps = {
  icon: ReactNode
  boxShadow: string
  paddinLeft: string
  height: string
  marginBotton: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  value: string
  startSearch: () => void
}

export function SearchPrediction({
  icon,
  boxShadow,
  paddinLeft,
  height,
  marginBotton,
  onChange,
  value,
  startSearch,
}: FilterProps) {
  return (
    <ContainerSearch
      height={height}
      paddinLeft={paddinLeft}
      boxShadow={boxShadow}
      marginBotton={marginBotton}
    >
      <ContainerInput>
        <div>
          <InputStyle
            onChange={onChange}
            value={value}
            type="text"
            name=""
            id=""
            placeholder="Pesquise uma palavra-chave"
            border={colors.grey300}
          />
          <SearchPredictionStyle onClick={startSearch}>
            <Search />
          </SearchPredictionStyle>
        </div>
        {icon}
      </ContainerInput>
    </ContainerSearch>
  )
}
