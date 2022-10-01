import { Mail } from '../../assets/icons/Mail'
import { Phone } from '../../assets/icons/Phone'
import { colors } from '../../theme'
import { CelEmail } from '../CelEmail'
import { Title } from '../Title'
import { ContainerInformationClient } from './styles'

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
    <ContainerInformationClient>
      <Title marginLeft="" texto={name} tamanho={22} color={colors.white} />
      <CelEmail
        iconPhone={<Phone />}
        phone={phone}
        iconEmail={<Mail />}
        email={email}
      />
    </ContainerInformationClient>
  )
}
