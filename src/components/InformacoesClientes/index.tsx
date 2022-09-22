import { Mail } from '../../assets/icons/Mail'
import { Phone } from '../../assets/icons/Phone'
import { colors } from '../../theme'
import { CelEmail } from '../CelEmail'
import { ContainerInformacoesClientes } from '../CelEmail/styles'
import { Title } from '../Title'

export function InformacoesClientes() {
  return (
    <ContainerInformacoesClientes>
      <Title
        marginLeft=""
        texto="Hotel Ibis"
        tamanho={22}
        color={colors.white}
      />
      <CelEmail
        iconPhone={<Phone />}
        phone="(31) 99999-9999"
        iconEmail={<Mail />}
        email="hotelibis@gmail.com"
      />
    </ContainerInformacoesClientes>
  )
}
