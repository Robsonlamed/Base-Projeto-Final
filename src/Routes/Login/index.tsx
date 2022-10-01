import { BackgroundLogin } from '../../components/BackgroundLogin'
import { Input } from '../../components/Input'
import { SubTitleStyle } from '../../components/SubTitle/styles'
import { TitleStyle } from '../../components/Title/styles'
import { colors } from '../../theme'
import { ContentLogin, LoginStyle } from './styles'

export function PageLogin() {
  return (
    <LoginStyle>
      <ContentLogin>
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
      </ContentLogin>
      <div>
        <BackgroundLogin />
      </div>
    </LoginStyle>
  )
}
