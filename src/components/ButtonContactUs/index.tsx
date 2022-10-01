import { ButtonContactUsStyle } from './styles'

type ButtonContactUsProps = {
  text: string
  onClick?: () => void
}

export function ButtonContactUs({ text, onClick }: ButtonContactUsProps) {
  return (
    <div>
      <ButtonContactUsStyle onClick={onClick} type="button">
        {' '}
        {text}{' '}
      </ButtonContactUsStyle>
    </div>
  )
}
