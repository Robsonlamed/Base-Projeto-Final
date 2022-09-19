// import { ChartLine } from '../../assets/icons/ChartLine'
// import { FacialCleanser } from '../../assets/icons/FacialCleanser'
// import { PieTwo } from '../../assets/icons/PieTwo'
// import logo from '../../assets/images/logo.svg'
// import { Wrapper } from '../../assets/Wrapper'
// import { MenuReduzidoStyles } from './styles'

// export function MenuReduzido() {
//   return (
//     <Wrapper>
//       <MenuReduzidoStyles>
//         <img src={logo} alt="logo W3" />
//         <ul>
//           <li>
//             <PieTwo />
//           </li>
//           <li>
//             <ChartLine />
//           </li>
//           <li>
//             <FacialCleanser />
//           </li>
//         </ul>
//       </MenuReduzidoStyles>
//     </Wrapper>
//   )
// }

import { ChartLine } from '../../assets/icons/ChartLine'
import { FacialCleanser } from '../../assets/icons/FacialCleanser'
import { PieTwo } from '../../assets/icons/PieTwo'
import logo from '../../assets/images/logo.svg'
import { Wrapper } from '../../assets/Wrapper'
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
          <FacialCleanser />
        </LinkMenu>
      </MenuStyles>
    </Wrapper>
  )
}
