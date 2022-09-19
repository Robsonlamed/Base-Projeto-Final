import { ChartLine } from '../../assets/icons/ChartLine'
import { FacialCleanser } from '../../assets/icons/FacialCleanser'
import { PieTwo } from '../../assets/icons/PieTwo'
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
    icon: <FacialCleanser />,
    text: 'Produtos',
    url: '/produtos',
  },
]

export function ItensMenu() {
  return (
    <>
      {Itens.map(iten => (
        <LinkMenu to={iten.url}>
          {iten.icon}
          <Links>{iten.text}</Links>
        </LinkMenu>
      ))}
    </>
  )
}
