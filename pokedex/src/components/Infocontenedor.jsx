import React from "react";
import "./infocontenedor.css";

function Infocontenedor({ info }) {
  if (info) {
    const imagen = require(`../assets/${info.name.toLowerCase()}.png`);
    return (
      <div>
        <nav>
          <h1>eu confio {info.name}</h1>
          <img src={imagen} alt="" />
        </nav>
      </div>
    );
  }
  //
  return null;
}
export default Infocontenedor;
