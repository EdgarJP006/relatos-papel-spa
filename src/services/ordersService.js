const BASE_URL = "http://localhost:8090/api/v1/orders";

export async function createOrder({ userId, bookId, quantity, customerEmail, customerName }) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, bookId, quantity, customerEmail, customerName }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `Error ${response.status} al crear el pedido`);
  }

  return response.json();
}

export async function getRecentOrders(userId) {
  const response = await fetch(`${BASE_URL}/users/${userId}/recent`);

  if (!response.ok) {
    throw new Error(`Error ${response.status} al obtener los pedidos`);
  }

  return response.json();
}
