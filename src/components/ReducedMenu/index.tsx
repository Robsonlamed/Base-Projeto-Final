import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { Wrapper } from '../../assets/Wrapper'
import { ItensMenuReduzido } from '../ItensMenu'
import { Logo } from '../Menu/styles'
import { MenuStyles } from './styles'

export function ReduceMenu() {
  return (
    <Wrapper>
      <MenuStyles>
        <Link to="/">
          <Logo
            marginLeft="-22px"
            width="126"
            height="28"
            src={logo}
            alt="logo W3"
          />
        </Link>

        <ItensMenuReduzido marginLeft="15px" />
      </MenuStyles>
    </Wrapper>
  )
}
