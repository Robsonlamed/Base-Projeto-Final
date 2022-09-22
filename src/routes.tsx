import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './Layout/Layout'
import { PageDashboard } from './Routes/Dashboard'
import { PageLogin } from './Routes/Login'
import { PagePredicoes } from './Routes/Predicoes'
import { SubTelaPredicoes } from './Routes/Predicoes/subTelaPredicoes'
import { PageProdutos } from './Routes/Produtos'
import { SubTelaProduto } from './Routes/Produtos/subTelaProduto'

export function RoutesProjeto() {
  const auth = true
  return (
    <BrowserRouter>
      {auth ? (
        <Layout>
          <Routes>
            <Route element={<PageDashboard />} path="/" />
            <Route element={<PagePredicoes />} path="/predicoes" />
            <Route element={<SubTelaPredicoes />} path="/informacoesclientes" />
            <Route element={<SubTelaProduto />} path="/informacoesprodutos" />
            <Route element={<PageProdutos />} path="/produtos" />
          </Routes>
        </Layout>
      ) : (
        <Routes>
          <Route element={<PageLogin />} path="/login" />
          <Route element={<Navigate to="/login" />} path="*" />
        </Routes>
      )}
    </BrowserRouter>
  )
}
