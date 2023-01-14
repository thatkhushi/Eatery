import React from "react";
import "./CartCard.css";
import sideimage from "../../assets/sideimage.png";
import OrderCard from "../OrderCard/OrderCard";
import { Link } from "react-router-dom";

const CartCard = () => {
  return (
    <div className="cart__container">
      <p>In Govind Bhawan’s canteen</p>
      <div className="cart__details">
        <div className="cart__side-image__container">
          <img src={sideimage} className="cart__side-image" />
        </div>
        <div className="ordercard__container-wrapper">
          <OrderCard />
          <OrderCard />
          <OrderCard />
          {/* <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard /> */}
        </div>
        <div className="cart__payment-container">
          <p>Total Amount: 80₹ </p>
          <div className="card__payment-proceed__button">
           <Link to="/pay" style={{textDecoration:"none",color:" #CA1241"}}>Proceed for payment</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
