import "./App.css";

import Pokemones from "./components/Pokemones";

import Contenedor from "./components/Infocontenedor.jsx";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Infocontenedor from "./components/Infocontenedor.jsx";
import Probando from "./components/probando";
import { useState } from "react";

function App() {
  const [pokemon, setpokemon] = useState();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pokemones setpokemon={setpokemon} />} />
          <Route
            path="contenedor"
            element={<Infocontenedor pokemon={pokemon} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// usestate

// funcion setear estado
