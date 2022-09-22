// função nao utilizada
import { TitleStyle } from './styles'

type TituloProps = {
  texto: string
  tamanho: number
  color: string
  marginLeft: string
}

export function Title({ texto, tamanho, color, marginLeft }: TituloProps) {
  return (
    <div>
      <TitleStyle
        marginLeft={marginLeft}
        margin="0px"
        tamanho={tamanho}
        color={color}
      >
        {texto}
      </TitleStyle>
    </div>
  )
}
