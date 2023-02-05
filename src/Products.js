import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from './Store/cartSlice';


const Products = () => {
  const [products, setProducts] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    const getProducts = async() => {
      const res = await fetch('https://fakestoreapi.com/products')
      const data = await res.json()
      setProducts(data)
    }
    getProducts()

  },[])


return(
  <>
  <div className="product">
    {
      products.map((product) => {
        
        return(

          <div className='items' key={product.id}>
               <img src={product.image} alt="..." style={{height:'10rem', width:'10rem'}}/>
                <h6>{product.title}</h6>
                <h5>Rs. {product.price}/-</h5>
              <button className='btn btn-outline-primary' onClick={() => dispatch(add(product))}>Add to Cart</button>
          </div>

        )

      })
    }
  </div>

  </>
)

}
export default Products