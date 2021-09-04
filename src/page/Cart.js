import React, { useContext, useEffect } from 'react'
import './cart.css'
import ContextCart from '../components/ContextCart'
import CartContext from '../context/contexts/CartContext'
import { GET_TOTAL } from '../context/types/CartTypes'

const Cart = () => {
  const { dispatch, state } = useContext(CartContext)
  console.log(state)
  // FIXME: []
  useEffect(() => {
    dispatch({ type: GET_TOTAL })
  }, [state.item])

  return (
    <>
      <ContextCart />
    </>
  )
}

export default Cart
