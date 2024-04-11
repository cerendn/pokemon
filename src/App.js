import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import PokemonCard from "./PokemonCard"; // PokemonCard bileşenini import et

function PokemonApp() {
  //pokemonList state
  const [pokemonList, setPokemonList] = useState([]);
  //searchPokemon state
  const [searchPokemon, setSearchPokemon] = useState("");
  //searchType state
  const [searchType, setSearchType] = useState("");

  //useEffect kullanarak API'den fetch ile veri çekme
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=150"
        );
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error("Veriler alınırken hata oluştu:", error);
      }
    };
    fetchData();
  }, []);
  // Pokemon isimleri için filtreleme function
  const filterPokemonByName = (name) => {
    setSearchPokemon(name.toLowerCase());
  };
  // Types filtreleme function
  const filterPokemonByType = (type) => {
    setSearchType(type.toLowerCase());
  };

  return (
    <div className="container">
      <Header />
      {/* search buton */}
      <div className="buton">
        <input
          type="text"
          placeholder="Find Pokémon..."
          value={searchPokemon}
          //isim için filter func çağır
          onChange={(e) => filterPokemonByName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Find Type..."
          value={searchType}
          //types filter function çağır
          onChange={(e) => filterPokemonByType(e.target.value)}
        />
      </div>
      <div className="pokemon-container">
        {pokemonList.map((pokemon, index) => (
          <PokemonCard key={index} pokemonName={pokemon.name} />
        ))}
      </div>
    </div>
  );
}

export default PokemonApp;
