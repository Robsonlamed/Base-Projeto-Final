import { useContext } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthenticContext, AuthenticProvider } from './Context/AuthenticContext'
import { Layout } from './Layout/Layout'
import { PageDashboard } from './Routes/Dashboard'
import { PageLogin } from './Routes/Login'
import { PagePredicoes } from './Routes/Predicoes'
import { SubTelaPredicoes } from './Routes/Predicoes/subTelaPredicoes'
import { PageProdutos } from './Routes/Produtos'
import { SubTelaProduto } from './Routes/Produtos/subTelaProduto'
import { SubTelaProdutoClientes } from './Routes/Produtos/subTelaProdutoClientes'

type RoutesPrivateProps = {
  children: React.ReactNode
}

export function RoutesPrivate({ children }: RoutesPrivateProps) {
  const { authentic } = useContext(AuthenticContext)
  if (!authentic) {
    return <Navigate to="/login" />
  }

  return <Layout> {children} </Layout>
}

export function RoutesProjeto() {
  return (
    <BrowserRouter>
      <AuthenticProvider>
        <Routes>
          <Route element={<PageLogin />} path="/login" />
          <Route
            element={
              <RoutesPrivate>
                <PageDashboard />
              </RoutesPrivate>
            }
            path="/"
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
                <SubTelaPredicoes />
              </RoutesPrivate>
            }
            path="/informacoesclientes/:id"
          />
          <Route
            element={
              <RoutesPrivate>
                <SubTelaProduto />
              </RoutesPrivate>
            }
            path="/informacoesprodutos/:id"
          />
          <Route
            element={
              <RoutesPrivate>
                <SubTelaProdutoClientes />
              </RoutesPrivate>
            }
            path="/informacoesprodutosclientes/:id"
          />
          <Route
            element={
              <RoutesPrivate>
                <PageProdutos />
              </RoutesPrivate>
            }
            path="/produtos"
          />
        </Routes>
      </AuthenticProvider>
    </BrowserRouter>
  )
}
