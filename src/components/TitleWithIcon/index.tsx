import { ReactNode } from 'react'
import { colors } from '../../theme'
import { TitleWithIconStyle } from './styles'

type TitleIconProps = {
  icon: ReactNode
  title: string
}

export function TitleWithIcon({ icon, title }: TitleIconProps) {
  return (
    <TitleWithIconStyle color={colors.grey900} tamanho="16px">
      {icon}
      <span>{title}</span>
    </TitleWithIconStyle>
  )
}
