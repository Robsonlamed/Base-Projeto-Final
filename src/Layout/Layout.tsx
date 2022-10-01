import { ReactNode, useState } from 'react'
import { Wrapper } from '../assets/Wrapper'
import { ContainerPagesStyle } from '../components/ContainerPages/ContainerPagesStyle'
import { Menu } from '../components/Menu'
import { MenuReduzido } from '../components/MenuReduzido'
import { Topo } from '../components/Topo'
import { PageStyle } from '../Routes/PageStyle/stylex'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const [openMenu, setOpenMenu] = useState(false)
  const openMenus = () => setOpenMenu(!openMenu)

  return (
    <div>
      <Wrapper>
        {openMenu ? <MenuReduzido /> : <Menu />}
        <ContainerPagesStyle width="92.7vw" marginLeft="6vw">
          <div>
            <Topo openMenu={openMenus} width={openMenu ? '92.7vw' : '84.8vw'} />
            <PageStyle
              width={openMenu ? '92.7vw' : '84.8vw'}
              marginLeft={openMenu ? '' : '7.8vw'}
            >
              {children}
            </PageStyle>
          </div>
        </ContainerPagesStyle>
      </Wrapper>
    </div>
  )
}
