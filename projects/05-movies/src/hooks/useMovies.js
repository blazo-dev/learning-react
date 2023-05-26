import { useCallback, useMemo, useState } from 'react'
import { searchMovies } from '../services/movies.service'

export function useMovies ({ sort }) {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const getMovies = useCallback(
    async ({ search }) => {
      try {
        setIsLoading(true)
        setError(null)
        const newMovies = await searchMovies({ search })
        setMovies(newMovies)
      } catch (e) {
        setError(e.message)
      } finally {
        setIsLoading(false)
      }
    }
    , [])

  const sortedMovies = useMemo(() => {
    return sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies
  }, [movies, sort])

  return { movies: sortedMovies, getMovies, isLoading, error }
}
