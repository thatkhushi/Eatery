import React from 'react'
import DishContainer from '../../components/DishContainer/DishContainer'
import MenuCard from '../../components/MenuCard/MenuCard'
import Navbar from '../../components/Navbar/Navbar'

const Menu = () => {
  return (
    <div>
        <Navbar/>
        <MenuCard/>
        <div className="card__top-text">12 Items Found</div>
        <DishContainer/>
      
    </div>
  )
}

export default Menu
