import { Link } from 'react-router-dom'

import { useCart } from '../context/CartContext'

function BookCard({ book }) {
  const { addToCart } = useCart()

  return (
    <article className="book-card">
      <Link to={`/book/${book.id}`} className="book-card-image-link">
        <img src={book.image} alt={book.title} />
      </Link>

      <h3>{book.title}</h3>

      <p className="book-card-author">{book.author}</p>

      <div className="book-card-meta">
        <span>{book.category}</span>
        <strong>${book.price}</strong>
      </div>

      <div className="book-card-actions">
 <Link to={`/book/${book.id}`} className="book-card-detail-link">
          Ver detalle
        </Link>

        {/* <button
          type="button"
          className="book-card-cart-button"
          onClick={() => addToCart(book)}
          aria-label={`Añadir ${book.title} al carrito`}
          title="Añadir al carrito"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M3 5h2l1.2 6.2a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.8L18.5 7H7.1"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="10" cy="18" r="1.6" fill="currentColor" />
            <circle cx="17" cy="18" r="1.6" fill="currentColor" />
          </svg>
        </button> */}

       
      </div>
    </article>
  )
}

export default BookCard
