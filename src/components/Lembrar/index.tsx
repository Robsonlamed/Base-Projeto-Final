import { Checkbox, LebrarStyle } from './styles'

type LembrarProps = {
  text: string
  fontSize: string
}

export function Lembrar({ text, fontSize }: LembrarProps) {
  return (
    <LebrarStyle fontSize={fontSize}>
      <Checkbox type="checkbox" />
      <span>{text}</span>
    </LebrarStyle>
  )
}
