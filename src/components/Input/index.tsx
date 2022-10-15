import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { Eye } from '../../assets/icons/Eye'
import { EyeOffLine } from '../../assets/icons/EyeOffLine'
import { ForgotPassword } from '../../Routes/Login/styles'
import { AuthLogin } from '../../services/Auth'
import { colors } from '../../theme'
import { ButtonLogin } from '../ButtonLogin'
import { Checked } from '../Checked'
import { ContainerInput, EyeStyle, InputStyle, LabelStyle } from './styles'

type InputProps = {
  eye: boolean
}

export function Input({ eye }: InputProps) {
  const [remember, setRemember] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isShowing, setIsShowing] = useState(eye)

  const isPassword = () => setIsShowing(!isShowing)

  const doLogin = async () => {
    const result = await AuthLogin(email, password)
    if (result.login) {
      window.location.href = '/dashboard'
      return
    }
    alert(result.message)
  }
  return (
    <div>
      <form>
        <ContainerInput>
          <InputStyle
            border={colors.success}
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
            border={colors.success}
            id="password"
            type={isShowing ? 'text' : 'password'}
            placeholder="Insira sua senha"
            onChange={event => setPassword(event.target.value)}
            value={password}
          />
          <LabelStyle htmlFor="senha">Senha</LabelStyle>
          <EyeStyle>
            <button type="button" onClick={isPassword}>
              {isShowing ? <Eye /> : <EyeOffLine />}
            </button>
          </EyeStyle>
        </ContainerInput>
      </form>
      <ForgotPassword>
        <Checked
          checked={remember}
          onChange={() => setRemember(!remember)}
          text="Lembrar-me"
          fontSize="12px"
        />
        <span>Esqueci minha senha</span>
      </ForgotPassword>
      <ButtonLogin onClick={doLogin} />
    </div>
  )
}
