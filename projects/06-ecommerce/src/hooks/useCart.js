import { useContext } from 'react'
import { CartContext } from '../context/cart.context'

export default function useCart () {
  const { cart, addToCart, clearCart, cartTotal, cartTotalItems, isProductInCart, removeFromCart } = useContext(CartContext)

  if (cart === undefined) throw new Error('useCart must be used within a CartProvider')

  return { cart, addToCart, clearCart, cartTotal, cartTotalItems, isProductInCart, removeFromCart }
}
