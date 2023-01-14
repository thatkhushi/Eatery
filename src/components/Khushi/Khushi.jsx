import React from "react";
import "./Khushi.css";
import cardimg from "../../assets/cardimg.png";
import star from "../../assets/star.png";
import redstar from "../../assets/redstar.png";
import sat from "../../assets/sat.png";
import filledredstar from "../../assets/filledredstar.png";


const Khushi = () => {
  const [count, setCount] = React.useState(1);
  const[filled_1, setFilled_1]=React.useState(false);
  const[filled_2, setFilled_2]=React.useState(false);
  const[filled_3, setFilled_3]=React.useState(false);
  const[filled_4, setFilled_4]=React.useState(false);
  const[filled_5, setFilled_5]=React.useState(false);
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
  const toggle_1=()=>{
    setFilled_1(!filled_1);
  }
  const toggle_2=()=>{
    setFilled_2(!filled_2);
  }
  const toggle_3=()=>{
    setFilled_3(!filled_3);
  }
  const toggle_4=()=>{
    setFilled_4(!filled_4);
  }
  const toggle_5=()=>{
    setFilled_5(!filled_5);
  }
  return (
    <div className="menu__card-container">
      <div className="menu__card-content">
        <div className="menu__card-image">
          <img src={cardimg} />
        </div>
        <div className="menu__card">
          <div className="menu__card-details">
            <p>Aloo Paratha</p>
            <div className="menu__card-data">
              <div className="menu__card-rating-1">
                <p style={{ margin: 0, marginRight: "5px" }}>3.4</p>
                <img src={star} />
              </div>
              <div className="menu__card-rating-2">
                <p style={{ margin: 0 }}>100+ Ratings</p>
              </div>
            </div>
          </div>
          <div className="khushi">
            <div className="ordercard__quantity-changer">
              <p onClick={decrease}>-</p>
              <p>Qty: {count} </p>
              <p onClick={increase}>+</p>
            </div>
                <p>Price per Unit  ₹30</p>
            <div className="ordercard-text">
                <p>Add to Cart</p>
            </div>
            <div className="t">
                <p>Estimated time for getting prepared - 14 Mins</p>
            </div>
          </div>
        </div>
      </div>
      <div className="menu__card-container-downtext">
        <div className="menu__card-container-downtext1">
            <p>Rate Aloo Parantha from Govind Bhawan</p>
            <div className="menu__card-container-downimage">
                <img src={filled_1 ? filledredstar : redstar} onClick={toggle_1} />
                <img src={filled_2 ? filledredstar : redstar} onClick={toggle_2} />
                <img src={filled_3 ? filledredstar : redstar} onClick={toggle_3} />
                <img src={filled_4 ? filledredstar : redstar} onClick={toggle_4} />
                <img src={filled_5 ? filledredstar : redstar} onClick={toggle_5} />
            </div>
        </div>
        <div className="menu__card-container-down2image">
            <img src={sat}/>
        </div>

      </div>
    </div>
  );
};

export default Khushi;
