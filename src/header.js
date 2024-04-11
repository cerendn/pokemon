function Header() {
  return (
    <header>
      <div className="logo">
        <img src="/pokemon-logo.svg" alt="" style={{ width: "40px" }} />
        <h2>Pokémon App</h2>
      </div>

      <div className="option">
        <a href="#">Pokémon Api</a>
        <a href="#">Pokémon Oficial</a>
        <a href="#">About Author</a>
      </div>
    </header>
  );
}
export default Header;
