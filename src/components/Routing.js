import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './Products'
import Cart from './Cart'
import Product from './Product'

function Routing() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </>
  )
}

export default Routing