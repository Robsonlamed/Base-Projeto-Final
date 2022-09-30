import { Checkbox, LebrarStyle } from './styles'

type LembrarProps = {
  text: string
  fontSize: string
  checked: boolean
  onChange: () => void
}

export function Lembrar({ text, fontSize, checked, onChange }: LembrarProps) {
  return (
    <LebrarStyle fontSize={fontSize}>
      <Checkbox checked={checked} type="checkbox" onChange={onChange} />
      <span>{text}</span>
    </LebrarStyle>
  )
}
