import hands from '../../assets/images/hands.png'
import { ButtonContactUs } from '../ButtonContactUs'
import { BackgroundContactUsStyle } from './styles'

export function BackgroundContactUs() {
  return (
    <BackgroundContactUsStyle>
      <div>
        <img src={hands} alt="" />
      </div>
      <div>
        <span>
          {' '}
          Precisando de <strong>ajuda ou suporte</strong> em algo?
        </span>
      </div>
      <ButtonContactUs text="Fale conosco" />
    </BackgroundContactUsStyle>
  )
}
