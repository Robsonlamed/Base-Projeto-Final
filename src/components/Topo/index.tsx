import { useState } from 'react'
import { ChevronDown } from '../../assets/icons/ChevronDown'
import { IconeMenu } from '../../assets/icons/Menu'
import { UserStyle } from '../../assets/icons/User'
import { Configuracoes } from '../Configuracoes'
// import { Menu } from '../Menu'
// import { MenuReduzido } from '../MenuReduzido'
import { IconeUser, Logado, TopoStyles } from './styles'
import { User } from './User'

type IconeMenuProps = {
  openMenu: () => void
}

export function Topo({ openMenu }: IconeMenuProps) {
  const [openConfig, setOpenConfig] = useState(false)
  const open = () => setOpenConfig(!openConfig)

  return (
    <div>
      <TopoStyles>
        <div className="sanduiche">
          <button onClick={openMenu} type="button">
            <IconeMenu />
          </button>
        </div>
        <Logado>
          <IconeUser>
            <UserStyle />
          </IconeUser>
          <User name="Robson Santos" email="robson@gmail.com" />
          <button onClick={open} type="button">
            <ChevronDown />
          </button>
        </Logado>
      </TopoStyles>
      {openConfig ? <Configuracoes /> : null}
    </div>
  )
}
