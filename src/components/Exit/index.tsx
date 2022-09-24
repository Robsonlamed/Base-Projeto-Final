import { Logout } from '../../assets/icons/Logout'
import { ExitStyle } from './style'

export function Exit() {
  return (
    <ExitStyle>
      <Logout />
      <span>Sair</span>
    </ExitStyle>
  )
}
