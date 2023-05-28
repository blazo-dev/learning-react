import { useState } from 'react'
import './Footer.scss'

export default function Footer () {
  const [isHidden, setIsHidden] = useState(false)

  const handleClick = () => {
    setIsHidden(!isHidden)
  }
  return (
    <footer className={`footer ${isHidden ? 'footer-hidden' : ''}`}>
      <div className='footer-content'>
        <h4 className='footer-title'>
          React Technical Challenge ⚛ －
          <a
            target='_blank'
            href='https://github.com/blazo-dev/learning-react'
            className='footer-username'
            rel='noreferrer'
          >
            @blazo-dev
          </a>
        </h4>
        <h5 className='footer-description'>
          Ecommerce using useContext & useReducer
        </h5>
      </div>
      <aside className='footer-action'>
        <button className='footer-button' onClick={handleClick}>{isHidden ? '↑' : '↓'}</button>
      </aside>
    </footer>
  )
}
