import React from "react";
import "./infocontenedor.css";
import arrowleft from "../assets/arrow-left.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LinearProgress from "@mui/material/LinearProgress";
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
          <div className="img">
            <img className="imageni" src={imagen} alt="" />
            <p>
              <ArrowForwardIosIcon />
            </p>
          </div>
        </header>

        <main className="main">
          <div className="tipos">
            <span
              style={{ backgroundColor: info.type1color }}
              className="tipos"
            >
              {info.type1}
            </span>
            <span
              style={{ backgroundColor: info.type2color }}
              className="tipos"
            >
              {info.type2}
            </span>
          </div>

          <h3 style={{ color: info.color }}>About</h3>
          <div className="informacion">
            <div>
              img {info.weight} <br />
              Weight{" "}
            </div>
            <div>
              img {info.height} <br />
              Height{" "}
            </div>
            <div>
              img {info.moves} <br />
              Move{" "}
            </div>
          </div>
          <div className="descripcion">{info.description}</div>
          <div>
            <h3 style={{ color: info.color }}>Base Stats</h3>
            <div className="contiene">
              <div className="lalista">
                <ul className="lista" style={{ color: info.color }}>
                  <li>HP</li>
                  <li>ATK</li>
                  <li>DEF</li>
                  <li>SATK</li>
                  <li>SDEF</li>
                  <li>SPD</li>
                </ul>
                <div class="barra">
                  <ul className="lista" style={{ color: info.color }}>
                    <li>{info.hp}</li>
                    <li>{info.atk}</li>
                    <li>{info.def}</li>
                    <li>{info.satk}</li>
                    <li>{info.sdef}</li>
                    <li>{info.spd}</li>
                  </ul>
                </div>
                <div class="barra">
                  <ul className="lista" style={{ color: info.color }}>
                    <li>
                      <LinearProgress variant="determinate" value={info.hp} />
                    </li>
                    <li>
                      <LinearProgress variant="determinate" value={info.atk} />
                    </li>
                    <li>{info.def}</li>
                    <li>{info.satk}</li>
                    <li>{info.sdef}</li>
                    <li>{info.spd}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
  //
  return null;
}
export default Infocontenedor;
