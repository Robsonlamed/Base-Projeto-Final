import { ButtonFaleConoscoStyle } from './styles'

type ButtonFaleConoscoProps = {
  text: string
  onClick?: () => void
}

export function ButtonFaleConosco({ text, onClick }: ButtonFaleConoscoProps) {
  return (
    <div>
      <ButtonFaleConoscoStyle onClick={onClick} type="button">
        {' '}
        {text}{' '}
      </ButtonFaleConoscoStyle>
    </div>
  )
}
