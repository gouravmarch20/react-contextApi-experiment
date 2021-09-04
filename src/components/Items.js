import React, { useContext } from 'react'
import { INCREMENT, DECREMENT, REMOVE_ITEM } from '../context/types/CartTypes'
import CartContext from '../context/contexts/CartContext'
const Items = ({ id, description, title, img, price, quantity }) => {
  const { dispatch, state } = useContext(CartContext)

  return (
    <>
      <div className='items-info'>
        <div className='product-img'>
          <img src={img} alt='iamge' />
        </div>

        <div className='title'>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className='add-minus-quantity'>
          <i
            className='fas fa-minus minus'
            onClick={() =>
              dispatch({
                type: DECREMENT,
                payload: id
              })
            }
          ></i>
          <input type='text' placeholder={quantity} disabled />
          <i
            className='fas fa-plus add'
            onClick={() =>
              dispatch({
                type: INCREMENT,
                payload: id
              })
            }
          ></i>
        </div>

        <div className='price'>
          <h3>{price}₹</h3>
        </div>

        <div className='remove-item'>
          <i
            className='fas fa-trash-alt remove'
            onClick={() =>
              dispatch({
                type: REMOVE_ITEM,
                payload: id
              })
            }
          ></i>
        </div>
      </div>

      <hr />
    </>
  )
}

export default Items
