import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Nopage.css";
const Nopage = () => {
  return (
    <div>
      <Navbar />
      <div className="nopage__content-wrapper">
        <div className="nopage__content">
          <div className="nopage__content-text">
            <p>404</p>
            <p>Page not found</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nopage;
