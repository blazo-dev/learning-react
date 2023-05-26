import './Card.scss'

export function Card ({ movie }) {
  return (
    <article className='card'>
      <img
        src={movie.poster}
        alt={`${movie.title} poster`}
        className='card__image'
      />
      <h3 className='card__title'>
        {movie.title} <span className='card__year'>({movie.year})</span>
      </h3>
    </article>
  )
}
