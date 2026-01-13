// Displays a single movie with star ratings
function MovieCard({ movie }) {
  // Function to display stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push("★"); // filled star
      } else {
        stars.push("☆"); // empty star
      }
    }
    return stars.join(" ");
  };

  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} className="poster" />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p className="rating">{renderStars(movie.rating)}</p>
    </div>
  );
}

export default MovieCard;


