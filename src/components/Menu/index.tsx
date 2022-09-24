import logoW3 from '../../assets/images/logoW3.svg'
import { Wrapper } from '../../assets/Wrapper'
// import { Wrapper } from '../../assets/Wrapper'
import { FundoFaleConosco } from '../FundoFaleConosco'
import { ItensMenu } from '../ItensMenu'
import { Logo, MenuStyles } from './styles'

export function Menu() {
  return (
    <Wrapper>
      <MenuStyles>
        <Logo src={logoW3} alt="logo W3" />
        <ItensMenu />
        <FundoFaleConosco />
      </MenuStyles>
    </Wrapper>
  )
}
