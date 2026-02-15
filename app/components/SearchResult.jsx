import "./SearchResults.css";

export const SearchResult = () => {
  return (
    <div
      className="search-result"
      onClick={(e) => alert(`You clicked on ${result}`)}
    >
      {result.name}
    </div>
  );
};
