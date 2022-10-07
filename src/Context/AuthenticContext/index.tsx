import { ReactNode, useEffect, useState, createContext } from 'react'
import { Logo } from '../../components/Menu/styles'
import { ApiServiceW3 } from '../../services/config'
import load from '../../assets/images/load.svg'

type ContextType = {
  authentic: boolean
  loading: boolean
}

export const AuthenticContext = createContext<ContextType>({
  authentic: false,
  loading: true,
})

type AuthenticProviderProps = {
  children: ReactNode
}

export function AuthenticProvider({ children }: AuthenticProviderProps) {
  const [authentic, setAuthentic] = useState<boolean>(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      const convert = JSON.parse(token)
      ApiServiceW3.defaults.headers.common.Authorization = `${convert.type} ${convert.token}`
      setAuthentic(true)
    } else {
      setAuthentic(false)
    }

    setLoading(false)
  }, [])

  if (loading) {
    return (
      <Logo
        marginLeft="500px"
        width="200px"
        height="200px"
        src={load}
        alt="load"
      />
    )
  }

  return (
    <AuthenticContext.Provider value={{ authentic, loading }}>
      {children}
    </AuthenticContext.Provider>
  )
}
