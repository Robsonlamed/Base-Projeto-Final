import { colors } from '../../theme'
import { ButtonStatusStyle, ContainerButtonStatus } from './styles'

type ButtonStatusProps = {
  onHigh: boolean
  changeStatus: () => void
}

export function ButtonStatus({ onHigh, changeStatus }: ButtonStatusProps) {
  return (
    <ContainerButtonStatus>
      <ButtonStatusStyle
        color={onHigh ? `${colors.grey500}` : `${colors.white}`}
        backgroundColor={onHigh ? `${colors.white}` : `${colors.success}`}
        type="submit"
        onClick={() => {
          if (onHigh) changeStatus()
        }}
        // {() => {
        //   if (status) press()
        // }}
      >
        Em alta
      </ButtonStatusStyle>
      <ButtonStatusStyle
        color={onHigh ? `${colors.white}` : `${colors.grey500}`}
        backgroundColor={onHigh ? `${colors.error}` : `${colors.white}`}
        type="submit"
        onClick={() => {
          if (!onHigh) changeStatus()
        }}
      >
        Em baixa
      </ButtonStatusStyle>
    </ContainerButtonStatus>
  )
}
