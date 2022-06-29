import React from "react";
import "./infocontenedor.css";
import arrowleft from "../assets/arrow-left.svg";

function Infocontenedor({ info }) {
  if (info) {
    const imagen = require(`../assets/${info.name.toLowerCase()}.png`);
    return (
      <div className="div">
        <header style={{ backgroundColor: info.color }}>
          <nav>
            <div className="nav">
              <img src={arrowleft} />
              <h1>{info.name}</h1>
            </div>

            <p>{info.number}</p>
          </nav>
          <div>
            <img className="imageni" src={imagen} alt="" />
            <p>></p>
          </div>
        </header>

        <main>
          <div className="tipos">
            <span style={{ backgroundColor: info.color }} className="tipos">{info.type1}</span>
            <span style={{ backgroundColor: info.color }} className="tipos">{info.type2}</span>
          </div>

          <h3>About</h3>
        </main>
      </div>
    );
  }
  //
  return null;
}
export default Infocontenedor;
