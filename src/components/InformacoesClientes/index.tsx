import { Mail } from '../../assets/icons/Mail'
import { Phone } from '../../assets/icons/Phone'
import { colors } from '../../theme'
import { CelEmail } from '../CelEmail'
import { ContainerInformacoesClientes } from '../CelEmail/styles'
import { Title } from '../Title'

type InformacoesClientesProps = {
  name: string
  phone: string
  email: string
}

export function InformacoesClientes({
  name,
  phone,
  email,
}: InformacoesClientesProps) {
  return (
    <ContainerInformacoesClientes>
      <Title marginLeft="" texto={name} tamanho={22} color={colors.white} />
      <CelEmail
        iconPhone={<Phone />}
        phone={phone}
        iconEmail={<Mail />}
        email={email}
      />
    </ContainerInformacoesClientes>
  )
}
