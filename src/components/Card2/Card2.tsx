// components/Card2/Card2.tsx
import React from "react";
import type { Card2Props } from "../../types";

const Card2: React.FC<Card2Props> = ({ title, badge, subtitle }) => (
  <div className="card">
    <div className="card2-badge">{badge}</div>
    <div style={{ margin: "0 18px" }}>
      <div className="card2-title">{title}</div>
      <div className="card2-desc">{subtitle}</div>
    </div>
    <hr className="card2-divider" />
    <div className="card2-bottom">
      <button className="card2-fav-btn">Favorite</button>
    </div>
  </div>
);

export default Card2;
