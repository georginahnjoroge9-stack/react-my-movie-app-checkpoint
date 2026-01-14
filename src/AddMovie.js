import { useState } from "react";

function AddMovie({ addMovie }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState(0);
  const [trailer, setTrailer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie({ title, description, posterURL, rating: Number(rating), trailer });
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating(0);
    setTrailer("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        required
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={posterURL}
        required
        onChange={(e) => setPosterURL(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating (0-5)"
        min="0"
        max="5"
        value={rating}
        required
        onChange={(e) => setRating(e.target.value)}
      />
      <input
        type="text"
        placeholder="Trailer URL (embed link)"
        value={trailer}
        required
        onChange={(e) => setTrailer(e.target.value)}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovie;
