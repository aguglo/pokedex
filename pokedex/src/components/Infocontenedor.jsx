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
import { fontWeight } from "@mui/system";

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
              <img className="flechita" src={arrowleft} />
            </Link>
            <h1>{info.name}</h1>
          </div>

          <p className="number2">{info.number}</p>
        </nav>
        <div className="img">
          <img className="imageni" src={imagen} alt="" />
          {anteriorPokemon ? (
            <p >
              <Link to={`/contenedor/${anteriorPokemon.name}`}>
                <ArrowBackIosIcon className="anterior" />
              </Link>
            </p>
          ) : null}
          {siguientePokemon ? (
            <>
              <p></p>
              <p>
                <Link to={`/contenedor/${siguientePokemon.name}`}>
                  <ArrowForwardIosIcon className="siguiente" />
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

        <h3 className= "about" style={{ color: info.color}}>About</h3>
        <div className="informacion">
          <div>
            <BalanceIcon /> {info.weight} <br />
            Weight
          </div>
          <div className="peso">
            <StraightenIcon /> {info.height} <br />
            Height
          </div>
          <div className="moves">
            {info.moves.map((move) => (
              <p className="movimientos">{move}</p>             
            )) }
            Move
          </div>
        </div>
        <br />
        <div className="descripcion">{info.description}</div>
        <div>
          <h3 className="baseStats" style={{ color: info.color }}>Base Stats</h3>
          <div className="contiene">
            <ul className="lista" style={{ color: info.color }}>
             
              {Object.entries(info.stats).map(
                ([nombreDeLaPropiedad, valorDeLaPropiedad]) => (
                  <li className="lalista">
                    <label className="nombres">{nombreDeLaPropiedad.toUpperCase()}</label>
                    <label className="numeros">{valorDeLaPropiedad}</label>
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
