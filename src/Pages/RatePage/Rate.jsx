import React from 'react'
import Khushi from '../../components/Khushi/Khushi'
import Navbar from '../../components/Navbar/Navbar'
import background from '../../assets/background__login.png'
import './Rate.css'

const Rate = () => {
  return (
    <div className='rate'>
      <Navbar/>
      <p>Food Detail</p>
     <Khushi/> 
     {/* <img src={background} className="rate__img"/> */}
    </div>
  )
}

export default Rate
