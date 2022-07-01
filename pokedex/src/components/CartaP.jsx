import { Link } from "react-router-dom";
import "./CartaP.css";
function Pokemon({ pokemon }) {
  const imagen = require(`../assets/${pokemon.name.toLowerCase()}.png`);

  return (
    <Link to={`/contenedor/${pokemon.name}`}>
      <div className="container">
        <div
          style={{
            backgroundColor: pokemon.color,
          }}
          className="row"
        >
          <span style={{ color: pokemon.color }} className="number">
            {pokemon.number}
          </span>
          <img className="imagen" src={imagen} alt="" />
          <h1 className="nombre">{pokemon.name}</h1>
        </div>
      </div>
    </Link>
  );
}
export default Pokemon;
