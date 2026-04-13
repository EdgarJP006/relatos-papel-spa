import { useNavigate } from 'react-router-dom'

import { useAuth } from '../context/AuthContext'
import { orders } from '../data/orders'

function Profile() {
  const navigate = useNavigate()

  const { user, logout } = useAuth()

  function handleLogout() {
    logout()
    navigate('/login')
  }

  return (
    <main>
      <h1>Perfil de usuario</h1>

      <section>
        <h2>Datos personales</h2>
        <p><strong>Nombre:</strong> {user.name}</p>
        <p><strong>Correo:</strong> {user.email}</p>
        <p><strong>Rol:</strong> {user.role}</p>

        <button onClick={handleLogout}>
          Cerrar sesión
        </button>
      </section>

      <section>
        <h2>Últimos cinco pedidos</h2>

        <ul>
          {orders.slice(0, 5).map((order) => (
            <li key={order.id}>
              <strong>{order.id}</strong> — {order.date} — ${order.total} — {order.status}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Profile