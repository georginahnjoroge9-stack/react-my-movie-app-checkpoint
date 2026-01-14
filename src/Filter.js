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
        min="0"
        max="5"
        placeholder="Minimum rating"
        value={ratingFilter}
        onChange={(e) => setRatingFilter(Number(e.target.value))}
      />
    </div>
  );
}

export default Filter;
