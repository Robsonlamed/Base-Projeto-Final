type UserProps = {
  name: string
  email: string
}

export function User({ name, email }: UserProps) {
  return (
    <div>
      <p>{name}</p>
      <span> {email}</span>
    </div>
  )
}
