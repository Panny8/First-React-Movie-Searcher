import React from 'react'

export const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className='search'>
      <div>
       <img src="./search.svg" alt="search-icon" />
       
        <input 
          placeholder='Search through thousands of movies'
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
        />
      </div>
      </div>
  )
}
