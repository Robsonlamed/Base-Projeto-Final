import { colors } from '../../theme'
import { ButtonStatusStyle, ContainerButtonStatus } from './styles'

type ButtonStatusProps = {
  emAlta: boolean
  trocaStatus: () => void
}

export function ButtonStatus({ emAlta, trocaStatus }: ButtonStatusProps) {
  return (
    <ContainerButtonStatus>
      <ButtonStatusStyle
        color={emAlta ? `${colors.grey500}` : `${colors.white}`}
        backgroundColor={emAlta ? `${colors.white}` : `${colors.success}`}
        type="submit"
        onClick={trocaStatus}
        // {() => {
        //   if (status) press()
        // }}
      >
        Em alta
      </ButtonStatusStyle>
      <ButtonStatusStyle
        color={emAlta ? `${colors.white}` : `${colors.grey500}`}
        backgroundColor={emAlta ? `${colors.error}` : `${colors.white}`}
        type="submit"
        onClick={trocaStatus}
      >
        Em baixa
      </ButtonStatusStyle>
    </ContainerButtonStatus>
  )
}
