import { useNavigate } from 'react-router-dom'

import { useAuth } from '../context/AuthContext'
import useLocalStorage from '../hooks/useLocalStorage'
import { orders as defaultOrders } from '../data/orders'

function Profile() {
  const navigate = useNavigate()

  const { user, logout } = useAuth()

  const [orders] = useLocalStorage('orders', defaultOrders)

  function handleLogout() {
    logout()
    navigate('/login')
  }

  return (
    <main className="profile-page">
      <div className="profile-container">

        <section className="profile-card">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="avatar"
            className="profile-avatar"
          />

          <h1>{user.name}</h1>
          <p className="profile-role">{user.role}</p>
          <div className="profile-info">
            <p>
              <strong>Correo:</strong> {user.email}
            </p>
            <p>
              <strong>Rol:</strong> {user.role}
            </p>
          </div>
          <button
            className="logout-button"
            onClick={handleLogout}
          >
            Cerrar sesión
          </button>
        </section>

        <section className="orders-card">
          <h2>Últimos pedidos</h2>
          <div className="orders-list">
            {orders.slice(0, 5).map((order) => (
              <div key={order.id} className="order-item">
                <div>
                  <h3>{order.id}</h3>
                  <p>{order.date}</p>
                </div>
                <div>
                  <p className="order-total">
                    ${order.total}
                  </p>
                  <span className="order-status">
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default Profile