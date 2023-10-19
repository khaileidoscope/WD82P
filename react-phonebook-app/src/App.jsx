import { useState } from "react";
import "./App.css";
import Person from "./components/Person";
import PersonForm from "./components/PersonForm";
import Search from "./components/Search";

function App() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Arto Hellas",
      number: "040-123456",
    },
    {
      id: 2,
      name: "Ada Lovelace",
      number: "39-44-5323523",
    },
  ]);

  const [results, setResults] = useState(contacts);

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
