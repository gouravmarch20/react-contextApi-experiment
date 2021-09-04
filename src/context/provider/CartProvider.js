import { useReducer } from 'react'
import CartContext from '../contexts/CartContext'
import { products } from '../../data/products'
import CartReducer from '../reducers/CartReducer'
const CartProvider = props => {
  const [state, dispatch] = useReducer(CartReducer, {
    item: products,
    totalAmount: 0,
    totalItem: 0
  })
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CartContext.Provider>
  )
}
export default CartProvider
