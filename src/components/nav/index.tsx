import { Menu } from './styled'
import { Link, useNavigate } from 'react-router-dom'


export default function Nav () {
  const navigate = useNavigate()

  return (
    <Menu>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      {/* <Link to="/login">Login</Link> */}
      <button onClick={() => navigate('/login')}>Sair</button>
    </Menu>
  )
}