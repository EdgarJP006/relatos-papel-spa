import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import useLocalStorage from "../hooks/useLocalStorage";
import { orders as defaultOrders } from "../data/orders";

function Checkout() {
  const navigate = useNavigate();

  const { cartItems, total, clearCart } = useCart();
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [ciudad, setCiudad] = useState("");

  const [storedOrders, setStoredOrders] = useLocalStorage(
    "orders",
    defaultOrders,
  );

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCvv] = useState("");

  function handlePayment(event) {
    event?.preventDefault();

    if (cartItems.length === 0) {
      window.alert("No hay libros en el carrito.");
      return;
    }

    const trimmedNombre = nombre.trim();
    const trimmedDireccion = direccion.trim();
    const trimmedCiudad = ciudad.trim();

    if (!trimmedNombre || !trimmedDireccion || !trimmedCiudad) {
      window.alert("Completa todos los campos.");
      return;
    }

    const currentOrders = Array.isArray(storedOrders) ? storedOrders : [];

    const maxId = currentOrders.reduce((max, order) => {
      const num = Number(String(order.id).replace(/\D/g, ""));
      return Number.isFinite(num) ? Math.max(max, num) : max;
    }, 0);

    const nextId = `PED-${String(maxId + 1).padStart(3, "0")}`;
    const today = new Date().toISOString().slice(0, 10);

    const newOrder = {
      id: nextId,
      date: today,
      total,
      status: "Procesado",
      customer: {
        nombre: trimmedNombre,
        direccion: trimmedDireccion,
        ciudad: trimmedCiudad,
      },
    };

    setStoredOrders((curr) => {
      const safe = Array.isArray(curr) ? curr : [];
      return [newOrder, ...safe];
    });

    window.alert(`Pedido ${nextId} realizado correctamente.`);

    clearCart();
    navigate("/home");
  }

  return (
    <main className="checkout-page">
      <div className="checkout-container">
        {/* FORMULARIO */}
        <section className="checkout-form-card">
          <h1>Finalizar compra</h1>

          {/* AQUI VA EL FORM */}
          <form onSubmit={handlePayment}>
            {/* INFORMACIÓN ENVÍO */}
            <h2 className="section-title">Datos de envío</h2>

            <div className="input-group">
              <input
                type="text"
                placeholder="Nombre Completo"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="text"
                placeholder="Direccción"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="text"
                placeholder="Ciudad"
                value={ciudad}
                onChange={(e) => setCiudad(e.target.value)}
                required
              />
            </div>

            {/* MÉTODO DE PAGO */}
            <h2 className="section-title">Método de pago</h2>

            <div className="input-group">
              <input
                type="text"
                placeholder="Nombre del titular"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </div>

            <div className="payment-row">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="MM/AA"
                  maxLength={5}
                  value={expiration}
                  onChange={(e) => setExpiration(e.target.value)}
                  required
                />
              </div>

              <div className="input-group">
                <input
                  type="password"
                  placeholder="CVV"
                  maxLength={4}
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={
                !nombre.trim() ||
                !direccion.trim() ||
                !ciudad.trim() ||
                !cardName.trim() ||
                !cardNumber.trim() ||
                !expiration.trim() ||
                !cvv.trim()
              }
            >
              Confirmar compra
            </button>
          </form>
        </section>

        {/* RESUMEN */}
        <aside className="checkout-summary-card">
          <h2>Resumen del pedido</h2>

          {cartItems.map((item) => (
            <div key={item.id} className="checkout-item">
              <div>
                <h3>{item.title}</h3>

                <p>Cantidad: {item.quantity || 1}</p>
              </div>

              <strong>${(item.price * (item.quantity || 1)).toFixed(2)}</strong>
            </div>
          ))}

          <div className="checkout-total">
            <span>Total</span>

            <strong>${total.toFixed(2)}</strong>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default Checkout;
