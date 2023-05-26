import { useState } from 'react'
import './TwitterFollowCard.css'
export function TwitterFollowCard ({
  name,
  userName = 'unknown',
  children,
  initialIsFollowing = false
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  const buttonClasses = isFollowing
    ? 'card__button card__button--following'
    : 'card__button'
  const buttonText = isFollowing ? 'Following' : 'Follow'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='card'>
      <header className='card__header'>
        <img
          className='card__avatar'
          src={`https://unavatar.io/${userName}`}
          alt={`Avatar de ${name}`}
        />
        <div className='card__info'>
          <strong className='card__title'>{children}</strong>
          <span className='card__subtitle'>@{userName}</span>
        </div>
      </header>
      <aside className='card__aside'>
        <button className={buttonClasses} onClick={handleClick}>
          <span className='card__text-follow'>{buttonText}</span>
          <span className='card__text-stop-follow'>Stop following</span>
        </button>
      </aside>
    </article>
  )
}
