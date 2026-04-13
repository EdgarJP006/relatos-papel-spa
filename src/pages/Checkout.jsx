import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Checkout() {
  const navigate = useNavigate()

  const { cartItems, total, clearCart } = useCart()

  function handlePayment() {
    window.alert('El pedido se ha realizado correctamente.')

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
          <h2>Resumen del pedido</h2>

          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.title} — ${item.price}
              </li>
            ))}
          </ul>

          <h3>Total: ${total.toFixed(2)}</h3>

          <button onClick={handlePayment}>
            Realizar pedido
          </button>
        </section>
      )}
    </main>
  )
}

export default Checkout