import { Link } from 'react-router-dom'
import logoW3 from '../../assets/images/logoW3.svg'
import { BackgroundContactUs } from '../BackgroundContactUs'
import { ItensMenu } from '../ItensMenu'
import { Logo, MenuStyles } from './styles'

export function Menu() {
  return (
    <MenuStyles width="14vw">
      <Link to="/">
        <Logo width="126" height="28" src={logoW3} alt="logo W3" />
      </Link>

      <ItensMenu marginLeft="20px" />
      <BackgroundContactUs />
    </MenuStyles>
  )
}
