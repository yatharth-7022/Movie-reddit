import { useEffect, useState } from "react";
import StarRating from "../StarRating";
import Loader from "../Loader";
import { FaLongArrowAltLeft } from "react-icons/fa";
const KEY = "785d870c";
function SelectedMovieView({
  selectedMovie,
  handleCloseMovie,
  onAddWatched,
  watched,
}) {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");
  function handleAdd() {
    const updatedMovie = { ...movie, userRating };
    onAddWatched(updatedMovie);
    // console.log(updatedMovie);
    handleCloseMovie();
  }
  // console.log(watched);
  const isWatched = watched.map((mov) => mov.imdbID).includes(selectedMovie);
  const watchedUserRating = watched.find(
    (mov) => mov.imdbID === selectedMovie
  )?.userRating;
  useEffect(() => {
    if (!movie.Title) return;
    document.title = `Movie | ${movie.Title}`;
    return function () {
      document.title = "Movie Zilla";
    };
  }, [movie.Title]);
  useEffect(() => {
    const movieData = async () => {
      try {
        setIsLoading(true);
        const fetchData = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedMovie}`
        );
        if (!fetchData.ok) {
          throw new Error("Something went wrong loading the movie details");
        }
        const data = await fetchData.json();
        if (data.Response === "False") {
          throw new Error("Movie data not available");
        }
        setMovie(data);
        // console.log(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
      }
    };
    movieData();
  }, [selectedMovie]);
  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <header>
            <button className="btn-back" onClick={handleCloseMovie}>
              <FaLongArrowAltLeft />
            </button>

            <img src={movie.Poster} alt={`Poster of ${movie.Title}`} />
            <div className="details-overview">
              <h2>{movie.Title}</h2>
              <p>
                {movie.Released} &bull; {movie.Runtime}
              </p>
              <p>{movie.Genre}</p>
              <p>
                <span>⭐</span>
                {movie.imdbRating} IMDB rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You already rated this movie {watchedUserRating}{" "}
                  <span>⭐</span>
                </p>
              )}
            </div>
            <p>
              <em>{movie.Plot}</em>
            </p>
            <p>Starring {movie.Actors}</p>
            <p>Directed by {movie.Director}</p>
          </section>
        </>
      )}
    </div>
  );
}

export default SelectedMovieView;
