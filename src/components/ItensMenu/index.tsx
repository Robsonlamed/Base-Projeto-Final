import { ChartLine } from '../../assets/icons/ChartLine'
import { FacialCleanser } from '../../assets/icons/FacialCleanser'
import { PieTwo } from '../../assets/icons/PieTwo'
import { colors } from '../../theme'
import { LinkMenu, Links } from './styles'

const Itens = [
  {
    id: 1,
    icon: <PieTwo />,
    text: 'Dashboard',
    url: '/',
  },
  {
    id: 2,
    icon: <ChartLine />,
    text: 'Predições',
    url: '/predicoes',
  },
  {
    id: 3,
    icon: <FacialCleanser color={colors.white} />,
    text: 'Produtos',
    url: '/produtos',
  },
]

export function ItensMenu() {
  return (
    <>
      {Itens.map(iten => (
        <LinkMenu key={iten.id} color={colors.white} to={iten.url}>
          {iten.icon}
          <Links>{iten.text}</Links>
        </LinkMenu>
      ))}
    </>
  )
}

export function ItensMenuReduzido() {
  return (
    <>
      {Itens.map(iten => (
        <LinkMenu color={colors.white} to={iten.url}>
          <Links>{iten.icon}</Links>
        </LinkMenu>
      ))}
    </>
  )
}
