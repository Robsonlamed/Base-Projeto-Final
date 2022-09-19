import { GlobalStyle } from './assets/GlobalStyle'
import { RoutesProjeto } from './routes'
// import { Wrapper } from './assets/Wrapper'
// import { Anexar } from './components/Anexar'
// import { ButtonLogin } from './components/ButtonLogin'
// import { ButtonStatus } from './components/ButtonStatus'
// import { Config } from './components/Configuracoes'
// import { ContainerPagesStyle } from './components/ContainerPages/ContainerPagesStyle'
// import { Download } from './components/Download'
// import { Exit } from './components/Exit'
// import { FundoLogin } from './components/FundoLogin'
// import { Input } from './components/Input'
// import { Lembrar } from './components/Lembrar'
// import { Menu } from './components/Menu'
// // import { MenuReduzido } from './components/MenuReduzido'
// import { SubTitleStyle } from './components/SubTitle/styles'
// import { TitleStyle } from './components/Title/styles'
// import { Topo } from './components/Topo'
// import { DashBoard } from './pages/Dashboard'
// import { PageLogin } from './Routes/Login'
// import { PageTabela } from './pages/tabelas'

function App() {
  return (
    <>
      <GlobalStyle />
      <RoutesProjeto />
      {/* <Wrapper>
        <Menu />
        <ContainerPagesStyle>
          <Topo />
          <DashBoard />
          <PageTabela />
        </ContainerPagesStyle>
      </Wrapper>
      <SubTitleStyle tamanho={20} color="#424242">
        Seja bem vindo!
      </SubTitleStyle>
      <TitleStyle tamanho={36} color="#212121">
        {' '}
        Realize seu login{' '}
      </TitleStyle>
      <Input eye={false} />
      <ButtonLogin />
      <ButtonStatus />
      <Anexar />
      <Download />
      <Config />
      <Exit />
      <Lembrar />
      <FundoLogin />
      <PageLogin /> */}
    </>
  )
}

export default App
