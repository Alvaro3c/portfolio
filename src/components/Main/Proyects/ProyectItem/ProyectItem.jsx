// ProyectItem.js
import React, { useState } from "react";

const ProyectItem = ({ title, description, code_url, img_src, deploy_url }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return <>
    <h3>{title}</h3>
    <div
      className={`proyect-item ${hovered ? "hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundImage: `url(${img_src})` }}
    >

      <div className={`overlay ${hovered ? "show" : ""}`}>
        <p>{description}</p>
        <div className="icon-container">
          <a href={code_url}>
            <img src="./button-icons/github-icon.png" alt="" />
          </a>
          {deploy_url ? <a href={deploy_url}>
            <img src="./button-icons/webicon.png" alt="" />
          </a> : null}
        </div>

      </div>
    </div>
  </>
};

export default ProyectItem;
