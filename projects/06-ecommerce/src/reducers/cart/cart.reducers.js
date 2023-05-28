export const CART_ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

const updateLocalCartStorage = (state) => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const initialCartState = JSON.parse(window.localStorage.getItem('cart')) || []

export const cartReducer = (state, action) => {
  const { type, payload: product } = action

  switch (type) {
    case CART_ACTIONS.ADD_TO_CART: {
      const productInCartIndex = state.findIndex(
        (item) => item.id === product.id
      )

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        updateLocalCartStorage(newState)
        return [...newState]
      }

      const newState = [...state, { ...product, quantity: 1 }]
      updateLocalCartStorage(newState)
      return newState
    }
    case CART_ACTIONS.REMOVE_FROM_CART: {
      const productInCartIndex = state.findIndex(
        (item) => item.id === product.id
      )

      if (productInCartIndex < 0) return

      const newState = structuredClone(state)

      if (newState[productInCartIndex].quantity === 1) {
        const filteredState = newState.filter((item) => item.id !== product.id)
        updateLocalCartStorage(filteredState)
        return filteredState
      }

      newState[productInCartIndex].quantity -= 1
      updateLocalCartStorage(newState)
      return newState
    }
    case CART_ACTIONS.CLEAR_CART: {
      updateLocalCartStorage([])
      return []
    }
  }
}
