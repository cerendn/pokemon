function Main() {
  return;
  <main>
    <div className="pokemon-container">
      {pokemonList.map((pokemon, index) => (
        <PokemonCard key={index} pokemonName={pokemon.name} />
      ))}
    </div>
  </main>;
}
