// função nao utilizada
import { TitleStyle } from './styles'

type TituloProps = {
  texto: string
  tamanho: number
  color: string
}

export function Title({ texto, tamanho, color }: TituloProps) {
  return (
    <div>
      <TitleStyle tamanho={tamanho} color={color}>
        {texto}
      </TitleStyle>
    </div>
  )
}
