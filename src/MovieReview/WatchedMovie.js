function WatchedMovie({ movie, onDeleteWatched }) {
  // movie.Runtime = Number(movie.Runtime.split(" ").at(0));
  return (
    <li key={movie.imdbID}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{Number(movie.imdbRating)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{Number(movie.Runtime.split(" ").at(0))} min</span>
        </p>
        <button
          className="btn-delete"
          onClick={() => onDeleteWatched(movie.imdbID)}
        >
          ---
        </button>
      </div>
    </li>
  );
}

export default WatchedMovie;
