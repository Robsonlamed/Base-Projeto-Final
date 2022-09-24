import { ButtonFaleConoscoStyle } from './styles'

type ButtonFaleConoscoProps = {
  text: string
}

export function ButtonFaleConosco({ text }: ButtonFaleConoscoProps) {
  return (
    <div>
      <ButtonFaleConoscoStyle type="submit"> {text} </ButtonFaleConoscoStyle>
    </div>
  )
}
