import { ReactNode, useEffect, useState, createContext } from 'react'
import { Title } from '../../components/Title'
import { ApiServiceW3 } from '../../services/config'
import { colors } from '../../theme'

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
      <Title
        text="Loading..."
        size={24}
        color={colors.azul1}
        marginLeft="30px"
      />
    )
  }
  return (
    <AuthenticContext.Provider value={{ authentic, loading }}>
      {children}
    </AuthenticContext.Provider>
  )
}
