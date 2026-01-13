import { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";
import AddMovie from "./AddMovie";
import "./App.css";

function App() {
  // State to hold all movies
  const [movies, setMovies] = useState([
    {
      title: "Avengers: Endgame",
      description:
        "The Avengers assemble once more to undo the devastation wrought by Thanos and restore balance to the universe.",
      posterURL:
        "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
      rating: 5,
    },
    {
      title: "Titanic",
      description: "A tragic love story on the ill-fated ship.",
      posterURL: "https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg",
      rating: 4,
    },
    {
      title: "The Dark Knight",
      description: "Batman battles the Joker in Gotham City.",
      posterURL: "https://m.media-amazon.com/images/I/51K8ouYrHeL._AC_.jpg",
      rating: 5,
    },
    {
      title: "Joker",
      description:
        "In Gotham City, a failed comedian descends into madness and transforms into the criminal mastermind known as the Joker.",
      posterURL:
        "https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29.png",
      rating: 4,
    },
  ]);

  // State to store filter inputs
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  // Function to add a new movie
  const addMovie = (movie) => {
    setMovies([...movies, movie]); // Add new movie to existing movies
  };

  // Filter movies based on title and rating
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  return (
    <div className="App">
      <h1>My Movie App 🎬</h1>

      {/* Filter component */}
      <Filter
        titleFilter={titleFilter}
        setTitleFilter={setTitleFilter}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
      />

      {/* Add movie form */}
      <AddMovie addMovie={addMovie} />

      {/* Movie list */}
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
