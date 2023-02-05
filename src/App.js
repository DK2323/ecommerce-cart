import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './Home.js'
import Products from './Products.js'
import Cart from './Cart.js'
import Navbar from './Navbar'
import { Provider } from 'react-redux'
import Store from './Store/Store'




const App = () => {

  return (
    <>
    <Provider store={Store}>
      <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
    
    </>
  )
}

export default App
