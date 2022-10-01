import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { Wrapper } from '../../assets/Wrapper'
import { ItensMenuReduzido } from '../ItensMenu'
import { Logo, MenuStyles } from './styles'

export function MenuReduzido() {
  return (
    <Wrapper>
      <MenuStyles>
        <Link to="/">
          <Logo src={logo} alt="logo W3" />
        </Link>

        <ItensMenuReduzido />
      </MenuStyles>
    </Wrapper>
  )
}
