import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

const SearchBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const [searchInput, setSearchInput] = useState("");
  
  const onSubmit = (e) => {
    e.preventDefault();
    let query = searchInput.toLowerCase()

    history.push(`/search/${query}`)
    setSearchInput("")
  }

  const updateSearch = (e) => {
    setSearchInput(e.target.value)
  }

  return (
    <div className="searchbar-container">
      <form action="/" method="get" autoComplete="off" onSubmit={onSubmit}>
        <input type="text" 
        placeholder="Search for anything" 
        onChange={updateSearch} 
        value={searchInput} />
        <button type="submit">Search the Store</button>
      </form>
    </div>
  )
}

export default SearchBar;
