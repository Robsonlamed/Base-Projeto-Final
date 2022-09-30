import { ReactNode } from 'react'
import { ChevronRight } from '../../assets/icons/ChevronRight'
import { UserClient } from '../../assets/icons/UserClient'
import {
  CardClienteStyle,
  ContainerCardCliente,
  IconeChevronCliente,
} from '../../Routes/Predicoes/styles'
import { colors } from '../../theme'
import { LinkMenu } from '../ItensMenu/styles'
import { TabelaCliente } from '../TabelaClientes'
import { TitleWithIcon } from '../TitleWithIcon'

type CardPredicaoProps = {
  id: number
  nome: string
  tabelaTitulo: string[]
  tabela: ReactNode
}

export function CardPredicao({
  id,
  nome,
  tabela,
  tabelaTitulo,
}: CardPredicaoProps) {
  return (
    <LinkMenu
      marginLeft="0px"
      color={colors.grey900}
      to={`/informacoesclientes/${id}`}
    >
      <ContainerCardCliente>
        <CardClienteStyle>
          <TitleWithIcon
            marginLeft="10px"
            fontSize="12px"
            icon={<UserClient />}
            title={nome}
            color={colors.grey900}
            background={colors.grey200}
            borderRadius="100px"
            marginBottom="20px"
          />
          <IconeChevronCliente>
            <ChevronRight />
          </IconeChevronCliente>
        </CardClienteStyle>
        <TabelaCliente headers={tabelaTitulo}>{tabela}</TabelaCliente>
      </ContainerCardCliente>
    </LinkMenu>
  )
}
