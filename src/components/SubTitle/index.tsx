import { SubTitleStyle } from './styles'

type SubTituloProps = {
  texto: string
  tamanho: number
  color: string
  fontWeight: number
}

export function SubTitle({
  texto,
  tamanho,
  color,
  fontWeight,
}: SubTituloProps) {
  return (
    <div>
      <SubTitleStyle fontWeight={fontWeight} tamanho={tamanho} color={color}>
        {texto}
      </SubTitleStyle>
    </div>
  )
}
