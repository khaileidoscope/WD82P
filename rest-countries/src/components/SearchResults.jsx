import SingleCountryView from "./SingleCountryView";

function SearchResults({ filteredResults }) {
  return (
    <div>
      {filteredResults.length < 10 ? (
        filteredResults.length === 1 ? (
          <div>
            <SingleCountryView country={filteredResults[0]} />
          </div>
        ) : (
          filteredResults.map((country) => (
            <ul key={country.name.official}>
              <li>{country.name.common}</li>
            </ul>
          ))
        )
      ) : (
        <p>Too many matches, specify another filter</p>
      )}
    </div>
  );
}

export default SearchResults;
