import "./pokemones.css";
import Pokemon from "./CartaP";
import constantepokemons from "../constantes/listapokemones";
import React, { useState } from "react";
import Infocontenedor from "./Infocontenedor";
import { Link } from "react-router-dom";

import pokeball from "../assets/Pokeball.png";
import arrow from "../assets/Arrow.svg";

function Pokemones() {
  const [pokemons, setpokemons] = useState(constantepokemons);

  const filtrado = (evento) => {
    const nuevoFiltrado = [...constantepokemons].filter((element) =>
      element.name.toLowerCase().includes(evento.target.value.toLowerCase())
    );
    setpokemons(nuevoFiltrado);
  };

  const alfabeticamente = () => {
    const listaNueva = [...pokemons].sort((a, z) =>
      a.name.localeCompare(z.name)
    );
    setpokemons(listaNueva);
  };
  const numericamente = () => {
    const listanumerica = [...pokemons].sort((a, z) =>
      a.number.localeCompare(z.number)
    );
    setpokemons(listanumerica);
  };
  const funcionDeOrdenado =
    pokemons[0].number === "#001" ? alfabeticamente : numericamente;
  return (
    <>
      <header className="headerr">
        <div className="header">
          <div className="title">
            <img src={pokeball} alt="logo-pokeball" className="pokeball" />
            <h1>Pokédex</h1>
          </div>

          <div className="title2">
            <span className="az">
              {" "}
              <span>A</span>
              <span>Z</span>
            </span>
            <img
              onClick={funcionDeOrdenado}
              src={arrow}
              alt="flecha"
              className="flecha"
            />
          </div>
        </div>
        <div className="delInput">
          <input
            onChange={filtrado}
            type="text"
            name=""
            id="jeje"
            placeholder="Buscar"
            
          />
        </div>
      </header>
      <main>
        {pokemons ? (
          <div className="container">
            {pokemons.map((pokemon) => (
              <Pokemon key={pokemon.name} pokemon={pokemon} />
            ))}
          </div>
        ) : null}
      </main>
    </>
  );
}

export default Pokemones;
