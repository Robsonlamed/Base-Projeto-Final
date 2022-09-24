import maos from '../../assets/images/maos.png'
import { ButtonFaleConosco } from '../ButtonFaleConosco'
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
      <ButtonFaleConosco text="Fale conosco" />
    </FaleConoscoStyle>
  )
}
