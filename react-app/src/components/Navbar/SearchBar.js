import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import "./SearchBar.css"

const SearchBar = () => {
  const history = useHistory();
  
  const [searchInput, setSearchInput] = useState("");
  
  const onSubmit = (e) => {
    e.preventDefault();
    
    let query = searchInput.toLowerCase()
    
    if (query === "") {
      return
    }

    history.push(`/search/${query}`)
    setSearchInput("")
  }

  const updateSearch = (e) => {
    setSearchInput(e.target.value)
  }

  return (
    <div className="searchbar-container">
      <form id="searchbar" action="/" method="get" autoComplete="off" onSubmit={onSubmit}>
        <input id="searchbar-input"
        type="text" 
        placeholder="Search for anything" 
        onChange={updateSearch}
        value={searchInput} />
        <button id="searchbar-button" aria-label="search" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
      </form>
    </div>
  )
}

export default SearchBar;
