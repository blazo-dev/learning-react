import { createContext, useMemo } from 'react'
import { useCartReducer } from '../hooks'

export const CartContext = createContext()

export default function CartProvider ({ children }) {
  const { cart, addToCart, removeFromCart, clearCart } = useCartReducer()

  const cartTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )
  const cartTotalItems = cart.reduce((acc, item) => acc + item.quantity, 0)
  const isProductInCart = (product) =>
    cart.some((item) => item.id === product.id)

  return (
    <CartContext.Provider
      value={useMemo(
        () => ({
          cart,
          addToCart,
          clearCart,
          cartTotal,
          cartTotalItems,
          isProductInCart,
          removeFromCart
        }),
        [cart]
      )}
    >
      {children}
    </CartContext.Provider>
  )
}
