import { getPosts } from './api/axios'//all alerts
import { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import SearchByVehicle from './SearchByVehicle'
import ListPage from './ListPage'
import SearchByDate from './SearchByDate'
import Footer from './Footer'

function App() {
  const [posts, setPosts] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    getPosts().then(json => {
      setPosts(json)
      setSearchResults(json)
    })
  }, [])


  function refreshPage() {
    window.location.reload();
  }

  return (
    <>
    <h1 className='titleStyle'>🔎React Alerts Filtering App🔍</h1>
      <div class="flex-parent-element">
        <div class="flex-child-element magenta"><SearchBar posts={posts} setSearchResults={setSearchResults} /></div>
        <div class="flex-child-element green"><SearchByVehicle posts={posts} setSearchResults={setSearchResults} /></div>
        <div class="flex-child-element green"><SearchByDate posts={posts} setSearchResults={setSearchResults} /></div>
      </div>
      <div className='resetButton'>
        <button type="button" onClick={refreshPage}> Reset </button>
      </div>
      <article><h1 style={{ color: 'black' }}>Alerts</h1></article>
      <ListPage searchResults={searchResults} />
      <Footer />
    </>
  )
}

export default App;
