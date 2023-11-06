import { useState, useEffect } from "react";
import "./App.css";
import Person from "./components/Person";
import PersonForm from "./components/PersonForm";
import Search from "./components/Search";
import Notification from "./components/Notification";
import personService from "./services/persons";

function App() {
  const [contacts, setContacts] = useState([]);
  const [results, setResults] = useState(contacts);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    personService.getAll().then((response) => {
      setContacts(response.data);
      setResults(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Phonebook App</h1>
      <Notification notification={notification} />
      <Search contacts={contacts} setResults={setResults} />

      <h2>add a new</h2>
      <PersonForm
        contacts={contacts}
        setContacts={setContacts}
        setResults={setResults}
        setNotification={setNotification}
        results={results}
      />

      <h2>Numbers</h2>
      <ul>
        {results.map((contact) => (
          <Person
            key={contact.id}
            contact={contact}
            contacts={contacts}
            results={results}
            setContacts={setContacts}
            setResults={setResults}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
