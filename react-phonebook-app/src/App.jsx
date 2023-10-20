import { useState, useEffect } from "react";
import "./App.css";
import Person from "./components/Person";
import PersonForm from "./components/PersonForm";
import Search from "./components/Search";
import personService from "./services/persons";

function App() {
  const [contacts, setContacts] = useState([]);
  const [results, setResults] = useState(contacts);

  // const fetchContacts = async () => {
  //   const response = await axios.get("http://localhost:3001/contacts");

  //   setContacts(data);
  //   setResults(data);
  // };

  useEffect(() => {
    personService.getAll().then((response) => {
      setContacts(response.data);
      setResults(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Phonebook App</h1>

      <Search contacts={contacts} setResults={setResults} />

      <h2>add a new</h2>
      <PersonForm
        contacts={contacts}
        setContacts={setContacts}
        setResults={setResults}
        results={results}
      />

      <h2>Numbers</h2>
      <ul>
        {results.map((contact) => (
          <Person
            key={contact.id}
            name={contact.name}
            number={contact.number}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
