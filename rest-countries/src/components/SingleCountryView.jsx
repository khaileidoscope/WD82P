import Weather from "./Weather";

function SingleCountryView({ country }) {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital[0]}</p>
      <p>Area: {country.area}</p>
      <p>
        <strong>Languages:</strong>
      </p>
      <ul>
        {country.languages &&
          Object.values(country.languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
      </ul>
      <img src={country.flags.png} />
      <Weather country={country.name.common} />
    </div>
  );
}

export default SingleCountryView;
