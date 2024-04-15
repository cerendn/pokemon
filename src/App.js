import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import PokemonCard from "./PokemonCard";
import Footer from "./footer";

function PokemonApp() {
  //pokemonList state
  const [pokemonList, setPokemonList] = useState([]);

  //search state
  const [searchPokemon, setSearchPokemon] = useState("");
  const [searchType, setSearchType] = useState("");

  //useEffect hook kullanarak API'den fetch ile veri çekme
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
  // Input değişikliklerine göre filtreleme işlemini gerçekleştiren fonksiyon
  const filteredPokemonList = pokemonList.filter((pokemon) => {
    // Pokemon adı araması
    const nameMatch = pokemon.name
      .toLowerCase()
      .includes(searchPokemon.toLowerCase());
    return nameMatch;
  });

  return (
    <div className="container">
      <Header />
      {/* search buton */}
      <div className="buton">
        <input
          type="text"
          placeholder="Find Pokémon..."
          onChange={(e) => setSearchPokemon(e.target.value)}
        />
        <input
          type="text"
          placeholder="Find Type..."
          onChange={(e) => setSearchType(e.target.value)}
        />
      </div>
      <div className="pokemon">
        <div className="pokemon-container">
          {/* filtrelenmiş pokemonCardları gösterme */}
          {filteredPokemonList.map((pokemon, index) => (
            <PokemonCard key={index} pokemonName={pokemon.name} />
          ))}
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default PokemonApp;
