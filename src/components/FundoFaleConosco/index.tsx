import maos from '../../assets/images/maos.png'
import { ButtonContactUs } from '../ButtonContactUs'
import { FaleConoscoStyle } from './styles'

export function FundoFaleConosco() {
  return (
    <FaleConoscoStyle>
      <div>
        <img src={maos} alt="" />
      </div>
      <div>
        <span>
          {' '}
          Precisando de <strong>ajuda ou suporte</strong> em algo?
        </span>
      </div>
      <ButtonContactUs text="Fale conosco" />
    </FaleConoscoStyle>
  )
}
