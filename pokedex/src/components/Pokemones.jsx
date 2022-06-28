import "./pokemones.css";
import Pokemon from "./CartaP";


// import "..assets/bulbasaur.png"
// import "..assets/charmander.png"
// import "..assets/squirtle.png"
// import "..assets/aron.png"
// import "..assets/butterfree.png"
// import "..assets/ditto.png"
// import "..assets/gastly.png"
// import "..assets/mew.png"
// import "..assets/pikachu.png"

function Pokemones() {
  
     {/* {pokemons.sort((pokemonesOrdenados,sa da ) => (
          <pokemonesOrdenados Header={pokemonesOrdenados} />
        ))} */}
  return (
    <main>
      <div className="container">
        {pokemons.map((pokemon) => (
          <Pokemon key={pokemon.name} pokemon={pokemon} />
        ))}

    
      </div>
    </main>
  );
}

export default Pokemones;
