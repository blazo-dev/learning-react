import useCart from '../../hooks/useCart'
import { AddToCartIcon, RemoveFromCartIcon } from '../Icons'
import './ProductCard.scss'

export default function ProductCard ({ product }) {
  const { addToCart, isProductInCart, removeFromCart } = useCart()
  const isProductInCartValue = isProductInCart(product)

  const handleClick = () => {
    if (isProductInCartValue) {
      return removeFromCart(product)
    }

    addToCart(product)
  }

  return (
    <article className='card'>
      <header className='card-header'>
        <img
          className='card-image'
          src={product.thumbnail}
          alt={product.title}
        />
      </header>
      <div className='card-body'>
        <strong className='card-title'>
          {product.title} <span className='card-price'>- ${product.price}</span>
        </strong>

        <p className='card-description'>{product.description}</p>
      </div>
      <footer className='card-footer'>
        <button
          className={`card-button ${
            isProductInCartValue ? 'card-button-remove' : ''
          }`}
          onClick={handleClick}
        >
          {isProductInCartValue ? <RemoveFromCartIcon /> : <AddToCartIcon />}
        </button>
      </footer>
    </article>
  )
}
