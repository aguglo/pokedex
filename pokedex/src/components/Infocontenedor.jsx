import React from "react";
import "./infocontenedor.css";
import arrowleft from "../assets/arrow-left.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LinearProgress from "@mui/material/LinearProgress";
import StraightenIcon from "@mui/icons-material/Straighten";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from "react-router-dom";
import constantepokemons from "../constantes/listapokemones";
import { Link } from "react-router-dom";

function Infocontenedor() {
  const { nombrePokemon } = useParams();
  console.log(constantepokemons);
  const info = constantepokemons.find(
    (element) => element.name === nombrePokemon
  );

  const imagen = require(`../assets/${info.name.toLowerCase()}.png`);
  return (
    <div style={{ backgroundColor: info.type1color }} className="div">
      <header style={{ backgroundColor: info.color }}>
        <nav>
          <div className="nav">
            <Link to="/">
              <img src={arrowleft} />
            </Link>
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
          <span style={{ backgroundColor: info.type1color }} className="tipos">
            {info.type1}
          </span>
          <span style={{ backgroundColor: info.type2color }} className="tipos">
            {info.type2}
          </span>
        </div>

        <h3 style={{ color: info.color }}>About</h3>
        <div className="informacion">
          <div>
            <BalanceIcon /> {info.weight} <br />
            Weight
          </div>
          <div>
            <StraightenIcon /> {info.height} <br />
            Height
          </div>
          <div>
            {info.move1} <br />
            {info.move2} <br />
            Move
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
                <ul className="lista2" style={{ color: info.color }}>
                  <li>
                    <LinearProgress
                      className="span"
                      variant="determinate"
                      value={info.hp}
                      style={{ backgroundColor: info.color }}
                    />
                  </li>
                  <li>
                    <LinearProgress
                      variant="determinate"
                      style={{ backgroundColor: info.color }}
                      value={info.atk}
                    />
                  </li>
                  <li>
                    <LinearProgress
                      variant="determinate"
                      style={{ backgroundColor: info.color }}
                      value={info.def}
                    />
                  </li>
                  <li>
                    <LinearProgress
                      variant="determinate"
                      style={{ backgroundColor: info.color }}
                      value={info.satk}
                    />
                  </li>
                  <li>
                    <LinearProgress
                      variant="determinate"
                      style={{ backgroundColor: info.color }}
                      value={info.sdef}
                    />
                  </li>
                  <li>
                    <LinearProgress
                      variant="determinate"
                      className="holas"
                      value={info.spd}
                      style={{ backgroundColor: info.color }}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Infocontenedor;
