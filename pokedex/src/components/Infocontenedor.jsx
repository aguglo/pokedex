import React from "react";
import "./infocontenedor.css";
import arrowleft from "../assets/arrow-left.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import StraightenIcon from "@mui/icons-material/Straighten";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from "react-router-dom";
import constantepokemons from "../constantes/listapokemones";
import { Link } from "react-router-dom";
import pokeball from "../assets/Pokeball.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function Infocontenedor() {
  const { nombrePokemon } = useParams();

  const info = constantepokemons.find(
    (element) => element.name === nombrePokemon
  );
  const nextpokemon = constantepokemons.findIndex(
    (element) => element.name === nombrePokemon
  );

  const siguientePokemon =
    nextpokemon !== 8 ? constantepokemons[nextpokemon + 1] : null;

  const anteriorPokemon =
    nextpokemon !== 0 ? constantepokemons[nextpokemon - 1] : null;

  const imagen = require(`../assets/${info.name.toLowerCase()}.png`);
  return (
    <div style={{ backgroundColor: info.type1color }} className="div">
      <header style={{ backgroundColor: info.color }}>
        <img className="pokebola" src={pokeball} />
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
          {anteriorPokemon ? (
            <p>
              <Link to={`/contenedor/${anteriorPokemon.name}`}>
                <ArrowBackIosIcon />
              </Link>
            </p>
          ) : null}
          {siguientePokemon ? (
            <>
              <p></p>
              <p>
                <Link to={`/contenedor/${siguientePokemon.name}`}>
                  <ArrowForwardIosIcon />
                </Link>
              </p>
            </>
          ) : null}
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
            {info.moves} <br />
            Move
          </div>
        </div>
        <br />
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
                    <label>{valorDeLaPropiedad}</label>
                    <div className="gus">
                      <div
                        className="agustina"
                        style={{
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
