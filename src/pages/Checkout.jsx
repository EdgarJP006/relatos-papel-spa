import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import useLocalStorage from '../hooks/useLocalStorage'
import { orders as defaultOrders } from '../data/orders'

function Checkout() {
  const navigate = useNavigate()

  const { cartItems, total, clearCart } = useCart()

  const [nombre, setNombre] = useState('')
  const [direccion, setDireccion] = useState('')
  const [ciudad, setCiudad] = useState('')

  const [storedOrders, setStoredOrders] = useLocalStorage(
    'orders',
    defaultOrders
  )

  function handlePayment(event) {
    event?.preventDefault()

    if (cartItems.length === 0) {
      window.alert('No hay libros en el carrito para finalizar la compra.')
      return
    }

    const trimmedNombre = nombre.trim()
    const trimmedDireccion = direccion.trim()
    const trimmedCiudad = ciudad.trim()

    if (!trimmedNombre || !trimmedDireccion || !trimmedCiudad) {
      window.alert(
        'Por favor completa Nombre, Dirección y Ciudad antes de realizar el pedido.'
      )
      return
    }

    const currentOrders = Array.isArray(storedOrders)
      ? storedOrders
      : []

    const maxId = currentOrders.reduce((max, order) => {
      const num = Number(String(order.id).replace(/\D/g, ''))
      return Number.isFinite(num) ? Math.max(max, num) : max
    }, 0)

    const nextId = `PED-${String(maxId + 1).padStart(3, '0')}`
    const today = new Date().toISOString().slice(0, 10)

    const newOrder = {
      id: nextId,
      date: today,
      total,
      status: 'Procesado',
      customer: {
        nombre: trimmedNombre,
        direccion: trimmedDireccion,
        ciudad: trimmedCiudad,
      },
    }

    setStoredOrders((curr) => {
      const safe = Array.isArray(curr) ? curr : []
      return [newOrder, ...safe]
    })

    window.alert(
      `Pedido ${nextId} realizado correctamente.\nCliente: ${trimmedNombre}\nDirección: ${trimmedDireccion}\nCiudad: ${trimmedCiudad}`
    )

    clearCart()
    navigate('/home')
  }

  return (
    <main>
      <h1>Checkout</h1>

      {cartItems.length === 0 ? (
        <p>No hay libros en el carrito para finalizar la compra.</p>
      ) : (
        <section>
          <form onSubmit={handlePayment}>
            <h2>Datos de pedido</h2>

            <div>
              <label>
                Nombre
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </label>
            </div>

            <div>
              <label>
                Dirección
                <input
                  type="text"
                  value={direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                  required
                />
              </label>
            </div>

            <div>
              <label>
                Ciudad
                <input
                  type="text"
                  value={ciudad}
                  onChange={(e) => setCiudad(e.target.value)}
                  required
                />
              </label>
            </div>

            <h2>Resumen del pedido</h2>

            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.title} — ${item.price}
                </li>
              ))}
            </ul>

            <h3>Total: ${total.toFixed(2)}</h3>

            <button
              type="submit"
              disabled={
                !nombre.trim() ||
                !direccion.trim() ||
                !ciudad.trim()
              }
            >
              Realizar pedido
            </button>
          </form>
        </section>
      )}
    </main>
  )
}

export default Checkout