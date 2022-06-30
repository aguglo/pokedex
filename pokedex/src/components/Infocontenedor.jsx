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
          {info.types.map((type) => (
            <span className={`tipos ${type.toLowerCase()}`}>{type}</span>
          ))}
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
            <ul className="lista" style={{ color: info.color }}>
              {/*   
              Object.entries convierte un objeto en un array de la siguiente manera:
              suponiendo la variable objetito contetiendo el siguiente objeto: {a:1,b:2} 
              Object.entries(objetito) retorna [["a",1],["b",2]] 
              */}
              {Object.entries(info.stats).map(
                ([nombreDeLaPropiedad, valorDeLaPropiedad]) => (
                  <li className="lalista">
                    <label>{nombreDeLaPropiedad.toUpperCase()}</label>
                    <div style={{ width: "100%", display: "flex" }}>
                      <div
                        style={{
                          height: "100%",
                          backgroundColor: info.color,
                          width: `${valorDeLaPropiedad / 2}%`,
                        }}
                      ></div>
                      <div style={{ flex: "1" }}></div>
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Infocontenedor;
