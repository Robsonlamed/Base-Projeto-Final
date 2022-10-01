import { Link } from 'react-router-dom'
import logoW3 from '../../assets/images/logoW3.svg'
import { FundoFaleConosco } from '../FundoFaleConosco'
import { ItensMenu } from '../ItensMenu'
import { Logo, MenuStyles } from './styles'

export function Menu() {
  return (
    <MenuStyles width="14vw">
      <Link to="/">
        <Logo src={logoW3} alt="logo W3" />
      </Link>

      <ItensMenu />
      <FundoFaleConosco />
    </MenuStyles>
  )
}
