import { ReactNode } from 'react'
import { CelEmailStyle, ContainerIcon, Icon } from './styles'

type CelEmailProps = {
  iconPhone: ReactNode
  phone: string
  iconEmail: ReactNode
  email: string
}

export function CelEmail({
  iconPhone,
  phone,
  email,
  iconEmail,
}: CelEmailProps) {
  return (
    <CelEmailStyle>
      <ContainerIcon>
        <Icon>{iconPhone}</Icon>
        <div>{phone}</div>
      </ContainerIcon>
      <ContainerIcon>
        <Icon>{iconEmail}</Icon>
        <div>{email}</div>
      </ContainerIcon>
    </CelEmailStyle>
  )
}
