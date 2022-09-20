import { useState } from 'react'
import { colors } from '../../theme'
import { ButtonStatusStyle, ContainerButtonStatus } from './styles'

type ButtonStatusProps = {
  emAlta: boolean
}

export function ButtonStatus({ emAlta }: ButtonStatusProps) {
  const [status, setStatus] = useState(emAlta)

  const press = () => setStatus(!status)

  return (
    <ContainerButtonStatus>
      <ButtonStatusStyle
        color={status ? `${colors.cinza500}` : `${colors.white}`}
        backgroundColor={status ? `${colors.white}` : `${colors.secondary}`}
        type="submit"
        onClick={() => {
          if (status) press()
        }}
      >
        Em alta
      </ButtonStatusStyle>
      <ButtonStatusStyle
        color={status ? `${colors.white}` : `${colors.cinza500}`}
        backgroundColor={status ? `${colors.error}` : `${colors.white}`}
        type="submit"
        onClick={() => {
          if (!status) press()
        }}
      >
        Em baixa
      </ButtonStatusStyle>
    </ContainerButtonStatus>
  )
}
