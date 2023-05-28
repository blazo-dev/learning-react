import { useReducer } from 'react'
import { CART_ACTIONS, cartReducer, initialCartState } from '../reducers/cart'

export default function useCartReducer () {
  const [cart, dispatch] = useReducer(cartReducer, initialCartState)

  const addToCart = (product) => {
    dispatch({ type: CART_ACTIONS.ADD_TO_CART, payload: product })
  }
  const clearCart = () => {
    dispatch({ type: CART_ACTIONS.CLEAR_CART })
  }

  const removeFromCart = (product) => {
    dispatch({ type: CART_ACTIONS.REMOVE_FROM_CART, payload: product })
  }

  return { cart, addToCart, clearCart, removeFromCart }
}
