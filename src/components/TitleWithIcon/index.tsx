import { ReactNode } from 'react'
import {
  ContainerIcon,
  ContainerWithIconStyle,
  TitleWithIconStyle,
} from './styles'

type TitleIconProps = {
  icon: ReactNode
  title: string
  color: string
  background: string
  borderRadius?: string
}

export function TitleWithIcon({
  icon,
  title,
  color,
  background,
  borderRadius,
}: TitleIconProps) {
  return (
    <ContainerWithIconStyle>
      <TitleWithIconStyle color={color} tamanho="16px">
        <ContainerIcon borderRadius={borderRadius} backgroundColor={background}>
          {icon}
        </ContainerIcon>
        <span>{title}</span>
      </TitleWithIconStyle>
    </ContainerWithIconStyle>
  )
}
