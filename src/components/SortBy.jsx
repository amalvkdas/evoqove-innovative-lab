import "./SortBy.css"

const SortBy = ({ handleSort }) => {

  return (
    <div className="sort-container">
      <label htmlFor="sort" className="sort-label">Sort by:&nbsp;&nbsp;</label>
      <select id="sort" onChange={(e) => handleSort(e.target.value)} className="sort-select">
        <option value="newly_added">Newly added</option>
        <option value="top_rated">Top Rated</option>
        <option value="top_performing">Top Performing</option>
        <option value="name">Name</option>
        <option value="price_low_to_high">Price Low to High</option>
        <option value="price_high_to_low">Price High to Low</option>
      </select>
    </div>
  );
};

export default SortBy;
