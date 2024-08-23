import { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import SearchBottom from "./SearchBottom";
import SearchResultList from "./SearchResultList";

function SearchBar() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [errMsg, setErrMsg] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();

      if (data && data.length) {
        setData(data);
      }
    } catch (e) {
      setErrMsg(e.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOnChange = (value) => {
    setInput(value);
    if (value) {
      const filtered = data.filter((user) =>
        user.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  };

  const handleResultClick = (name) => {
    setInput(name);
    setFilteredData([]);
  };

  return (
    <>
      <div className="flex items-center bg-white justify-between p-3 rounded-lg w-full">
        <FaMapMarkerAlt className="text-blue w-6 h-6 mr-2" />
        <input
          className="border-none outline-none text-black w-full"
          placeholder="type a location"
          value={input}
          onChange={(e) => handleOnChange(e.target.value)}
          type="search"
        />
        <SearchBottom bottonName={"Search"} />
      </div>
      {errMsg && <div className="text-red-500">{errMsg}</div>}
      <div className=" w-full bg-white mt-1 rounded-lg shadow-lg">
        {filteredData.map((result, id) => (
          <SearchResultList
            key={id}
            result={result.name}
            onResultClick={handleResultClick}
          />
        ))}
      </div>
    </>
  );
}

export default SearchBar;
