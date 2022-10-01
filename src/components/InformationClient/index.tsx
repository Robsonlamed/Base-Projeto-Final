import { Mail } from '../../assets/icons/Mail'
import { Phone } from '../../assets/icons/Phone'
import { colors } from '../../theme'
import { CelEmail } from '../CelEmail'
import { Title } from '../Title'
import { ContainerInformationClient } from './styles'

type InformationClientProps = {
  name: string
  phone: string
  email: string
}

export function InformationClient({
  name,
  phone,
  email,
}: InformationClientProps) {
  return (
    <ContainerInformationClient>
      <Title marginLeft="" text={name} size={22} color={colors.white} />
      <CelEmail
        iconPhone={<Phone />}
        phone={phone}
        iconEmail={<Mail />}
        email={email}
      />
    </ContainerInformationClient>
  )
}
