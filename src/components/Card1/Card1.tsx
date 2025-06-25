// components/Card1/Card1.tsx
import React from "react";
import type { Card1Props } from "../../types";

const Card1: React.FC<Card1Props> = ({ title, badge, imageUrl }) => (
  <div className="card">
    <div className="card1-buttons">
      <button className="card1-btn">Yes</button>
      <button className="card1-btn">No</button>
    </div>
    <hr className="card1-divider" />
    <div className="card1-img-box">
      <img className="card1-img" src={imageUrl} alt={title} />
    </div>
    <div className="card1-title">{title}</div>
    <div className="card1-badge">{badge}</div>
  </div>
);

export default Card1;
