import { Link } from '../../router'
import './AboutPage.scss'
import { AboutExperience, AboutPresentation, AboutSkills } from './components'

export default function AboutPage () {
  return (
    <section className='section about'>
      <AboutPresentation />
      <AboutSkills />
      <AboutExperience />
      <Link href='/'>Go back</Link>
    </section>
  )
}
