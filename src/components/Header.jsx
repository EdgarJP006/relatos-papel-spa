import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'

function Header() {
  const { isAuthenticated, user } = useAuth()
  const { cartItems } = useCart()

  return (
    <header className="header">
      <div className="logo">Relatos de Papel</div>

      <nav className="nav">
        <Link to="/">Inicio</Link>
        <Link to="/home">Catálogo</Link>

        {isAuthenticated ? (
          <>
            <Link to="/profile">Perfil</Link>
            <Link to="/checkout">Checkout ({cartItems.length})</Link>
            <span>Hola, {user.name}</span>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  )
}

export default Header