import { useState } from 'react'
import { Eye } from '../../assets/icons/Eye'
import { EyeOffLine } from '../../assets/icons/EyeOffLine'
import { colors } from '../../theme'
import { ContainerInput, EyeStyle, InputStyle, LabelStyle } from './styles'

type InputProps = {
  eye: boolean
}

export function Input({ eye }: InputProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isShowing, setIsShowing] = useState(!eye)

  const senha = () => setIsShowing(!isShowing)

  return (
    <div>
      <form>
        <ContainerInput>
          <InputStyle
            border={colors.secondary}
            id="user"
            // type={text}
            placeholder="Insira seu e-mail"
            onChange={event => setEmail(event.target.value)}
            value={email}
          />
          <LabelStyle htmlFor="email">E-mail</LabelStyle>
          <p>{email}</p>
        </ContainerInput>
        <ContainerInput>
          <InputStyle
            border={colors.secondary}
            id="password"
            type={isShowing ? 'text' : 'password'}
            placeholder="Insira sua senha"
            onChange={event => setPassword(event.target.value)}
            value={password}
          />
          <LabelStyle htmlFor="senha">Senha</LabelStyle>
          <EyeStyle>
            <button type="button" onClick={senha}>
              {isShowing ? <Eye /> : <EyeOffLine />}
            </button>
          </EyeStyle>
        </ContainerInput>
        <p>{password}</p>
      </form>
    </div>
  )
}
