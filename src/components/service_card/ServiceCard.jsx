import React from "react";
import { useState } from "react"; // Import useState from React 
import "./ServiceCard.css"; // Import the CSS file for styling

const ServiceCard = ({ title, img }) => {

  return (
    <div id="ServiceCard">
      <div className="card shadow-sm mb-3" style={{ width: "13rem" }}>
        <img
          src={img}
          className="card-img-top img-fluid rounded-top" style={{ height: "7rem" }}
          alt="..."
        />
        <div className="card-body  px-3">
          <h6 className="card-title text-center">{title}</h6>
          
          
          <a href="#" className="btn btn-primary w-100 mt-2">
            Apply
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
