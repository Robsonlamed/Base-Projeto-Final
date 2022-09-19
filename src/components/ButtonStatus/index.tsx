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
        type="submit"
        onClick={press}
        style={{
          backgroundColor: status ? `${colors.white}` : `${colors.secondary}`,
          color: status ? `${colors.cinza500}` : `${colors.white}`,
        }}
      >
        Em alta
      </ButtonStatusStyle>

      <ButtonStatusStyle
        type="submit"
        onClick={press}
        style={{
          backgroundColor: status ? `${colors.error}` : `${colors.white}`,
          color: status ? `${colors.white}` : `${colors.cinza500}`,
        }}
      >
        Em baixa
      </ButtonStatusStyle>
    </ContainerButtonStatus>
  )
}
