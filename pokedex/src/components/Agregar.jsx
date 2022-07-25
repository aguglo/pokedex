import "./agregar.css";

import React from "react";
import { Link } from "react-router-dom";
export default function Agregar() {
  return (
    <div className="agregar_contenedor">
      <h1>Crea tu propio pokemon</h1>
      <div className="creando-pokemon">
        <form action="">
          <div className="nombre-pokemon">
            <label htmlFor="name">Nombre </label>
            <input type="text" />
            <label htmlFor="name">Numero </label>
            <input type="text" />
          </div>
          <div className="peso-tamaño">
            <label htmlFor="height">Height</label>
            <input
              className="pesoTamaño"
              type="number"
              name=""
              id=""
              min="1"
              max="100"
            />
            <label htmlFor="weight">Weight</label>
            <input
              className="pesoTamaño"
              type="number"
              name=""
              id=""
              min="1"
              max="100"
            />
          </div>
          <h1>Stats del pokemon</h1>
          <div className="stats-pokemon">
            <div>
              <label htmlFor="HP">HP</label>
              <input
                className="statPokemon"
                type="number"
                name=""
                id=""
                min="1"
                max="100"
              />
            </div>
            <div>
              <label htmlFor="ATK">ATK</label>
              <input
                className="statPokemon"
                type="number"
                name=""
                id=""
                min="1"
                max="100"
              />
            </div>
            <div>
              <label htmlFor="DEF">DEF</label>
              <input
                className="statPokemon"
                type="number"
                name=""
                id=""
                min="1"
                max="100"
              />
            </div>
            <div>
              <label htmlFor="SPE">SPE</label>
              <input
                className="statPokemon"
                type="number"
                name=""
                id=""
                min="1"
                max="100"
              />
            </div>
            <div>
              <label htmlFor="SATK">SATK</label>
              <input
                className="statPokemon"
                type="number"
                name=""
                id=""
                min="1"
                max="100"
              />
            </div>
            <div>
              <label htmlFor="statPokemon">SDEF</label>
              <input
                className="statPokemon"
                type="number"
                name=""
                id=""
                min="1"
                max="100"
              />
            </div>
          </div>
          <div className="movimiento-pokemon">
            <label htmlFor="moves">Nombre del movimiento</label>
            <input type="text" />
            <label htmlFor="types">Nombre del Tipo</label>
            <input type="text" />
          </div>
          <div className="colores-pokemon">
            <label htmlFor="color-pokemon">Color primario</label>
            <input type="text" />
            <label htmlFor="color2-pokemon">Color secundario</label>
            <input type="text" />
          </div>
          <div className="descripcion-pokemon">
            <label htmlFor="descripcion">Descripcion</label>
            <textarea name="" id="" cols="80" rows="7"></textarea>
          </div>
          <Link to="/">
            <button className="crear">Crear</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
