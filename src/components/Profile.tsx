const Profile = ({ name = '', rol = '' }: { name: string, rol: string }) => {
  return (
    <header>
      <h1>{name}</h1>
      <h2>{rol}</h2>
    </header>
  )
}

export default Profile