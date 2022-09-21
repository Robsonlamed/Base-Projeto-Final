import { Search } from '../../assets/icons/Search'
import { ContainerInput, InputStyle } from '../Input/styles'
import { ContainerSearch, SearchPredicoesStyle } from './styles'
import { colors } from '../../theme'

export function SerchPredicoes() {
  return (
    <ContainerSearch>
      <ContainerInput>
        <InputStyle
          type="text"
          name=""
          id=""
          placeholder="Pesquise uma palavra-chave"
          border={colors.cinza300}
        />
        <SearchPredicoesStyle>
          <Search />
        </SearchPredicoesStyle>
      </ContainerInput>
    </ContainerSearch>
  )
}
