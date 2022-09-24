import { ReactNode, useState } from 'react'
import { Wrapper } from '../assets/Wrapper'
import { ContainerPagesStyle } from '../components/ContainerPages/ContainerPagesStyle'
import { Menu } from '../components/Menu'
import { MenuReduzido } from '../components/MenuReduzido'
import { Topo } from '../components/Topo'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const [openMenu, setOpenMenu] = useState(false)
  const openMenus = () => setOpenMenu(!openMenu)

  return (
    <div>
      <Wrapper>
        <ContainerPagesStyle>
          {openMenu ? <MenuReduzido /> : <Menu />}
          <Topo openMenu={openMenus} />
          {children}
        </ContainerPagesStyle>
      </Wrapper>
    </div>
  )
}
