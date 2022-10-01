import fundo from '../../assets/images/fundo.png'
import { BackgroundLoginStyle } from './styles'

export function BackgroundLogin() {
  return (
    <div>
      <BackgroundLoginStyle
        src={fundo}
        alt="Acompanhe suas vendas de um jeito fácil e simples"
      />
    </div>
  )
}
