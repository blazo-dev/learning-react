import { Link } from '../../router'
import './HomePage.scss'

export default function HomePage () {
  return (
    <section className='section home'>
      <strong className='home-name'>Bryan Lazo</strong>
      <h1 className='section-title home-title'>Front End Developer</h1>
      <p className='section-description home-description'>
        "Programming is the art of bringing logic and beauty to life in
        harmony."
      </p>
      <Link
        className='home-link'
        href='/about'
      >
        Know me
      </Link>
    </section>
  )
}
