import { ReactNode } from 'react'
import { Search } from '../../assets/icons/Search'
import { ContainerSearch, SearchPredicoesStyle } from './styles'
import { colors } from '../../theme'
import { ContainerInput, InputStyle } from '../Input/styles'

type FilterProps = {
  icon: ReactNode
  boxShadow: string
  paddinLeft: string
  height: string
  marginBotton: string
}

export function SerchPredicoes({
  icon,
  boxShadow,
  paddinLeft,
  height,
  marginBotton,
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
            type="text"
            name=""
            id=""
            placeholder="Pesquise uma palavra-chave"
            border={colors.grey300}
          />
          <SearchPredicoesStyle>
            <Search />
          </SearchPredicoesStyle>
        </div>
        {icon}
      </ContainerInput>
    </ContainerSearch>
  )
}
