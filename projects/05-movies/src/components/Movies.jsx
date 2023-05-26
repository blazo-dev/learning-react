import { CardList } from './CardList'
import { NoResults } from './NoResults'

function Movies ({ movies }) {
  const hasMovies = movies && movies.length > 0

  return (
    <>
      {hasMovies ? <CardList movies={movies} /> : <NoResults />}
    </>
  )
}

export default Movies
