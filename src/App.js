import { useState } from "react";
import NavBar from "./NavBar";
import MovieList from "./MovieList";
import MovieReview from "./MovieReview";
import tempMovieData from "./TempMovieData";
import tempWatchedData from "./TempWatchedData";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <NavBar movie={movies} />
      <main className="main">
        <MovieList movies={movies} />
        <MovieReview watched={watched} />
      </main>
    </>
  );
}
