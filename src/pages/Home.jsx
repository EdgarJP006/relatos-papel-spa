import { useState, useEffect } from 'react'

import { books } from '../data/books'
import BookCard from '../components/BookCard'
import SearchBar from '../components/SearchBar'
import Cart from '../components/Cart'
import useBookSearch from '../hooks/useBookSearch'

function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const booksPerPage = 6

  const filteredBooks = useBookSearch(books,searchTerm)

  useEffect(() => {setCurrentPage(1)}, [searchTerm])

  const indexOfLastBook = currentPage * booksPerPage
  const indexOfFirstBook = indexOfLastBook - booksPerPage

  const currentBooks =
    filteredBooks.slice(
      indexOfFirstBook,
      indexOfLastBook
    )

  const totalPages = Math.ceil(
    filteredBooks.length /
      booksPerPage
  )

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <main>
      <h1> Catálogo de libros </h1>
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={
          setSearchTerm
        }
      />

      <div className="content-with-cart">
        <section className="books-grid">
          {currentBooks.map(
            (book) => (
              <BookCard
                key={book.id}
                book={book}
              />
            )
          )}

          {currentBooks.length === 0 && (

            <p className="empty">
              No se encontraron libros.
            </p>

          )}

        </section>

        <Cart />

      </div>

      {/* PAGINACIÓN */}

      {totalPages > 1 && (

        <div className="pagination">

          <button
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            ←
          </button>

          {Array.from(
            { length: totalPages },
            (_, index) => (

              <button
                key={index}
                className={
                  currentPage ===
                  index + 1
                    ? 'active-page'
                    : ''
                }
                onClick={() =>
                  setCurrentPage(
                    index + 1
                  )
                }
              >
                {index + 1}
              </button>

            )
          )}

          <button
            onClick={nextPage}
            disabled={
              currentPage === totalPages
            }
          >
            →
          </button>

        </div>

      )}

    </main>
  )
}

export default Home