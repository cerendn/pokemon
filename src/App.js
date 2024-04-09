import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";

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
      <Main />
    </div>
  );
}

export default PokemonApp;
