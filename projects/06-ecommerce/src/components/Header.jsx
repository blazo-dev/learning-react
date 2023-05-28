import './Header.scss'
import Filters from './Filters'
import { Cart } from '.'

export default function Header () {
  return (
    <header className='header'>
      <div className='wrapper'>
        <div className='header-content'>
          <h1 className='header-title'>Blazo Shop</h1>
          <Cart />
        </div>
        <Filters />
      </div>
    </header>
  )
}
