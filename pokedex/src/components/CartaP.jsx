import "./CartaP.css";
function Pokemon({ pokemon, setpokemon }) {
  const imagen = require(`../assets/${pokemon.name.toLowerCase()}.png`);
  const click = (clic) => {
    console.log("hola");
  };
  return (
    <div className="container">
      <div style={{ backgroundColor: pokemon.color }} className="row">
        <span style={{ color: pokemon.color }} className="number">
          {pokemon.number}
        </span>
        <img
          className="imagen"
          onClick={setpokemon(pokemon)}
          src={imagen}
          alt=""
        />
        <h1 className="nombre">{pokemon.name}</h1>
      </div>
    </div>
  );
}
export default Pokemon;
