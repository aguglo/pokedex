import "./App.css";


import Pokemones from "./components/Pokemones";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Infocontenedor from "./components/Infocontenedor.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pokemones />} />
          <Route
            path="contenedor/:nombrePokemon"
            element={<Infocontenedor />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// usestate

// funcion setear estado
