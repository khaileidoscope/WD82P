import { useState } from "react";
import "./App.css";

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

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addContact = (event) => {
    event.preventDefault();

    const newNameObj = {
      id: contacts.length + 1,
      name: newName,
      number: newNumber,
    };

    setContacts([...contacts, newNameObj]);
    setNewName("");
    setNewNumber("");
  };

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h1>Phonebook App</h1>

      <form onSubmit={addContact}>
        <div>
          name:{" "}
          <input
            value={newName}
            onChange={handleNewName}
            type="text"
            required
          />
        </div>
        <div>
          number:{" "}
          <input
            value={newNumber}
            onChange={handleNewNumber}
            type="number"
            required
          />
        </div>
        <button type="submit">add</button>
      </form>

      <h1>Numbers</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} {contact.number}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
