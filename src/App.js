import React, { useState } from 'react'
import unsplash from './api/unsplash'
import Header from './components/Header'
import ImageList from './components/ImageList'
import './components/Search.css'

function App() {
  const [images, setImages] = useState([])
  const [term, setTerm] = useState('')
  const [page, setPage] = useState('')

  const onSearchSubmit = async (term, page) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term, per_page: 21, page: page },
    })
    // pageが１ならresponse.data.resultを返す。1以外なら、imagesに新たに取得したdataを結合する。
    setImages(
      page === 1 ? response.data.results : images.concat(response.data.results)
    )
  }

  const onFormSubmit = (event) => {
    event.preventDefault()
    // 新しいキーワードで検索した場合、pageを１に設定する。
    setPage(1)
    onSearchSubmit(term, 1)
  }

  return (
    <div className="App">
      <Header>
        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            className="Search"
            value={term}
            placeholder="検索"
            onChange={(e) => setTerm(e.target.value)}
          />
        </form>
      </Header>
      <div>
        <ImageList
          images={images}
          onSearchSubmit={onSearchSubmit}
          term={term}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  )
}

export default App
