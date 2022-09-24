import { UserStyle } from './styles'

type UserProps = {
  name: string
  email: string
}

export function User({ name, email }: UserProps) {
  return (
    <UserStyle>
      <p>{name}</p>
      <span> {email}</span>
    </UserStyle>
  )
}
