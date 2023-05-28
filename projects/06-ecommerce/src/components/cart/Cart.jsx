import { useId } from 'react'
import { CartIcon, ClearCartIcon } from '..'
import './Cart.scss'
import { useToggle } from '../../hooks'
import CartProducts from './CartProducts'
import useCart from '../../hooks/useCart'

export default function Cart () {
  const [isActive, switchIsActive] = useToggle(false)
  const { cart, clearCart, cartTotalItems } = useCart()
  const cartCheckboxId = useId()

  return (
    <>
      <label
        className={`cart-button ${isActive ? 'cart-button-active' : ''}`}
        htmlFor={cartCheckboxId}
      >
        <span className='cart-indicator'>{cartTotalItems}</span>
        <CartIcon />
      </label>
      <input
        className='cart-toggle'
        type='checkbox'
        onChange={switchIsActive}
        id={cartCheckboxId}
        hidden
      />
      <aside className='cart-modal'>
        <h2 className='cart-title'>Cart</h2>
        <div className='cart-content'>
          {cart.length === 0
            ? (
              <p className='cart-empty'>Your cart is empty</p>
              )
            : (
              <>
                <CartProducts products={cart} />
              </>
              )}
        </div>
        {cart.length > 0 && (
          <button className='cart-button-clear' onClick={clearCart}>
            <ClearCartIcon />
          </button>
        )}
      </aside>
    </>
  )
}
