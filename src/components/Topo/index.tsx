import { ChevronDown } from '../../assets/icons/ChevronDown'
import { IconeMenu } from '../../assets/icons/Menu'
import { UserStyle } from '../../assets/icons/User'
import { IconeUser, Logado, TopoStyles } from './styles'
import { User } from './User'

export function Topo() {
  return (
    <TopoStyles>
      <div className="sanduiche">
        <IconeMenu />
      </div>
      <Logado>
        <IconeUser>
          <UserStyle />
        </IconeUser>
        <User name="Robson Santos" email="robson@gmail.com" />
        <ChevronDown />
      </Logado>
    </TopoStyles>
  )
}
