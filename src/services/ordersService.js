const BASE_URL = "http://localhost:8090/api/v1/orders";

// 🌟 POST: Adaptado para cumplir con el objeto "GatewayRequest" de tu Gateway
export async function createOrder({ userId, bookId, quantity, userEmail, customerName }, token) {

  // Encapsulamos los datos dentro de la estructura exacta que Jackson espera en el Gateway
  const gatewayPayload = {
    targetMethod: "POST",
    queryParams: {},
    body: {               // 📦 Aquí adentro viaja tu verdadero DTO de la orden
      userId,
      bookId,
      quantity,
      userEmail,
      customerName,
    }
  };

  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`, //  Para que el Gateway apruebe la petición y la traduzca
      "accessToken": token                //  NUEVO: Para que tu Controlador de Java no lance el MissingRequestHeaderException
    },
    body: JSON.stringify(gatewayPayload),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `Error ${response.status} al crear el pedido`);
  }

  return response.json();
}

// 🌟 GET: Se queda igual porque no envía cuerpo (body) al servidor
export async function getRecentOrders(userId, token) {
  const response = await fetch(`${BASE_URL}/users/${userId}/recent`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error(`Error ${response.status} al obtener los pedidos`);
  }

  return response.json();
}