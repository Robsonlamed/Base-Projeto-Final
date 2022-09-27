import { FundoLogin } from '../../components/FundoLogin'
import { Input } from '../../components/Input'
import { SubTitleStyle } from '../../components/SubTitle/styles'
import { TitleStyle } from '../../components/Title/styles'
import { colors } from '../../theme'
import { ConteudoLogin, LoginStyle } from './styles'

export function PageLogin() {
  return (
    <LoginStyle>
      <ConteudoLogin>
        <SubTitleStyle fontWeight={400} tamanho={20} color={colors.grey800}>
          Seja bem vindo!
        </SubTitleStyle>
        <TitleStyle
          marginLeft=""
          margin="50px"
          tamanho={36}
          color={colors.grey900}
        >
          {' '}
          Realize seu login{' '}
        </TitleStyle>
        <Input eye={false} />
      </ConteudoLogin>
      <div>
        <FundoLogin />
      </div>
    </LoginStyle>
  )
}
