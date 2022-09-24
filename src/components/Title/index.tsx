// função nao utilizada
import { TitleStyle } from './styles'

type TituloProps = {
  texto: string
  tamanho: number
  color: string
  marginLeft: string
  marginBotton?: string
}

export function Title({
  texto,
  tamanho,
  color,
  marginLeft,
  marginBotton,
}: TituloProps) {
  return (
    <div>
      <TitleStyle
        marginLeft={marginLeft}
        margin={marginBotton}
        tamanho={tamanho}
        color={color}
      >
        {texto}
      </TitleStyle>
    </div>
  )
}
