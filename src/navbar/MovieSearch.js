import { useState } from "react";
function MovieSearch() {
  const [query, setQuery] = useState("");

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
