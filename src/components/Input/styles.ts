import styled from 'styled-components'
import { colors } from '../../theme'

export const ContainerInput = styled.div`
  display: flex;
  position: relative;
  width: 400px;
`

export const InputStyle = styled.input<{
  border: string
}>`
  width: 400px;
  height: 56px;
  border: 1px solid ${({ border }) => `${border}`};
  border-radius: 16px;
  color: ${colors.grey900};
  padding: 20px 60px 20px 20px;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 30px;
`

export const LabelStyle = styled.label`
  font-size: 14px;
  color: #00c247;
  position: absolute;
  left: 0;
  background-color: white;
  margin-left: 20px;
  margin-top: -10px;
  padding: 0 5px;
`

export const EyeStyle = styled.div`
  position: absolute;
  right: 20px;
  top: 15px;
`

export const FilterStyle = styled.div`
  background-color: ${colors.grey100};
  width: 56px;
  height: 56px;
  padding: 15px 14px 9px 14px;
  border-radius: 12px;
  margin-left: 16px;
`
