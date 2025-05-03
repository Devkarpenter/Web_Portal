import React from "react";
import { useNavigate } from "react-router-dom";
import "./ServiceCard.css";

const ServiceCard = ({ title, img }) => {
  const navigate = useNavigate();

  const handleApply = () => {
    navigate('/apply', {
      state: {
        title: typeof title === 'string' ? title : title?.props?.children?.join(' '),
        img
      }
    });
  };

  return (
    <div id="ServiceCard">
      <div className="card shadow-sm mb-3" style={{ width: "13rem" }}>
        <img
          src={img}
          className="card-img-top img-fluid rounded-top"
          style={{ height: "7rem" }}
          alt="..."
        />
        <div className="card-body px-3">
          <h6 className="card-title text-center">{title}</h6>
          <button onClick={handleApply} className="btn btn-primary w-100 mt-2">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
