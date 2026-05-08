import { createContext, useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const CartContext = createContext()

export function CartProvider({ children }) {
const [cartItems, setCartItems] = useLocalStorage('cart', [])

  function addToCart(book) {
    setCartItems((currentItems) => {
      const exists = currentItems.find((item) => item.id === book.id)

      if (exists) {
        return currentItems
      }

      return [...currentItems, book]
    })
  }

  function removeFromCart(bookId) {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== bookId)
    )
  }

  function clearCart() {
    setCartItems([])
  }

  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
// Custom hook para usar el contexto del carrito
export function useCart() {
  return useContext(CartContext)
}