import { useState, useRef, useEffect } from "react";
function MovieSearch({ query, setQuery }) {
  const inputEl = useRef(null);
  useEffect(() => {
    // inputEl.current.focus();

    function callback(e) {
      if (document.activeElement === inputEl.current) return;
      if (e.code === "Enter") {
        inputEl.current.focus();
        setQuery("");
      }
    }
    document.addEventListener("keydown", callback);
    return () => document.addEventListener("keyDown", callback);
  }, [setQuery]);

  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref={inputEl}
      />
    </div>
  );
}

export default MovieSearch;
