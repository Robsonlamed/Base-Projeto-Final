import { useContext } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthenticContext, AuthenticProvider } from './Context/AuthenticContext'
import { Layout } from './Layout'
import { PageDashboard } from './Routes/Dashboard'
import { PageLogin } from './Routes/Login'
import { PagePredicoes } from './Routes/Predicoes'
import { SubScreenPrediction } from './Routes/Predicoes/subScreenPrediction'
import { PageProduct } from './Routes/Produtos'
import { SubScreenProduct } from './Routes/Produtos/subScreenProduct'
import { SubScreenProductClient } from './Routes/Produtos/subScreenProductClient'

type RoutesPrivateProps = {
  children: React.ReactNode
}

export function RoutesPrivate({ children }: RoutesPrivateProps) {
  const { authentic } = useContext(AuthenticContext)
  if (!authentic) {
    return <Navigate to="/" />
  }

  return <Layout> {children} </Layout>
}

export function RoutesProject() {
  return (
    <BrowserRouter>
      <AuthenticProvider>
        <Routes>
          <Route element={<PageLogin />} path="/" />
          <Route
            element={
              <RoutesPrivate>
                <PageDashboard />
              </RoutesPrivate>
            }
            path="/dashboard"
          />
          <Route
            element={
              <RoutesPrivate>
                <PagePredicoes />
              </RoutesPrivate>
            }
            path="/predicoes"
          />
          <Route
            element={
              <RoutesPrivate>
                <SubScreenPrediction />
              </RoutesPrivate>
            }
            path="/informacoesclientes/:id"
          />
          <Route
            element={
              <RoutesPrivate>
                <SubScreenProduct />
              </RoutesPrivate>
            }
            path="/informacoesprodutos/:id"
          />
          <Route
            element={
              <RoutesPrivate>
                <SubScreenProductClient />
              </RoutesPrivate>
            }
            path="/informacoesprodutosclientes/:id"
          />
          <Route
            element={
              <RoutesPrivate>
                <PageProduct />
              </RoutesPrivate>
            }
            path="/produtos"
          />
        </Routes>
      </AuthenticProvider>
    </BrowserRouter>
  )
}
