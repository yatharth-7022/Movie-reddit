import { useState } from "react";
function MovieSearch({ query, setQuery }) {
  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default MovieSearch;
