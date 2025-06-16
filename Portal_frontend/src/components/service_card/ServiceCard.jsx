import React from "react";
import { useNavigate } from "react-router-dom";
import "./ServiceCard.css";

// Define the helper function
const getPlainText = (jsx) => {
  if (typeof jsx === 'string') return jsx;
  if (Array.isArray(jsx?.props?.children)) {
    return jsx.props.children
      .map(child => typeof child === 'string' ? child : '')
      .join(' ');
  }
  return typeof jsx?.props?.children === 'string' ? jsx.props.children : '';
};

const ServiceCard = ({ title, img }) => {
  const navigate = useNavigate();

  const handleApply = () => {
    navigate('/apply', {
      state: {
        title: typeof title === 'string' ? title : getPlainText(title),
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
