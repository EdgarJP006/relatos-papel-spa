import { FaSearch } from "react-icons/fa";

function SearchBar({
  searchTerm,
  onSearchChange ,
}) {
  return (
    <div className="search-bar">
      <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder="Escribe el título del libro..."
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  )
}

export default SearchBar