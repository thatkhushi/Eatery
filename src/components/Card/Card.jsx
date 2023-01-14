import React from "react";
import { Link } from "react-router-dom";
import cardimg from "../../assets/cardimg.png";
import star from "../../assets/star.png";
import "./Card.css";

const Card = () => {
  return (
    <div className="home__card">
      <Link to='/menu' className="home__card-content">
        <img src={cardimg} alt="card" className="home__card-image" />
        <div className="home__card-text">
          <p>Govind Bhawan</p>
          <div className="home__card-rating">
            <p style={{margin:"2px"}}>3.4</p>
            <img src={star} alt="star"/>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;