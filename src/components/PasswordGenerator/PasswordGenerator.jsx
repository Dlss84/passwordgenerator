import React from "react";
import "./PasswordGenerator.css";
import copyIcon from "../assets/copy-icon.svg";
import Switch from "../Switch/Switch";

function PasswordGenerator() {
  return (
    <div className="container">
      <div className="switch">
        <Switch />
      </div>
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
      <div className="setting">
        <h3>Personaliza tu contraseña</h3>
        <div className="customize">
          <div className="checkboxes">
            <div className="left">
              <div className="checkbox-field">
                <input type="checkbox" name="lower" id="lower" />
                <label htmlFor="lower">Incluir Letras Minúsculas (a-z)</label>
              </div>
              <div className="checkbox-field">
                <input type="checkbox" name="upper" id="upper" />
                <label htmlFor="upper">Incluir Letras Mayúsculas (A-Z)</label>
              </div>
            </div>
            <div className="right">
              <div className="checkbox-field">
                <input type="checkbox" name="numbers" id="numbers" />
                <label htmlFor="numbers">Incluir Números (0-9)</label>
              </div>
              <div className="checkbox-field">
                <input type="checkbox" name="symbols" id="symbols" />
                <label htmlFor="symbols">Incluir Simbolos (&-#)</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="password-length">
        <h3>Longitud de Contraseña</h3>
        <div className="slider">
          <p className="rangeValue">10</p>
          <div className="range">
            <input type="range" min={10} max={40} />
          </div>
        </div>
      </div>
      <div className="buttons">
        <button type="button">Copiar Contraseña</button>
        <button type="button" >Generar Contraseña</button>
      </div>
    </div>
  );
}

export default PasswordGenerator;
