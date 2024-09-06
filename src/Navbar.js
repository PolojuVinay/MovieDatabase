import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = () => {
    // Navigate to search results
    window.location.href = `/search?query=${searchQuery}`
  }

  return (
    <nav className="navbar">
      <div className="navbar-title">movieDB</div>
      <div className="navbar-links">
        <Link to="/">Popular</Link>
        <Link to="/top-rated">Top Rated</Link>
        <Link to="/upcoming">Upcoming</Link>
      </div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </nav>
  )
}

export default Navbar
