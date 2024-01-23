import React from "react";
import "./Switch.css";


import peruIcon from "../assets/king.svg";
import kingIcon from "../assets/peru.svg";

const Switch = () => {
  return (
    <div className="btn">
      <img src={kingIcon} alt="kingicon" className="kingIcon" />
      <input type="checkbox" className="check" id="btn-switch" />
      <label for="btn-switch" className="lbl-switch"></label>
      <img src={peruIcon} alt="peruicon" className="peruIcon" />
    </div>
  );
};

export default Switch;
