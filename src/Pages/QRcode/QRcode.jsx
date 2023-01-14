import React from "react";
import "./QRcode.css";
import qrcode from "../../assets/qrcode.jpeg";
import MenuCard from "../../components/MenuCard/MenuCard";
import Navbar from "../../components/Navbar/Navbar";
import copy from "../../assets/copy.png";

const QRcode = () => {
  return (
    <div>
      <Navbar />
      <MenuCard />
      <div className="qrcodepage__content">
        <div className="qrcode__id">
          <div className="qrcode__wrapper">
            <div className="qrcode__image">
              <img src={qrcode} />
            </div>
            <div className="qrcode__text1">
              <p>OR</p>
            </div>
            <div style={{display:"flex"}}>
              <div className="qrcode__text2">
                <p>UPI ID</p>
                <div className="qrcode__upiId">
                  <p>amanabc@oksbi</p>
                  <img src={copy} />
                </div>
              </div>
            </div>
          </div>
          <div className="qrcode__texttopay">
            <p>
              Scan and Pay on this QR code or pay on UPI ID click on Done once
              payed
            </p>
          </div>
        </div>
        <div className="qrcode__totalamount">
          <p>Total Amount: 80₹ </p>
          <p>Done</p>
        </div>
      </div>
    </div>
  );
};

export default QRcode;
