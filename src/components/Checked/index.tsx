import { Checkbox, CheckedStyle } from './styles'

type CheckedProps = {
  text: string
  fontSize: string
  checked: boolean
  onChange: () => void
}

export function Checked({ text, fontSize, checked, onChange }: CheckedProps) {
  return (
    <CheckedStyle fontSize={fontSize}>
      <Checkbox checked={checked} type="checkbox" onChange={onChange} />
      <span>{text}</span>
    </CheckedStyle>
  )
}
