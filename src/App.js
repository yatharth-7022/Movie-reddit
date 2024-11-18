import { useState, useEffect } from "react";
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
import Loader from "./Loader";
import ErrorMessage from "./ERRORmessage";
import SelectedMovieView from "./MovieReview/SelectedMovieView";
const KEY = "785d870c";
export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );
        if (!response.ok) {
          throw new Error("Something went wrong while fetching the movies");
        }

        const result = await response.json();
        if (result.Response === "False") {
          throw new Error("Movie Not found");
        }
        // console.log(result.Search);
        setMovies(result.Search);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
        setError("");
      }
    };
    if (!query.length < 3) {
      setMovies([]);
      setError("");
    }
    fetchMovie();
  }, [query]);
  function handleSelectionOfMovie(id) {
    setSelectedMovie(id);
    console.log(selectedMovie);
  }
  function handleCloseMovie() {
    setSelectedMovie(null);
  }
  function handleWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }
  function handleDeleteWatched(id) {
    setWatched(watched.filter((mov) => mov.imdbID !== id));
  }
  return (
    <>
      <NavBar>
        <Logo />
        <MovieSearch query={query} setQuery={setQuery} />
        <ResultCount movie={movies} />
      </NavBar>
      <main className="main">
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <Listing movies={movies} onSelectMovie={handleSelectionOfMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedMovie ? (
            <SelectedMovieView
              selectedMovie={selectedMovie}
              handleCloseMovie={handleCloseMovie}
              onAddWatched={handleWatched}
              watched={watched}
            />
          ) : (
            <>
              <Summary watched={watched} />
              <WatchedList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </main>
    </>
  );
}
