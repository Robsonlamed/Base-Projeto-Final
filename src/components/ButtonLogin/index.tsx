import { ButtonLoginStyle } from './styles'

type ButtonLoginProps = {
  onClick?: () => void
}

export function ButtonLogin({ onClick }: ButtonLoginProps) {
  return (
    <div>
      <ButtonLoginStyle onClick={onClick} type="submit">
        {' '}
        Entrar{' '}
      </ButtonLoginStyle>
    </div>
  )
}
