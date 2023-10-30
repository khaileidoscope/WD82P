import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import SearchResults from "./components/SearchResults";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        // console.log(response.data);
        setCountries(response.data);
      });
  }, []);

  const handleSearch = (e) => {
    // console.log("Test");
    const query = e.target.value;

    if (query.length === 0) setFilteredResults([]);
    else {
      const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(query.toLowerCase())
      );
      console.log(filteredCountries);
      setFilteredResults(filteredCountries);
    }
  };

  return (
    <div>
      <div>
        find countries <input onChange={handleSearch} />
      </div>
      <SearchResults filteredResults={filteredResults} />
    </div>
  );
}

export default App;
