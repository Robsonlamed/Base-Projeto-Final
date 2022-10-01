// função nao utilizada
import { TitleStyle } from './styles'

type TitleProps = {
  text: string
  size: number
  color: string
  marginLeft: string
  marginBotton?: string
}

export function Title({
  text,
  size,
  color,
  marginLeft,
  marginBotton,
}: TitleProps) {
  return (
    <div>
      <TitleStyle
        marginLeft={marginLeft}
        margin={marginBotton}
        tamanho={size}
        color={color}
      >
        {text}
      </TitleStyle>
    </div>
  )
}
