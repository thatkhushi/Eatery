import React from 'react'
import { Link } from 'react-router-dom'
import dish from '../../assets/dish.png'
import star from '../../assets/star.png'
import './Dish.css'
const Dish = () => {
  const[available, setAvailable]=React.useState(true);
    return (
    <div className="home__card">
    <Link to='/rate' className={available? "home__card-content" :"home__card-content_blur" }>
      <img src={dish} alt="card" className="home__card-image" />
      <div className="home__card-text">
        <p>Patties</p>
        <div className="home__card-rating">
          <p style={{margin:"2px"}}>₹30</p>
          {/* <p style={{margin:"2px"}}>3.0</p>
          <img src={star} alt="star"/> */}
        </div>
      </div>
    </Link>
  </div>
  )
}

export default Dish
