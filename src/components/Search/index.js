const Search = ({ setSearch }) => {
  return (
    <div className="search-coin">
      <form>
        <input
          type="text"
          placeholder="Crypto Coins Search . . ."
          className="search-input"
          spellCheck="false"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
