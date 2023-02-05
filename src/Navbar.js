import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart)

  
  return (
    <>
      <div className=' d-flex justify-content-between bg-dark align-items-center collapse collapse-navbar fixed-top'>
        <div className='m-2 ms-5 text-white fw-bold text-center fs-2'>
          MY STORE
        </div>
        <div className='d-flex m-2 me-5 align-items-center'>
                <Link to='/'><button type="button" className="btn text-white fw-bold">Home</button></Link>
                <Link to='/products'><button type="button" className="btn text-white fw-bold">Products</button></Link>
                <Link to='/cart'><button type="button" className="btn text-white fw-bold position-relative">
                  Cart <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">{cartItems.length}</span>
                  </button></Link>
            
        </div>
      </div>
    </>
  )
}

export default Navbar