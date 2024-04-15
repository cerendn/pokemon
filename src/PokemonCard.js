import React, { useState, useEffect } from "react";

function PokemonCard({ pokemonName }) {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchPokemonData();
  }, [pokemonName]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pokemon-card">
      <img
        src={pokemonData.sprites.other.showdown.front_default}
        alt={pokemonData.name}
      />
      <h3>{`${pokemonData.id} - ${pokemonData.name}`}</h3>
      <div className="pokemon-types">
        <h4>Types:</h4>
        {pokemonData.types.map((type, index) => (
          <ul key={index} className="type-name">
            {type.type.name}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;
