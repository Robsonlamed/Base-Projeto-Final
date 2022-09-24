import { Logout } from '../../assets/icons/Logout'
import { SettingTwo } from '../../assets/icons/SettingTwo'
import { colors } from '../../theme'
import { TitleWithIcon } from '../TitleWithIcon'
import { ConfiguracoesStyle } from './styles'

export function Configuracoes() {
  return (
    <ConfiguracoesStyle>
      <TitleWithIcon
        marginLeft="0px"
        icon={<SettingTwo />}
        title="Configurações"
        color={colors.cinza600}
        background=""
        fontSize="13px"
      />
      <hr />
      <TitleWithIcon
        marginLeft="0px"
        icon={<Logout />}
        title="Sair"
        color={colors.cinza600}
        background=""
        fontSize="13px"
      />
    </ConfiguracoesStyle>
  )
}
