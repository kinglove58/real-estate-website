function SearchResultList({ result, onResultClick }) {
  return (
    <>
      <div
        className="overflow-y-auto hover:bg-gray-200 cursor-pointer p-2 text-black"
        onClick={() => onResultClick(result)}
      >
        {result}
      </div>
    </>
  );
}

export default SearchResultList;
