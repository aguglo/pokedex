import "./pokemones.css";
import Pokemon from "./CartaP";
import constantepokemons from "../constantes/listapokemones";
import React, {useState} from "react";


function Pokemones() {

    const [pokemons, setpokemons] = useState(constantepokemons);
    
  
  return (
    <main>
      {<div className="container">
        {pokemons.map((pokemon) => (
          <Pokemon key={pokemon.name} pokemon={pokemon} />
        ))}

       
        {/* {pokemons.map((pokemon) => (
          <Pokemon key={pokemon.atk} pokemon={pokemon} />
        ))} */}
    
      </div> }
    </main>
  );
}

export default Pokemones;
