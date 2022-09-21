import { ReactNode } from 'react'
import { CelEmailStyle } from './styles'

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
      <div>{iconPhone}</div>
      <div>{phone}</div>
      <div>{iconEmail}</div>
      <div>{email}</div>
    </CelEmailStyle>
  )
}
