import { Link } from '../../router'
import './Page404.scss'

export default function Page404 () {
  return (
    <section className='section not-found'>
      <h2 className='section-title not-found-title'>Page not found</h2>
      <Link href='/'>Go to home</Link>
    </section>
  )
}
