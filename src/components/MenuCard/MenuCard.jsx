import React from "react";
import "./MenuCard.css";
import cardimg from "../../assets/cardimg.png";
import star from "../../assets/star.png";
import phoneicon from "../../assets/phoneicon.png";
import mailicon from "../../assets/mailicon.png";

const MenuCard = () => {
  return (
    <div className="menu__card-container">
      <div className="menu__card-content">
        <div className="menu__card-image">
          <img src={cardimg} />
        </div>
        <div className="menu__card">
          <div className="menu__card-details">
            <p>Govind Bhawan</p>
            <div className="menu__card-data">
              <div className="menu__card-rating-1">
                <p style={{margin:0, marginRight:"5px"}}>3.4</p>
                <img src={star} />
              </div>
              <div className="menu__card-rating-2">
                <p style={{margin:0}}>100+ Ratings</p>
              </div>
            </div>
          </div>
          <div className="menu__card-contact-container">
            <p style={{margin:0}}>Contact us</p>
            <div className="menu__card-contact-details">
              <div className="menu__card-contact-phone">
                <img src={phoneicon} style={{height:"21px"}}/>
                <p>123456789</p>
              </div>
              <div className="menu__card-contact-email">
                <img src={mailicon} style={{height:"23px"}}/>
                <p>abcd@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
