import { TituloCardClientes } from '../TitleCardClientes'

type TituloCardClienteProps = {
  cliente: string
  status: 'Em alta' | 'Em baixa'
}

export function TituloCardCliente({ cliente, status }: TituloCardClienteProps) {
  return (
    <TituloCardClientes>
      <h3>{cliente}</h3>
      <ul>
        <li>{status}</li>
      </ul>
    </TituloCardClientes>
  )
}
