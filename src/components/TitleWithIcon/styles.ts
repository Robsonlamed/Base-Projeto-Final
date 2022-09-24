import styled from 'styled-components'

export const TitleWithIconStyle = styled.div<{
  color: string
  fontSize: string
  marginLeft: string
}>`
  display: flex;
  align-items: center;
  color: ${({ color }) => `${color}`};
  font-size: ${({ fontSize }) => `${fontSize}`};
  font-weight: 600;
  span {
    margin-left: ${({ marginLeft }) => `${marginLeft}`};
  }
`

export const ContainerIcon = styled.div<{
  backgroundColor: string
  borderRadius?: string
}>`
  background-color: ${({ backgroundColor }) => `${backgroundColor}`};
  border-radius: 8px;
  width: 40px;
  height: 40px;
  padding: 9px 17px 15px 9px;
  margin-right: 12px;
  border-radius: ${({ borderRadius }) => `${borderRadius}`};

  label {
    font-size: 20px;
    color: #212121;
    font-weight: 600;
  }
`

export const ContainerWithIconStyle = styled.div<{ marginBottom?: string }>`
  margin-bottom: ${({ marginBottom }) => `${marginBottom}`};
`
