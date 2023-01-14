import React from 'react'
import './Home.css'
import Card from '../../components/Card/Card'
import Navbar from '../../components/Navbar/Navbar'
// import Menu from '../../components/Menu/Menu'
import CardContainer from '../../components/CardContainer/CardContainer'
// import MenuCard from '../../components/MenuCard/MenuCard'


const Home = () => {
  return (
    <div className='home'>
    <Navbar/>
    <div className="card__top-text">12 Canteens Founds</div>
    <CardContainer/>
   </div>
  )
}

export default Home
