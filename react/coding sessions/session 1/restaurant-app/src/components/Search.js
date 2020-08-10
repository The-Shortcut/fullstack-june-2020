import React from 'react'

const Search = ({ searchRestaurants }) => {
    return (
        <form className="form" id="addItemForm">
        <input
          type="text"
          className="input"
          id="addSearch"
          placeholder="Search Something..."
        />
        <button onClick={searchRestaurants}>Search</button>
      </form>
    )
}

export default Search
