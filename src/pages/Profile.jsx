import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getRecentOrders } from '../services/ordersService'

function Profile() {
  const navigate = useNavigate()
  const { user, logout, token } = useAuth()

  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getRecentOrders(user?.id || user?.email, token)
      .then((data) => setOrders(data))
      .catch((err) => setError(err.message || 'Error al cargar los pedidos'))
      .finally(() => setLoading(false))
  }, [user?.id, user?.email, token])

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

          {loading && <p className="orders-loading">Cargando pedidos...</p>}

          {error && (
            <p className="orders-error" role="alert">
              {error}
            </p>
          )}

          {!loading && !error && orders.length === 0 && (
            <p className="orders-empty">Aún no tienes pedidos.</p>
          )}

          <div className="orders-list">
            {orders.slice(0, 5).map((order) => (
              <div key={order.id} className="order-item">
                <div>
                  <h3>#{order.id}</h3>
                  <p>{order.bookTitle}</p>
                  <p>{order.createdAt?.slice(0, 10)}</p>
                </div>
                <div>
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
