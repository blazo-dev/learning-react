import { Card } from './Card'

export function CardList ({ movies }) {
  return (
    <>
      {movies.map((movie) => (
        <Card
          key={movie.id}
          movie={movie}
        />
      ))}
    </>
  )
}
