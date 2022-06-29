import "./pokemones.css";
import Pokemon from "./CartaP";
import constantepokemons from "../constantes/listapokemones";
import React, { useState } from "react";
import Infocontenedor from "./Infocontenedor";

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

  const alfabeticamente = (nuevopokemons) => {
    const listaNueva = [...pokemons].sort((a, z) =>
      a.name.localeCompare(z.name)
    );
    setpokemons(listaNueva);
  };
  const numericamente = (nuevopokemonsN) => {
    const listanumerica = [...pokemons].sort((a, z) =>
      a.number.localeCompare(z.number)
    );
    setpokemons(listanumerica);
  };
  const funcionDeOrdenado =
    pokemons[0].number === "#001" ? alfabeticamente : numericamente;
  return (
    <>
      <header>
        <div className="header">
          <div className="title">
            <img src={pokeball} alt="logo-pokeball" className="pokeball" />
            <h1>Pokédex</h1>
          </div>

          <div className="title2">
            <span>#</span>
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
            id=""
            placeholder="Buscar"
          />
        </div>
      </header>
      <main>
        {
          <div className="container">
            {pokemons.map((pokemon) => (
              <Pokemon key={pokemon.name} pokemon={pokemon} />
            ))}
          </div>
        }
      </main>

      <div className="contenedor">
        {pokemons.map((info) => (
          <Infocontenedor key={info.number} info={info} />
        ))}
      </div>
    </>
  );
}

export default Pokemones;
