import { useState } from 'react'

import { books } from '../data/books'
import BookCard from '../components/BookCard'
import SearchBar from '../components/SearchBar'
import Cart from '../components/Cart'
import useBookSearch from '../hooks/useBookSearch'

function Home() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredBooks = useBookSearch(books, searchTerm)

  return (
    <main>
      <h1>Catálogo de libros</h1>
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <div className="content-with-cart">
        <section className="books-grid">
          {filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
            />
          ))}
        </section>

        <Cart />
      </div>
    </main>
  )
}

export default Home