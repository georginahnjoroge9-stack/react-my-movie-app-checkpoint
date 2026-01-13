import { useState } from "react";

// Form to add a new movie
function AddMovie({ addMovie }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    addMovie({ title, description, posterURL, rating: Number(rating) }); // Add movie
    // Clear form
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating(0);
  };

  return (
    <form className="add-movie-form" onSubmit={handleSubmit}>
      <h2>Add a New Movie</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Rating (0-5)"
        min="0"
        max="5"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        required
      />
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovie;
