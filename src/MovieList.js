import MovieCard from "./MovieCard";

// Displays a list of movies
function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.length === 0 ? (
        <p>No movies match your filter.</p>
      ) : (
        movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
      )}
    </div>
  );
}

export default MovieList;

