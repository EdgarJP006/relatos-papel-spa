import { Link } from 'react-router-dom'

function BookCard({ book }) {
  return (
    <article className="book-card">
      <img src={book.image} alt={book.title} />

      <h3>{book.title}</h3>

      <p><strong>Autor:</strong> {book.author}</p>

      <p><strong>Categoría:</strong> {book.category}</p>

      <p><strong>Precio:</strong> ${book.price}</p>

      <Link to={`/book/${book.id}`}>
        Ver detalle
      </Link>
    </article>
  )
}

export default BookCard