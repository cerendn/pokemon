import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./header";

function PokemonApp() {
  return (
    <div>
      <Header />
      <div className="buton">
        <input type="text" placeholder="Find Pokémon..." />
        <input type="text" placeholder="Find Type..." />
      </div>
    </div>
  );
}

export default PokemonApp;
