function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar">
      <label htmlFor="search">Buscar libro por título</label>

      <input
        id="search"
        type="text"
        placeholder="Escribe el título del libro..."
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  )
}

export default SearchBar