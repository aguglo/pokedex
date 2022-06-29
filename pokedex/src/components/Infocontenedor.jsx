import React from "react";
import "./infocontenedor.css";
import arrowleft from "../assets/arrow-left.svg";

function Infocontenedor({ info }) {
  if (info) {
    const imagen = require(`../assets/${info.name.toLowerCase()}.png`);
    return (
      <div>
        <header>

        <nav>

          <div className="nav">
            <img src={arrowleft} />
          <h1>{info.name}</h1>          
          </div>

          <p>{info.number}</p>
          
        </nav>

        <img src={imagen} alt="" />
        <p>></p>

        </header>

        

        <main>

        <div>
            <span>{info.type1}</span>            
            <span>{info.type2}</span>
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
