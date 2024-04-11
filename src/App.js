import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import PokemonCard from "./PokemonCard"; // PokemonCard bileşenini import et
import Footer from "./footer";

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
          "https://pokeapi.co/api/v2/pokemon?limit=201"
        );
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error("Veriler alınırken hata oluştu:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <Header />
      {/* search buton */}
      <div className="buton">
        <input
          type="text"
          placeholder="Find Pokémon..."
          value={searchPokemon}
        />
        <input type="text" placeholder="Find Type..." value={searchType} />
      </div>
      <div className="pokemon">
        <div className="pokemon-container">
          {/* map ile döngüye alıp Pokemoncard oluşturma */}
          {pokemonList.map((pokemon, index) => (
            <PokemonCard key={index} pokemonName={pokemon.name} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PokemonApp;
