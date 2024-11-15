import { useState } from "react";
import NavBar from "./navbar/NavBar";
import tempMovieData from "./Data/TempMovieData";
import tempWatchedData from "./Data/TempWatchedData";
import ResultCount from "./navbar/ResultCount";
import Logo from "./navbar/logo";
import MovieSearch from "./navbar/MovieSearch";
import Listing from "./MovieListing/Listing";
import Summary from "./MovieReview/summary";
import WatchedList from "./MovieReview/WatchedList";
import Box from "./box";
export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <NavBar>
        <Logo />
        <MovieSearch />
        <ResultCount movie={movies} />
      </NavBar>
      <main className="main">
        <Box>
          <Listing movies={movies} />
        </Box>
        <Box>
          <Summary watched={watched} />
          <WatchedList watched={watched} />
        </Box>
      </main>
    </>
  );
}
