import { SubTitleStyle } from './styles'

type SubTituloProps = {
  texto: string
  tamanho: number
  color: string
}

export function SubTitle({ texto, tamanho, color }: SubTituloProps) {
  return (
    <div>
      <SubTitleStyle tamanho={tamanho} color={color}>
        {texto}
      </SubTitleStyle>
    </div>
  )
}
