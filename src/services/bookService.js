const API_URL = "http://localhost:8090/api/v1/books";

export async function getBooks() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Error al obtener libros");
  }

  return response.json();
}

export async function getBookById(id) {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Libro no encontrado");
  }

  return response.json();
}