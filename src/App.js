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
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);

  //useEffect hook kullanarak API'den fetch ile veri çekme
  const pokemonApi = "https://pokeapi.co/api/v2/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${pokemonApi}pokemon?limit=201`);
        const data = await response.json();
        const promises = data.results.map(async (pokemon) => {
          const pokemonResponse = await fetch(pokemon.url); // Değiştirildi
          const pokemonData = await pokemonResponse.json(); // Değiştirildi
          return {
            id: pokemonData.id,
            name: pokemonData.name,
            image: pokemonData.sprites.other["official-artwork"].front_default,
            types: pokemonData.types.map((type) => type.type.name),
          };
        });
        const pokemonDetail = await Promise.all(promises);
        setPokemonList(pokemonDetail);
        setFilteredPokemonList(pokemonDetail); // Değiştirildi
      } catch (error) {
        console.error("Veriler alınırken hata oluştu:", error);
      }
    };
    fetchData();
  }, []);

  // Input değişikliklerine göre filtreleme işlemini gerçekleştiren fonksiyon
  useEffect(() => {
    filterPokemon();
  }, [searchPokemon, searchType, pokemonList]); // pokemonList bağımlılığı eklendi

  const filterPokemon = () => {
    let filtered = pokemonList.filter((pokemon) => {
      // Pokemon adı araması
      const nameMatch = pokemon.name
        .toLowerCase()
        .includes(searchPokemon.toLowerCase());
      // Pokemon tipi araması
      const typeMatch = searchType
        ? pokemon.types.includes(searchType.toLowerCase())
        : true;
      return nameMatch && typeMatch;
    });

    setFilteredPokemonList(filtered);
  };

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
            <PokemonCard
              key={index}
              pokemonName={pokemon.name}
              pokemonType={pokemon.types}
            />
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
