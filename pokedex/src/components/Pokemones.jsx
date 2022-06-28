import "./pokemones.css";
import Pokemon from "./CartaP";
import constantepokemons from "../constantes/listapokemones";
import React, { useState } from "react";
import Header from "./Header";

function Pokemones() {
  const [pokemons, setpokemons] = useState(constantepokemons);
  // const alfabeticamente =(nuevopokemons)=>{
  //   return nuevopokemons.sort((a,z)=>
  //     a.name-z.name)
  //   }
  // }

  return (
    <main>
      {
        <div className="container">
          {pokemons.map((pokemon) => (
            <Pokemon key={pokemon.name} pokemon={pokemon} />
          ))}
          {/* {
          pokemons.sort((pokemonesOrdenados)=>(
          <Header key={pokemons.name}pokemonesOrdenados={pokemonesOrdenados}/>

          )
          
          
          
          )
        } */}
        </div>
      }
    </main>
  );
}

export default Pokemones;
