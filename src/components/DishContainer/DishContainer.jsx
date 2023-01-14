import React from 'react'
import Card from '../Card/Card'
import Dish from '../Dish/Dish'

const DishContainer = () => {
  return (
    <div className="dish__container" style={{display:"flex", flexWrap:"wrap", justifyContent:"space-evenly", cursor:"pointer"}}>
    <Dish/>
    <Dish/>
    <Dish/>
    <Dish/>
    <Dish/>
    <Dish/>
    <Dish/>
    <Dish/>
    <Dish/>
    <Dish/>
    <Dish/>
    <Dish/>
  </div>
  )
}

export default DishContainer
