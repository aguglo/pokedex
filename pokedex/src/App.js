import "./App.css";
import Header from "./components/Header";
import Pokemones from "./components/Pokemones";
import pokemons from "../src/constantes/listapokemones"

function App() {
  
  
  return (
    <div className="App">
      <Header />
      <Pokemones />
    </div>
  );
}



export default App;
