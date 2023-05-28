import useCart from '../../hooks/useCart'
import { AddToCartIcon, RemoveFromCartIcon } from '../Icons'
import './CartProduct.scss'
export default function CartProduct ({ product }) {
  const { addToCart, removeFromCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
  }

  const handleRemoveFromCart = () => {
    removeFromCart(product)
  }

  return (
    <article className='cart-product'>
      <header className='cart-product-header'>
        <img
          className='cart-product-image'
          src={product.thumbnail}
          alt={product.title}
        />
        <strong className='cart-product-title'>
          {product.title}{' '}
          <span className='cart-product-price'>- ${product.price}</span>
        </strong>
      </header>
      <aside className='cart-product-body'>
        <span className='cart-product-quatity'>
          Quantity: {product.quantity || 0}
        </span>
        <div className='cart-product-actions'>
          <button
            className='cart-product-button cart-product-button-remove'
            onClick={handleRemoveFromCart}
          >
            <RemoveFromCartIcon />
          </button>
          <button
            className='cart-product-button'
            onClick={handleAddToCart}
          >
            <AddToCartIcon />
          </button>
        </div>
      </aside>
    </article>
  )
}
