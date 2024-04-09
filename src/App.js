import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Header";

function PokemonApp() {
  //pokemonList state
  const [pokemonList, setPokemonList] = useState([]);

  return (
    <div className="container">
      <Header />
      <div className="buton">
        <input type="text" placeholder="Find Pokémon..." />
        <input type="text" placeholder="Find Type..." />
      </div>
    </div>
  );
}

export default PokemonApp;
