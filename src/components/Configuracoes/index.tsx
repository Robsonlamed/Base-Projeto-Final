import { useNavigate } from 'react-router-dom'
import { Logout } from '../../assets/icons/Logout'
import { SettingTwo } from '../../assets/icons/SettingTwo'
import { ApiServiceW3 } from '../../services/config'
import { colors } from '../../theme'
import { TitleWithIcon } from '../TitleWithIcon'
import { ConfiguracoesStyle } from './styles'

export function Configuracoes() {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.clear()
    ApiServiceW3.defaults.headers.common.Authorization = ''
    navigate(`/login`, { replace: true })
  }

  return (
    <ConfiguracoesStyle>
      <TitleWithIcon
        marginLeft="0px"
        icon={<SettingTwo />}
        title="Configurações"
        color={colors.grey600}
        background=""
        fontSize="13px"
      />
      <hr />
      <TitleWithIcon
        marginLeft="0px"
        icon={<Logout />}
        title="Sair"
        color={colors.grey600}
        background=""
        fontSize="13px"
        onClick={logout}
      />
    </ConfiguracoesStyle>
  )
}
