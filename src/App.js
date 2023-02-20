import React, { useState } from 'react'
import unsplash from './api/unsplash'
import Header from './components/Header'
import ImageList from './components/ImageList'
import Search from './components/Search'

function App() {
  const [images, setImage] = useState([])
  const onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    })
    setImage(response.data.results)
  }
  return (
    <div className="App">
      <Header>
        <Search onSearchSubmit={onSearchSubmit} />
      </Header>
      <div>
        <ImageList images={images} />
      </div>
    </div>
  )
}

export default App
