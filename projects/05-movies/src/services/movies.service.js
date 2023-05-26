export async function searchMovies ({ search }) {
  if (!search) return null

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=3d56cdc&s=${search}`)
    const json = await response.json()

    const moviesFromResponse = json.Search

    return moviesFromResponse?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch (error) {
    throw new Error('Error searching movies.')
  }
}
