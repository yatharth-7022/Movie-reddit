import WatchedMovie from "./WatchedMovie";
function WatchedList({ watched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie key={watched.imdbID} movie={movie} />
      ))}
    </ul>
  );
}

export default WatchedList;
