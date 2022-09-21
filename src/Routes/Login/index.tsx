import { ButtonLogin } from '../../components/ButtonLogin'
import { FundoLogin } from '../../components/FundoLogin'
import { Input } from '../../components/Input'
import { Lembrar } from '../../components/Lembrar'
import { SubTitleStyle } from '../../components/SubTitle/styles'
import { TitleStyle } from '../../components/Title/styles'
import { ConteudoLogin, EsqueciSenha, LoginStyle } from './styles'

export function PageLogin() {
  return (
    <LoginStyle>
      <ConteudoLogin>
        <SubTitleStyle tamanho={20} color="#424242">
          Seja bem vindo!
        </SubTitleStyle>
        <TitleStyle margin="50px" tamanho={36} color="#212121">
          {' '}
          Realize seu login{' '}
        </TitleStyle>
        <Input eye={false} />
        <EsqueciSenha>
          <Lembrar />
          <span>Esqueci minha senha</span>
        </EsqueciSenha>
        <ButtonLogin />
      </ConteudoLogin>
      <div>
        <FundoLogin />
      </div>
    </LoginStyle>
  )
}
