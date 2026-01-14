import { useNavigate } from "react-router-dom";

// Displays a single movie with star ratings and clickable navigation
function MovieCard({ movie }) {
  const navigate = useNavigate();

  // Function to display stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < rating ? "★" : "☆");
    }
    return stars.join(" ");
  };

  return (
    <div
      className="movie-card"
      onClick={() => navigate(`/movie/${encodeURIComponent(movie.title)}`)}
      style={{ cursor: "pointer" }} // Makes it obvious it's clickable
    >
      <img src={movie.posterURL} alt={movie.title} className="poster" />
      <h3>{movie.title}</h3>
      <p className="rating">{renderStars(movie.rating)}</p>
    </div>
  );
}

export default MovieCard;
