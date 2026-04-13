import { useMemo } from 'react'

function useBookSearch(books, searchTerm) {
  const filteredBooks = useMemo(() => {
    if (!searchTerm.trim()) {
      return books
    }

    return books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [books, searchTerm])

  return filteredBooks
}

export default useBookSearch