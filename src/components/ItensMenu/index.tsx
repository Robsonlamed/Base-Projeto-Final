import { ChartLine } from '../../assets/icons/ChartLine'
import { FacialCleanser } from '../../assets/icons/FacialCleanser'
import { PieTwo } from '../../assets/icons/PieTwo'
import { colors } from '../../theme'
import { LinkMenu, Links } from './styles'

const Itens = [
  {
    icon: <PieTwo />,
    text: 'Dashboard',
    url: '/',
  },
  {
    icon: <ChartLine />,
    text: 'Predições',
    url: '/predicoes',
  },
  {
    icon: <FacialCleanser color={colors.white} />,
    text: 'Produtos',
    url: '/produtos',
  },
]

export function ItensMenu() {
  return (
    <>
      {Itens.map(iten => (
        <LinkMenu color={colors.white} to={iten.url}>
          {iten.icon}
          <Links>{iten.text}</Links>
        </LinkMenu>
      ))}
    </>
  )
}
