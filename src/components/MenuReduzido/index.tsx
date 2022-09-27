import { ChartLine } from '../../assets/icons/ChartLine'
import { FacialCleanser } from '../../assets/icons/FacialCleanser'
import { PieTwo } from '../../assets/icons/PieTwo'
import logo from '../../assets/images/logo.svg'
import { Wrapper } from '../../assets/Wrapper'
// import { Wrapper } from '../../assets/Wrapper'
import { colors } from '../../theme'
import { LinkMenu, Logo, MenuStyles } from './styles'

export function MenuReduzido() {
  return (
    <Wrapper>
      <MenuStyles>
        <Logo src={logo} alt="logo W3" />
        <LinkMenu>
          <PieTwo />
        </LinkMenu>
        <LinkMenu>
          <ChartLine />
        </LinkMenu>
        <LinkMenu>
          <FacialCleanser color={colors.white} />
        </LinkMenu>
      </MenuStyles>
    </Wrapper>
  )
}
