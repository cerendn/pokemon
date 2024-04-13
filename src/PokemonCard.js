import React, { useState, useEffect } from "react";
//pokeomon adına göre API'den verileri alıp gösterme
const PokemonCard = ({ pokemonName }) => {
  //verileri tutmak için state oluşturma
  const [pokemonData, setPokemonData] = useState(null);

  //useEffect hook ile her render edildiginde yada prop değiştiğinde çalıştırma
  useEffect(
    () => {
      //asyn func ile API'den fetch ile veri çekme
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
          );
          const data = await response.json();
          setPokemonData(data);
        } catch (error) {
          console.error("Pokemon verisi alınırken hata oluştu:", error);
        }
      };

      fetchData();
    },
    //sadece prop değişirse çalıştır
    [pokemonName]
  );
  //pokemonData null ise kartı göstermez
  if (!pokemonData) return null;

  return (
    //PokemonCardı gösterme
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
};

export default PokemonCard;
