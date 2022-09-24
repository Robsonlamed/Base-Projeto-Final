import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye } from '../../assets/icons/Eye'
import { EyeOffLine } from '../../assets/icons/EyeOffLine'
import { EsqueciSenha } from '../../Routes/Login/styles'
import { AuthLogin } from '../../services/Auth'
import { colors } from '../../theme'
import { ButtonLogin } from '../ButtonLogin'
import { Lembrar } from '../Lembrar'
import { ContainerInput, EyeStyle, InputStyle, LabelStyle } from './styles'

type InputProps = {
  eye: boolean
}

export function Input({ eye }: InputProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isShowing, setIsShowing] = useState(!eye)

  const senha = () => setIsShowing(!isShowing)
  const navigate = useNavigate()

  const doLogin = async () => {
    const result = await AuthLogin(email, password)
    if (result.login) {
      navigate('/')
      return
    }
    alert(result.message)
  }
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
      </form>
      <EsqueciSenha>
        <Lembrar text="Lembrar-me" fontSize="12px" />
        <span>Esqueci minha senha</span>
      </EsqueciSenha>
      <ButtonLogin onClick={doLogin} />
    </div>
  )
}
