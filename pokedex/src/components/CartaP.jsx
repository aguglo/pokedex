import "./CartaP.css";
function Pokemon({ pokemon }) {
  const imagen = require(`../assets/${pokemon.name.toLowerCase()}.png`);
  return (
    <div className="container">
      <div className="row">
        <img src={imagen} alt="" />
        <h1>{pokemon.name}</h1>
      </div>
    </div>
  );
}
export default Pokemon;
