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
  onClick?: () => void
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
  onClick,
}: TitleIconProps) {
  return (
    <ContainerWithIconStyle marginBottom={marginBottom}>
      <TitleWithIconStyle
        marginLeft={marginLeft}
        color={color}
        fontSize={fontSize}
        onClick={onClick}
      >
        <ContainerIcon borderRadius={borderRadius} backgroundColor={background}>
          {icon}
        </ContainerIcon>
        <span>{title}</span>
      </TitleWithIconStyle>
    </ContainerWithIconStyle>
  )
}
