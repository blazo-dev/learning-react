import { ApplaudoIcon } from '../../../components'

export default function AboutExperience () {
  return (
    <>
      <h2 className='section-title about-title'>Experience</h2>
      <hr className='line-separator' />
      <article className='about-article'>
        <h4 className='section-subtitle about-article-title'>
          I'm proud to have collaborated with some awesome companies:
        </h4>
        <ul className='about-list'>
          <li className='about-list-item'>
            <a
              href='/applaudo-letter.pdf'
              download
            >
              <ApplaudoIcon />
            </a>
          </li>
        </ul>
      </article>
    </>
  )
}
