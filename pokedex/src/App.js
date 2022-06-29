import "./App.css";

import Pokemones from "./components/Pokemones";
import pokemons from "../src/constantes/listapokemones";
import Contenedor from "./components/Infocontenedor.jsx";

function App() {
  return (
    <div className="App">
      <Pokemones />
      <Contenedor />
    </div>
  );
}

export default App;
