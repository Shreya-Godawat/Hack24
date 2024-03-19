import React, { useState } from "react"
import "../components/searchbar.css" // Import CSS file for styling

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSearch = () => {
    onSearch(searchTerm)
  }

  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search..."
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">Search</button>
    </div>
  )
}

export default SearchBar