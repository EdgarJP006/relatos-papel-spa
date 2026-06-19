import { useEffect, useState } from "react";
// import { books } from '../data/books'
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import Cart from "../components/Cart";
import useBookSearch from "../hooks/useBookSearch";
import { getBooks } from "../services/bookService";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const booksPerPage = 6;

  const filteredBooks = useBookSearch(books, searchTerm);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;

  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const data = await getBooks();
        console.log("LIBROS API:", data);
        setBooks(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadBooks();
  }, []);

  if (loading) {
    return <p>Cargando libros...</p>;
  }

  return (
    <main>
      <h1> Catálogo de libros </h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <div className="content-with-cart">
        <section className="books-grid">
          {currentBooks.map((book) => (
            // uso dinamico de BookCard
            <BookCard key={book.id} book={book} />
          ))}
          {currentBooks.length === 0 && (
            <p className="empty">No se encontraron libros.</p>
          )}
        </section>
        <Cart />
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button onClick={prevPage} disabled={currentPage === 1}>
            ←
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={currentPage === index + 1 ? "active-page" : ""}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button onClick={nextPage} disabled={currentPage === totalPages}>
            →
          </button>
        </div>
      )}
    </main>
  );
}

export default Home;
