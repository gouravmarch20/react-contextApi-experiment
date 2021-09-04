import React from 'react'
import Cart from './page/Cart'
import CartProvider from './context/provider/CartProvider'

const App = () => {
  return (
    <CartProvider>
      <Cart />
    </CartProvider>
  )
}

export default App
