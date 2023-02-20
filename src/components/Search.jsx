import React, { useState } from 'react'
import "./Search.css"

const Search = ({ onSearchSubmit }) => {
  const [term, setTerm] = useState("")

  const onFormSubmit = (event) => {
    event.preventDefault()

    onSearchSubmit(term)
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input className='Search' type="text" value={term} placeholder="検索"
        onChange={e => setTerm(e.target.value)} />
    </form>
  )
}

export default Search
