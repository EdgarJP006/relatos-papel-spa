import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";

import { FaTrash, FaShoppingCart } from "react-icons/fa";

function Cart() {
  const { cartItems, removeFromCart, total } = useCart();

  return (
    <aside className="cart">
      <div className="cart-header">
        <h2>
          <FaShoppingCart />
          Carrito
        </h2>
        <span>{cartItems.length} productos</span>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>No hay libros en el carrito.</p>
        </div>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="cart-info">
                  <h3>{item.title}</h3>

                  <p>${item.price}</p>
                </div>

                <button
                  className="delete-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FaTrash />
                </button>
              </li>
            ))}
          </ul>

          <div className="cart-footer">
            <h3>
              Total:
              <span>${total.toFixed(2)}</span>
            </h3>

            <Link to="/checkout" className="checkout-btn">
              Ir al checkout
            </Link>
          </div>
        </>
      )}
    </aside>
  );
}

export default Cart;
