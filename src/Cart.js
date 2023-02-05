import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { remove } from './Store/cartSlice'

const Cart = () => {
  const cartItems =  useSelector((state) => state.cart)
  const dispatch = useDispatch()
   
   return(
    <>
      <div className='cart-products'>
        {
          cartItems.map((items) => {
            const{category, description, id, image,price, rating, title} = items;
            return(
              <div className='cart-items' key={id}>
                <img src={image} alt="" style={{height:'5rem',width:'5rem'}} />
                <h4>Rs. {price}/-</h4>
                <button style = {{height:'2.5rem'}}className='btn btn-primary'onClick={() => dispatch(remove(items.id))} >Remove</button>
              </div>
          )
        })
          }
        
      </div>
    </>
   )
 
}

export default Cart