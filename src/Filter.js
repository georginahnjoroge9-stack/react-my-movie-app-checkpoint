// Component for filtering movies by title and rating
function Filter({ titleFilter, setTitleFilter, ratingFilter, setRatingFilter }) {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title..."
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <input
        type="number"
        placeholder="Min rating (0-5)"
        min="0"
        max="5"
        value={ratingFilter}
        onChange={(e) => setRatingFilter(Number(e.target.value))}
      />
    </div>
  );
}

export default Filter;

