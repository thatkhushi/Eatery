import React from 'react'
import CartCard from '../../components/CartCard/CartCard'
import './Cart.css'
import Navbar from '../../components/Navbar/Navbar'

const Cart = () => {
  return (
    <>
    <Navbar/>
    <div className='cartcard__container'>
      <p>Cart</p>
    <CartCard/>
    <CartCard/>
    <CartCard/>
    <CartCard/>
    <CartCard/>
    </div></>
  )
}

export default Cart
