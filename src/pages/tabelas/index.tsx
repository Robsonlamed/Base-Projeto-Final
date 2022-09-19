import { TabelaProduto } from '../../components/TabelaProduto'
import { ContainerTabelasStyle } from './styles'
import { ChevronRight } from '../../assets/icons/ChevronRight'

export function PageTabela() {
  return (
    <ContainerTabelasStyle>
      <TabelaProduto icon={<ChevronRight />} />
      <TabelaProduto icon={<ChevronRight />} />
    </ContainerTabelasStyle>
  )
}
