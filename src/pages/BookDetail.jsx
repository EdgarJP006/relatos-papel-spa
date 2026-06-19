import { useParams, Link } from "react-router-dom";

// import { books } from '../data/books'
import { useCart } from "../context/CartContext";
import Cart from "../components/Cart";
import { useEffect, useState } from "react";
import { getBookById } from "../services/bookService";

function BookDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBook = async () => {
      try {
        const data = await getBookById(id);
        setBook(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadBook();
  }, [id]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!book) {
    return (
      <main>
        <h1>Libro no encontrado</h1>
        <p>No existe un libro asociado a este identificador.</p>
        <Link to="/home">Volver al catálogo</Link>
      </main>
    );
  }
  return (
    <main>
      <h1>{book.title}</h1>

      <div className="content-with-cart">
        <section className="book-detail">
          <img src={book.image} alt={book.title} />

          <div>
            <p>
              <strong>Autor:</strong> {book.author}
            </p>
            <p>
              <strong>ISBN:</strong> {book.isbn}
            </p>
            <p>
              <strong>Categoría:</strong> {book.category}
            </p>
            <p>
              <strong>Precio:</strong> ${book.price}
            </p>
            <p>
              <strong>Stock:</strong> {book.stock} unidades
            </p>
            <p>{book.description}</p>

            <button onClick={() => addToCart(book)}>Añadir al carrito</button>

            <br />
            <br />

            <Link to="/home">Volver al catálogo</Link>
          </div>
        </section>

        <Cart />
      </div>
    </main>
  );
}

export default BookDetail;
