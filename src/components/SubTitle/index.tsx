import { SubTitleStyle } from './styles'

type SubTitleProps = {
  text: string
  size: number
  color: string
  fontWeight: number
}

export function SubTitle({ text, size, color, fontWeight }: SubTitleProps) {
  return (
    <div>
      <SubTitleStyle fontWeight={fontWeight} tamanho={size} color={color}>
        {text}
      </SubTitleStyle>
    </div>
  )
}
