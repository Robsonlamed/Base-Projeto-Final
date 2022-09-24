import { ButtonLoginStyle } from './styles'

type ButtonProps = {
  onClick?: () => void
}

export function ButtonLogin({ onClick }: ButtonProps) {
  return (
    <div>
      <ButtonLoginStyle onClick={onClick} type="submit">
        {' '}
        Entrar{' '}
      </ButtonLoginStyle>
    </div>
  )
}
