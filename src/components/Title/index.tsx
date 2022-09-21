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
      <TitleStyle margin="0px" tamanho={tamanho} color={color}>
        {texto}
      </TitleStyle>
    </div>
  )
}
