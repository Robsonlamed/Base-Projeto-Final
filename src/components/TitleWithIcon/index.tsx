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
  marginBottom?: string
  fontSize: string
  marginLeft: string
}

export function TitleWithIcon({
  icon,
  title,
  color,
  background,
  borderRadius,
  marginBottom,
  fontSize,
  marginLeft,
}: TitleIconProps) {
  return (
    <ContainerWithIconStyle marginBottom={marginBottom}>
      <TitleWithIconStyle
        marginLeft={marginLeft}
        color={color}
        fontSize={fontSize}
      >
        <ContainerIcon borderRadius={borderRadius} backgroundColor={background}>
          {icon}
        </ContainerIcon>
        <span>{title}</span>
      </TitleWithIconStyle>
    </ContainerWithIconStyle>
  )
}
