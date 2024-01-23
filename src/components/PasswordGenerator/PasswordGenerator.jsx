import React from "react";
import "./PasswordGenerator.css";
import copyIcon from "../assets/copy-icon.svg";

function PasswordGenerator() {
  return (
    <div className="container">
      <div className="language">Idiomas</div>
      <h2 className="title">Generador de Contraseña Segura</h2>
      <div className="password-wrapper">
        <div className="password-area">
          <div className="password">
            <input
              type="text"
              placeholder="Haga Click copiar la Contraseña"
              disabled
            />
            <img src={copyIcon} alt="copyicon" className="copyIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
