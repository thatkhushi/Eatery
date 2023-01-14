import React from "react";
import "./OrderCard.css";
import foodimg from "../../assets/foodimg.png";

const OrderCard = () => {
  const[count, setCount]=React.useState(1);
  const increase=()=>{
    setCount(count+1);
  }
  const decrease=()=>{
    if(count>1)
    {setCount(count-1);}
    else{
      count=1;
    }
  }

  return (
    <div className="ordercard__container">
      <div className="ordercard-details">
        <div className="ordercard__sideimage">
          <img src={foodimg} className="ordercard__sideimage-image" />
        </div>
        <div className="ordercard__quantity">
          <p >Aloo Pyaaz Parantha</p>
          <div className="ordercard__quantity-changer">
            <p onClick={decrease}>-</p>
            <p>Qty: {count} </p>
            <p onClick={increase}>+</p>
          </div>
        </div>
        <div className="ordercard__amount">
          <p style={{margin:0}}>₹ 30 </p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
