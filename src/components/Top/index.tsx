import { useEffect, useState } from 'react'
import { ChevronDown } from '../../assets/icons/ChevronDown'
import { IconMenu } from '../../assets/icons/Menu'
import { UserStyle } from '../../assets/icons/User'
import { GetDataLogged, GetDataLoggedProps } from '../../services/GetLogado'
import { Settings } from '../Settings'
import { Title } from '../Title'
import { IconUser, Logged, TopStyles } from './styles'
import { User } from './User'

type IconMenuProps = {
  openMenu: () => void
  width: string
}

export function Top({ openMenu, width }: IconMenuProps) {
  const [openConfig, setOpenConfig] = useState(false)
  const open = () => setOpenConfig(!openConfig)

  const [dataLogged, setDataLogged] = useState<GetDataLoggedProps>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      try {
        const result = await GetDataLogged()
        setDataLogged(result)
        setLoading(false)
      } catch (error) {
        alert((error as any).message)
      }
    })()
  }, [])

  if (loading) {
    return <Title text="" size={0} color="" marginLeft="" />
  }

  return (
    <div>
      <TopStyles width={width}>
        <div className="sanduiche">
          <button onClick={openMenu} type="button">
            <IconMenu />
          </button>
        </div>
        <Logged>
          <IconUser>
            <UserStyle />
          </IconUser>
          <User name={dataLogged?.nome ?? ''} email={dataLogged?.email ?? ''} />
          <button onClick={open} type="button">
            <ChevronDown />
          </button>
        </Logged>
      </TopStyles>
      {openConfig ? <Settings /> : null}
    </div>
  )
}
