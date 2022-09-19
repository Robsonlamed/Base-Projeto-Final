import { ReactNode } from 'react'
import { Container, TituloTabelaStyle } from './styles'

type TituloCardTabelaProps = {
  icon: ReactNode
  titulo: string
}

export function TituloCardTabela({ icon, titulo }: TituloCardTabelaProps) {
  return (
    <Container>
      <TituloTabelaStyle>{icon}</TituloTabelaStyle>
      <span> {titulo} </span>
    </Container>
  )
}
