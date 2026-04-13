import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Cart() {
  const { cartItems, removeFromCart, total } = useCart()

  return (
    <aside className="cart">
      <h2>Carrito</h2>

      {cartItems.length === 0 ? (
        <p>No hay libros en el carrito.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <p>{item.title}</p>

                <p>${item.price}</p>

                <button onClick={() => removeFromCart(item.id)}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>

          <h3>Total: ${total.toFixed(2)}</h3>

          <Link to="/checkout">
            Ir al checkout
          </Link>
        </>
      )}
    </aside>
  )
}

export default Cart