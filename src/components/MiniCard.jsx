import React from "react";
import CardButton from "./CardButton";
import "../styles/Vans.css";
function MiniCard({ src, title, type, price }) {
  return (
    <div className="mini-card">
      <div className="mini-image-container">
        <img src={src} alt="Van" />
      </div>
      <div className="mini-card-content">
        <div className="mini-left">
          <h3>{title}</h3>
          <CardButton>{type}</CardButton>
        </div>

        <div>
            <p>
              ${price}
            
            
            </p>
            
            <span className="day">/day</span>
        </div>
      </div>
    </div>
  );
}

export default MiniCard;
