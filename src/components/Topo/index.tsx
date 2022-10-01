import { useEffect, useState } from 'react'
import { ChevronDown } from '../../assets/icons/ChevronDown'
import { IconeMenu } from '../../assets/icons/Menu'
import { UserStyle } from '../../assets/icons/User'
import { GetDadosLogado, GetDadosLogadoProps } from '../../services/GetLogado'
import { colors } from '../../theme'
import { Settings } from '../Settings'
import { Title } from '../Title'
// import { Menu } from '../Menu'
// import { MenuReduzido } from '../MenuReduzido'
import { IconeUser, Logado, TopoStyles } from './styles'
import { User } from './User'

type IconeMenuProps = {
  openMenu: () => void
  width: string
}

export function Topo({ openMenu, width }: IconeMenuProps) {
  const [openConfig, setOpenConfig] = useState(false)
  const open = () => setOpenConfig(!openConfig)

  const [dadosLogado, setDadosLogado] = useState<GetDadosLogadoProps>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      try {
        const result = await GetDadosLogado()
        setDadosLogado(result)
        setLoading(false)
      } catch (error) {
        alert((error as any).message)
      }
    })()
  }, [])

  if (loading) {
    return (
      <Title
        texto="Carregando dados"
        tamanho={24}
        color={colors.grey900}
        marginLeft="15px"
      />
    )
  }

  return (
    <div>
      <TopoStyles width={width}>
        <div className="sanduiche">
          <button onClick={openMenu} type="button">
            <IconeMenu />
          </button>
        </div>
        <Logado>
          <IconeUser>
            <UserStyle />
          </IconeUser>
          <User
            name={dadosLogado?.nome ?? ''}
            email={dadosLogado?.email ?? ''}
          />
          <button onClick={open} type="button">
            <ChevronDown />
          </button>
        </Logado>
      </TopoStyles>
      {openConfig ? <Settings /> : null}
    </div>
  )
}
