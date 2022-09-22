import styled from 'styled-components'

export const TitleWithIconStyle = styled.div<{
  color: string
  tamanho: string
}>`
  display: flex;
  align-items: center;
  color: ${({ color }) => `${color}`};
  font-size: ${({ tamanho }) => `${tamanho}`};
  font-weight: 400;
  span {
    margin-left: 10px;
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
  padding: 11px 17px 15px 11px;
  margin-right: 12px;
  border-radius: ${({ borderRadius }) => `${borderRadius}`};

  label {
    font-size: 20px;
    color: #212121;
    font-weight: 600;
  }
`

export const ContainerWithIconStyle = styled.div`
  margin-top: 0px;
`
