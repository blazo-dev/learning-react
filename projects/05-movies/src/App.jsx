import { useRef, useState } from 'react'
import './App.scss'
import { SearchForm } from './components'
import Loader from './components/Loader'
import Movies from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App () {
  const [sort, setSort] = useState(false)
  const { movies, getMovies, isLoading } = useMovies({ sort })
  const previousSearch = useRef('')

  const searchMovies = async (search) => {
    if (search === previousSearch.current) return
    previousSearch.current = search
    await getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <>
      <header className='header'>
        <h1 className='header__title'>Film Finder</h1>
        <SearchForm onSearch={searchMovies} onSort={handleSort} sort={sort} />

      </header>
      <main className='main'>
        {isLoading ? <Loader /> : <Movies movies={movies} />}
      </main>
    </>
  )
}

export default App
