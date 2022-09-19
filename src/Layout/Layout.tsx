import { ReactNode } from 'react'
import { Wrapper } from '../assets/Wrapper'
import { ContainerPagesStyle } from '../components/ContainerPages/ContainerPagesStyle'
import { Menu } from '../components/Menu'
import { Topo } from '../components/Topo'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Wrapper>
        <Menu />
        <ContainerPagesStyle>
          <Topo />
          {children}
        </ContainerPagesStyle>
      </Wrapper>
    </div>
  )
}
