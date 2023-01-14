import React from "react";
import star from "../../assets/star.png";
import paratha from "../../assets/paratha.png";
import "./ItemDetail.css";

const ItemDetail = () => {
  const [count, setCount] = React.useState(1);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      count = 1;
    }
  };
  return (
    <div className="itemdetail__content">
      <div className="itemdetail__top-container">
        <div className="itemdetail__top-image">
          <img src={paratha} />
        </div>
        <div className="itemdetail__top-text-container">
          <div className="dish__name">
            <p>Aloo Paratha</p>
          </div>
          <div className="itemdetail__top-text-wrapper">
            <div className="itemdetail__top-text">
              <p>3.4</p>
              <img src={star} />
            </div>
            <div className="itemdetail__top-text-rating">
              <p>100+ Ratings</p>
            </div>
          </div>
          <div className="itemdetail__top-quantity">
            <p>Qty</p>
            <p onClick={decrease}>-</p>
            <p>{count} </p>
            <p onClick={increase}>+</p>
            <p>Add to Cart</p>
          </div>
        </div>
      </div>
      <div className="itemdetail__bottom-conatiner"></div>
    </div>
  );
};

export default ItemDetail;
